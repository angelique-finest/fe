import { Component, OnDestroy, OnInit } from '@angular/core';
import { StockCoreTabComponent } from '../../stock-core/stock-core-tab/stock-core-tab.component';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalEventManagerService } from '../../../../core/global-event-manager.service';
import { FacilityControllerService } from '../../../../../api/api/facilityController.service';
import { AuthService } from '../../../../core/auth.service';
import { CompanyControllerService } from '../../../../../api/api/companyController.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { FacilitySemiProductsCodebookService } from '../../../../shared-services/facility-semi-products-codebook.service';
import { CodebookTranslations } from '../../../../shared-services/codebook-translations';
import {map, startWith, take} from 'rxjs/operators';
import {BeycoTokenService} from '../../../../shared-services/beyco-token.service';
import {ApiResponseApiCompanyGet} from '../../../../../api/model/apiResponseApiCompanyGet';
import { SelectedUserCompanyService } from '../../../../core/selected-user-company.service';

@Component({
  selector: 'app-stock-orders-tab',
  templateUrl: './stock-orders-tab.component.html',
  styleUrls: ['./stock-orders-tab.component.scss']
})
export class StockOrdersTabComponent extends StockCoreTabComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  showGroupView = true;
  rootTab = 3;

  isBeycoAuthorized = false;
  isAuthRoleToExportToBeyco = false;

  showedOrders = 0;
  allOrders = 0;

  purchaseOrderOnly = false;
  purchaseOrderOnly$ = new BehaviorSubject<boolean>(this.purchaseOrderOnly);

  availableOnly = true;
  availableOnly$ = new BehaviorSubject<boolean>(this.availableOnly);

  semiProductFrom = new FormControl(null);

  facilitySemiProducts: FacilitySemiProductsCodebookService = null;

  reloadStockOrdersPing$ = new BehaviorSubject<boolean>(false);

  semiProductId$: Observable<number> = this.semiProductFrom.valueChanges.pipe(
    startWith(null),
    map(semiProduct => {
      if (semiProduct) { return semiProduct.id; }
      return null;
    })
  );

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected globalEventManager: GlobalEventManagerService,
    protected facilityControllerService: FacilityControllerService,
    protected authService: AuthService,
    protected companyController: CompanyControllerService,
    private codebookTranslations: CodebookTranslations,
    private beycoTokenService: BeycoTokenService,
    protected selUserCompanyService: SelectedUserCompanyService
  ) {
    super(router, route, globalEventManager, facilityControllerService, authService, companyController, selUserCompanyService);
  }

  async ngOnInit(): Promise<void> {

    await super.ngOnInit();

    this.isAuthorizedForBeyco();
    this.subscriptions.push(
        this.beycoTokenService.tokenAvailable$.subscribe(isAvailable => {
          this.isBeycoAuthorized = isAvailable;
        }),

        this.route.queryParams.pipe(take(1)).subscribe(params => {
          if (((params['code'] && params['scope']) || params['error']) && params['state']) {
            this.beycoTokenService.getTokenWithAuthenticationCode(params);
            this.router.navigate([], { relativeTo: this.route, queryParams: null, replaceUrl: true });
          }
        }),

        this.facilityIdPing$.subscribe(facilityId => this.setFacilitySemiProducts(facilityId)),
    );
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  setPurchaseOrdersOnly(poOnly: boolean) {
    this.purchaseOrderOnly = poOnly;
    this.purchaseOrderOnly$.next(poOnly);
  }

  setAvailableOnly(avOnly: boolean) {
    this.availableOnly = avOnly;
    this.availableOnly$.next(avOnly);
  }

  private setFacilitySemiProducts(facilityId: number) {
    if (facilityId !== null && facilityId !== undefined) {
      this.facilitySemiProducts = new FacilitySemiProductsCodebookService(this.facilityControllerService, facilityId, this.codebookTranslations);
    } else {
      this.facilitySemiProducts = null;
    }
  }

  onShowSO(event) {
    this.showedOrders = event;
  }

  onCountAllSO(event) {
    this.allOrders = event;
  }

  getAuthBeyco() {
    this.beycoTokenService.redirectToBeycoAuthorization('/my-stock/orders/tab');
  }

  logoutFromBeyco() {
    this.beycoTokenService.removeToken();
    this.globalEventManager.push({
      action: 'success',
      notificationType: 'success',
      title: $localize`:@@beycoToken.notification.logout.title:Logout from Beyco`,
      message: $localize`:@@beycoToken.notification.logout.message:You successfully logged out!`
    });
  }

  openBeycoOrderFieldList() {
    const stockOrderIds = (this.showGroupView ? this.selectedGroupOrders.map(o => o.groupedIds[0]) : this.selectedOrders.map(o => o.id));
    this.router.navigate(['my-stock', 'beyco', 'list'], { queryParams: { id: stockOrderIds } });
  }

  changeShowGroupView(doShow: boolean) {
    this.showGroupView = doShow;
  }

  private isAuthorizedForBeyco() {

    if (this.companyProfile) {
      this.isAuthRoleToExportToBeyco = !!this.companyProfile.allowBeycoIntegration;
    }
  }

}
