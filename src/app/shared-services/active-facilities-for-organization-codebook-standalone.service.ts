import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FacilityService, ListFacilitiesForOrganization } from 'src/api-chain/api/facility.service';
import { ChainFacility } from 'src/api-chain/model/chainFacility';
import { PagedSearchResults } from 'src/interfaces/CodebookHelperService';
import { GeneralSifrantService } from './general-sifrant.service';
import { dbKey } from 'src/shared/utils';
import { CodebookTranslations } from './codebook-translations';

export class ActiveFacilitiesForOrganizationCodebookStandaloneService extends GeneralSifrantService<ChainFacility> {

  constructor(
    private chainFacilityService: FacilityService,
    private organizationId: string,
    protected codebookTranslations: CodebookTranslations
  ) {
    super();
    this.initializeCodebook();
  }

  requestParams = {
    limit: 1000,
    offset: 0,
  } as ListFacilitiesForOrganization.PartialParamMap;

  public identifier(el: ChainFacility) {
    return dbKey(el);
  }

  public textRepresentation(el: ChainFacility) {
    return this.codebookTranslations.translate(el, 'name');
    // return `${el.name}`
  }

  public placeholder(): string {
    return $localize`:@@activeFacility.input.placehoder:Select facility`;
  }

  public makeQuery(key: string, params?: any): Observable<PagedSearchResults<ChainFacility>> {
    const lkey = key ? key.toLocaleLowerCase() : null;
    return this.sifrant$.pipe(
      map((allChoices: PagedSearchResults<ChainFacility>) => {
        return {
          results: allChoices.results.filter((x: ChainFacility) => lkey == null || x.name.toLocaleLowerCase().indexOf(lkey) >= 0),
          offset: allChoices.offset,
          limit: allChoices.limit,
          totalCount: allChoices.totalCount
        };
      })
    );
  }

  public initializeCodebook() {
    this.sifrant$ = this.sifrant$ || this.chainFacilityService
        .listFacilitiesForOrganizationByMap({...this.requestParams, organizationId: this.organizationId}).pipe(
      map(x => this.pack(x.data.items))
    );
  }

}

