/*
 * Copyright(c) 2009 - 2019 Abelium d.o.o.
 * Kajuhova 90, 1000 Ljubljana, Slovenia
 * All rights reserved
 * Copyright(c) 1995 - 2018 T-Systems Multimedia Solutions GmbH
 * Riesaer Str. 5, 01129 Dresden
 * All rights reserved.
 *
 * INATrace Services API
 * Abelium INATrace Services API swagger documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the openapi-typescript-angular-generator.
 * https://github.com/alenabelium/openapi-typescript-angular-generator
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';

import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';
import { catchError }                                        from 'rxjs/operators';

import { ApiProcessingPerformanceRequest } from '../model/apiProcessingPerformanceRequest';
import { ApiResponseApiDeliveriesTotal } from '../model/apiResponseApiDeliveriesTotal';
import { ApiResponseApiProcessingPerformanceTotal } from '../model/apiResponseApiProcessingPerformanceTotal';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/**
 * Namespace for calculateProcessingPerformanceDataUsingPOST.
 */
export namespace CalculateProcessingPerformanceDataUsingPOST {
    /**
     * Parameter map for calculateProcessingPerformanceDataUsingPOST.
     */
    export interface PartialParamMap {
      /**
       * processingPerformanceRequest
       */
      ApiProcessingPerformanceRequest: ApiProcessingPerformanceRequest;
    }

    /**
     * Enumeration of all parameters for calculateProcessingPerformanceDataUsingPOST.
     */
    export enum Parameters {
      /**
       * processingPerformanceRequest
       */
      ApiProcessingPerformanceRequest = 'ApiProcessingPerformanceRequest'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of calculateProcessingPerformanceDataUsingPOST
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof CalculateProcessingPerformanceDataUsingPOST.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for exportDeliveriesDataUsingGET.
 */
export namespace ExportDeliveriesDataUsingGET {
    /**
     * Parameter map for exportDeliveriesDataUsingGET.
     */
    export interface PartialParamMap {
      /**
       * Company ID
       */
      companyId: number;
      /**
       * Aggregation type
       */
      aggregationType: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
      /**
       * Export type
       */
      exportType: 'EXCEL' | 'PDF' | 'CSV';
      /**
       * Facility IDs
       */
      facilityIds?: Array<number>;
      /**
       * Semi-product ID
       */
      semiProductId?: number;
      /**
       * Farmer (UserCustomer) ID
       */
      farmerId?: number;
      /**
       * Collector (Representative of producer UserCustomer) ID
       */
      collectorId?: number;
      /**
       * Is women share
       */
      isWomenShare?: boolean;
      /**
       * Organic only
       */
      organicOnly?: boolean;
      /**
       * Price determined later
       */
      priceDeterminedLater?: boolean;
      /**
       * Production date range start
       */
      productionDateStart?: string;
      /**
       * Production date range end
       */
      productionDateEnd?: string;
    }

    /**
     * Enumeration of all parameters for exportDeliveriesDataUsingGET.
     */
    export enum Parameters {
      /**
       * Company ID
       */
      companyId = 'companyId',
      /**
       * Aggregation type
       */
      aggregationType = 'aggregationType',
      /**
       * Export type
       */
      exportType = 'exportType',
      /**
       * Facility IDs
       */
      facilityIds = 'facilityIds',
      /**
       * Semi-product ID
       */
      semiProductId = 'semiProductId',
      /**
       * Farmer (UserCustomer) ID
       */
      farmerId = 'farmerId',
      /**
       * Collector (Representative of producer UserCustomer) ID
       */
      collectorId = 'collectorId',
      /**
       * Is women share
       */
      isWomenShare = 'isWomenShare',
      /**
       * Organic only
       */
      organicOnly = 'organicOnly',
      /**
       * Price determined later
       */
      priceDeterminedLater = 'priceDeterminedLater',
      /**
       * Production date range start
       */
      productionDateStart = 'productionDateStart',
      /**
       * Production date range end
       */
      productionDateEnd = 'productionDateEnd'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of exportDeliveriesDataUsingGET
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof ExportDeliveriesDataUsingGET.PartialParamMap]?: [string, ValidatorFn][]} = {
      companyId: [
              ['required', Validators.required],
      ],
      aggregationType: [
              ['required', Validators.required],
      ],
      exportType: [
              ['required', Validators.required],
      ],
      facilityIds: [
      ],
      semiProductId: [
      ],
      farmerId: [
      ],
      collectorId: [
      ],
      isWomenShare: [
      ],
      organicOnly: [
      ],
      priceDeterminedLater: [
      ],
      productionDateStart: [
      ],
      productionDateEnd: [
      ],
    };
}

/**
 * Namespace for exportProcessingPerformanceDataUsingPOST.
 */
export namespace ExportProcessingPerformanceDataUsingPOST {
    /**
     * Parameter map for exportProcessingPerformanceDataUsingPOST.
     */
    export interface PartialParamMap {
      /**
       * processingPerformanceRequest
       */
      ApiProcessingPerformanceRequest: ApiProcessingPerformanceRequest;
    }

    /**
     * Enumeration of all parameters for exportProcessingPerformanceDataUsingPOST.
     */
    export enum Parameters {
      /**
       * processingPerformanceRequest
       */
      ApiProcessingPerformanceRequest = 'ApiProcessingPerformanceRequest'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of exportProcessingPerformanceDataUsingPOST
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof ExportProcessingPerformanceDataUsingPOST.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for getDeliveriesAggregatedDataUsingGET.
 */
export namespace GetDeliveriesAggregatedDataUsingGET {
    /**
     * Parameter map for getDeliveriesAggregatedDataUsingGET.
     */
    export interface PartialParamMap {
      /**
       * Company ID
       */
      companyId: number;
      /**
       * Aggregation type
       */
      aggregationType: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
      /**
       * Facility IDs
       */
      facilityIds?: Array<number>;
      /**
       * Semi-product ID
       */
      semiProductId?: number;
      /**
       * Farmer (UserCustomer) ID
       */
      farmerId?: number;
      /**
       * Collector (Representative of producer UserCustomer) ID
       */
      collectorId?: number;
      /**
       * Is women share
       */
      isWomenShare?: boolean;
      /**
       * Organic only
       */
      organicOnly?: boolean;
      /**
       * Price determined later
       */
      priceDeterminedLater?: boolean;
      /**
       * Production date range start
       */
      productionDateStart?: string;
      /**
       * Production date range end
       */
      productionDateEnd?: string;
    }

    /**
     * Enumeration of all parameters for getDeliveriesAggregatedDataUsingGET.
     */
    export enum Parameters {
      /**
       * Company ID
       */
      companyId = 'companyId',
      /**
       * Aggregation type
       */
      aggregationType = 'aggregationType',
      /**
       * Facility IDs
       */
      facilityIds = 'facilityIds',
      /**
       * Semi-product ID
       */
      semiProductId = 'semiProductId',
      /**
       * Farmer (UserCustomer) ID
       */
      farmerId = 'farmerId',
      /**
       * Collector (Representative of producer UserCustomer) ID
       */
      collectorId = 'collectorId',
      /**
       * Is women share
       */
      isWomenShare = 'isWomenShare',
      /**
       * Organic only
       */
      organicOnly = 'organicOnly',
      /**
       * Price determined later
       */
      priceDeterminedLater = 'priceDeterminedLater',
      /**
       * Production date range start
       */
      productionDateStart = 'productionDateStart',
      /**
       * Production date range end
       */
      productionDateEnd = 'productionDateEnd'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of getDeliveriesAggregatedDataUsingGET
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof GetDeliveriesAggregatedDataUsingGET.PartialParamMap]?: [string, ValidatorFn][]} = {
      companyId: [
              ['required', Validators.required],
      ],
      aggregationType: [
              ['required', Validators.required],
      ],
      facilityIds: [
      ],
      semiProductId: [
      ],
      farmerId: [
      ],
      collectorId: [
      ],
      isWomenShare: [
      ],
      organicOnly: [
      ],
      priceDeterminedLater: [
      ],
      productionDateStart: [
      ],
      productionDateEnd: [
      ],
    };
}



@Injectable({
  providedIn: 'root'
})
export class DashboardControllerService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath != null ? configuration.basePath : (basePath != null ? basePath : this.basePath);
        } else {
            this.configuration.basePath = basePath != null ? basePath : this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }



  /**
   * Calculates processing performance data by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public calculateProcessingPerformanceDataUsingPOSTByMap(
    map: CalculateProcessingPerformanceDataUsingPOST.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiResponseApiProcessingPerformanceTotal>;
  public calculateProcessingPerformanceDataUsingPOSTByMap(
    map: CalculateProcessingPerformanceDataUsingPOST.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiResponseApiProcessingPerformanceTotal>>;
  public calculateProcessingPerformanceDataUsingPOSTByMap(
    map: CalculateProcessingPerformanceDataUsingPOST.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiResponseApiProcessingPerformanceTotal>>;
  public calculateProcessingPerformanceDataUsingPOSTByMap(
    map: CalculateProcessingPerformanceDataUsingPOST.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.calculateProcessingPerformanceDataUsingPOST(
      map.ApiProcessingPerformanceRequest,
      observe,
      reportProgress
    );
  }


    /**
     * Calculates processing performance data
     * 
     * @param ApiProcessingPerformanceRequest processingPerformanceRequest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public calculateProcessingPerformanceDataUsingPOST(ApiProcessingPerformanceRequest: ApiProcessingPerformanceRequest, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiResponseApiProcessingPerformanceTotal>;
    public calculateProcessingPerformanceDataUsingPOST(ApiProcessingPerformanceRequest: ApiProcessingPerformanceRequest, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiResponseApiProcessingPerformanceTotal>>;
    public calculateProcessingPerformanceDataUsingPOST(ApiProcessingPerformanceRequest: ApiProcessingPerformanceRequest, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiResponseApiProcessingPerformanceTotal>>;
    public calculateProcessingPerformanceDataUsingPOST(ApiProcessingPerformanceRequest: ApiProcessingPerformanceRequest, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (ApiProcessingPerformanceRequest === null || ApiProcessingPerformanceRequest === undefined) {
            throw new Error('Required parameter ApiProcessingPerformanceRequest was null or undefined when calling calculateProcessingPerformanceDataUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.post<ApiResponseApiProcessingPerformanceTotal>(`${this.configuration.basePath}/api/dashboard/processing-performance-data`,
            ApiProcessingPerformanceRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'calculateProcessingPerformanceDataUsingPOST')));
        }
        return handle;
    }


  /**
   * exportDeliveriesData by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public exportDeliveriesDataUsingGETByMap(
    map: ExportDeliveriesDataUsingGET.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<Blob>;
  public exportDeliveriesDataUsingGETByMap(
    map: ExportDeliveriesDataUsingGET.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<Blob>>;
  public exportDeliveriesDataUsingGETByMap(
    map: ExportDeliveriesDataUsingGET.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<Blob>>;
  public exportDeliveriesDataUsingGETByMap(
    map: ExportDeliveriesDataUsingGET.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.exportDeliveriesDataUsingGET(
      map.companyId,
      map.aggregationType,
      map.exportType,
      map.facilityIds,
      map.semiProductId,
      map.farmerId,
      map.collectorId,
      map.isWomenShare,
      map.organicOnly,
      map.priceDeterminedLater,
      map.productionDateStart,
      map.productionDateEnd,
      observe,
      reportProgress
    );
  }


    /**
     * exportDeliveriesData
     * 
     * @param companyId Company ID
     * @param aggregationType Aggregation type
     * @param exportType Export type
     * @param facilityIds Facility IDs
     * @param semiProductId Semi-product ID
     * @param farmerId Farmer (UserCustomer) ID
     * @param collectorId Collector (Representative of producer UserCustomer) ID
     * @param isWomenShare Is women share
     * @param organicOnly Organic only
     * @param priceDeterminedLater Price determined later
     * @param productionDateStart Production date range start
     * @param productionDateEnd Production date range end
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public exportDeliveriesDataUsingGET(companyId: number, aggregationType: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR', exportType: 'EXCEL' | 'PDF' | 'CSV', facilityIds?: Array<number>, semiProductId?: number, farmerId?: number, collectorId?: number, isWomenShare?: boolean, organicOnly?: boolean, priceDeterminedLater?: boolean, productionDateStart?: string, productionDateEnd?: string, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<Blob>;
    public exportDeliveriesDataUsingGET(companyId: number, aggregationType: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR', exportType: 'EXCEL' | 'PDF' | 'CSV', facilityIds?: Array<number>, semiProductId?: number, farmerId?: number, collectorId?: number, isWomenShare?: boolean, organicOnly?: boolean, priceDeterminedLater?: boolean, productionDateStart?: string, productionDateEnd?: string, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<Blob>>;
    public exportDeliveriesDataUsingGET(companyId: number, aggregationType: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR', exportType: 'EXCEL' | 'PDF' | 'CSV', facilityIds?: Array<number>, semiProductId?: number, farmerId?: number, collectorId?: number, isWomenShare?: boolean, organicOnly?: boolean, priceDeterminedLater?: boolean, productionDateStart?: string, productionDateEnd?: string, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<Blob>>;
    public exportDeliveriesDataUsingGET(companyId: number, aggregationType: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR', exportType: 'EXCEL' | 'PDF' | 'CSV', facilityIds?: Array<number>, semiProductId?: number, farmerId?: number, collectorId?: number, isWomenShare?: boolean, organicOnly?: boolean, priceDeterminedLater?: boolean, productionDateStart?: string, productionDateEnd?: string, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (companyId === null || companyId === undefined) {
            throw new Error('Required parameter companyId was null or undefined when calling exportDeliveriesDataUsingGET.');
        }
        if (aggregationType === null || aggregationType === undefined) {
            throw new Error('Required parameter aggregationType was null or undefined when calling exportDeliveriesDataUsingGET.');
        }
        if (exportType === null || exportType === undefined) {
            throw new Error('Required parameter exportType was null or undefined when calling exportDeliveriesDataUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (companyId !== undefined && companyId !== null) {
            queryParameters = queryParameters.set('companyId', <any>companyId);
        }
        if (facilityIds) {
            facilityIds.forEach((element) => {
                queryParameters = queryParameters.append('facilityIds', <any>element);
            })
        }
        if (semiProductId !== undefined && semiProductId !== null) {
            queryParameters = queryParameters.set('semiProductId', <any>semiProductId);
        }
        if (farmerId !== undefined && farmerId !== null) {
            queryParameters = queryParameters.set('farmerId', <any>farmerId);
        }
        if (collectorId !== undefined && collectorId !== null) {
            queryParameters = queryParameters.set('collectorId', <any>collectorId);
        }
        if (isWomenShare !== undefined && isWomenShare !== null) {
            queryParameters = queryParameters.set('isWomenShare', <any>isWomenShare);
        }
        if (organicOnly !== undefined && organicOnly !== null) {
            queryParameters = queryParameters.set('organicOnly', <any>organicOnly);
        }
        if (priceDeterminedLater !== undefined && priceDeterminedLater !== null) {
            queryParameters = queryParameters.set('priceDeterminedLater', <any>priceDeterminedLater);
        }
        if (productionDateStart !== undefined && productionDateStart !== null) {
            queryParameters = queryParameters.set('productionDateStart', <any>productionDateStart);
        }
        if (productionDateEnd !== undefined && productionDateEnd !== null) {
            queryParameters = queryParameters.set('productionDateEnd', <any>productionDateEnd);
        }
        if (aggregationType !== undefined && aggregationType !== null) {
            queryParameters = queryParameters.set('aggregationType', <any>aggregationType);
        }
        if (exportType !== undefined && exportType !== null) {
            queryParameters = queryParameters.set('exportType', <any>exportType);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.get(`${this.configuration.basePath}/api/dashboard/deliveries-aggregated-data/export`,
            {
                params: queryParameters,
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'exportDeliveriesDataUsingGET')));
        }
        return handle;
    }


  /**
   * Exports processing performance data to the requested format by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public exportProcessingPerformanceDataUsingPOSTByMap(
    map: ExportProcessingPerformanceDataUsingPOST.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<Blob>;
  public exportProcessingPerformanceDataUsingPOSTByMap(
    map: ExportProcessingPerformanceDataUsingPOST.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<Blob>>;
  public exportProcessingPerformanceDataUsingPOSTByMap(
    map: ExportProcessingPerformanceDataUsingPOST.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<Blob>>;
  public exportProcessingPerformanceDataUsingPOSTByMap(
    map: ExportProcessingPerformanceDataUsingPOST.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.exportProcessingPerformanceDataUsingPOST(
      map.ApiProcessingPerformanceRequest,
      observe,
      reportProgress
    );
  }


    /**
     * Exports processing performance data to the requested format
     * 
     * @param ApiProcessingPerformanceRequest processingPerformanceRequest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public exportProcessingPerformanceDataUsingPOST(ApiProcessingPerformanceRequest: ApiProcessingPerformanceRequest, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<Blob>;
    public exportProcessingPerformanceDataUsingPOST(ApiProcessingPerformanceRequest: ApiProcessingPerformanceRequest, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<Blob>>;
    public exportProcessingPerformanceDataUsingPOST(ApiProcessingPerformanceRequest: ApiProcessingPerformanceRequest, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<Blob>>;
    public exportProcessingPerformanceDataUsingPOST(ApiProcessingPerformanceRequest: ApiProcessingPerformanceRequest, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (ApiProcessingPerformanceRequest === null || ApiProcessingPerformanceRequest === undefined) {
            throw new Error('Required parameter ApiProcessingPerformanceRequest was null or undefined when calling exportProcessingPerformanceDataUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.post(`${this.configuration.basePath}/api/dashboard/processing-performance-data/export`,
            ApiProcessingPerformanceRequest,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'exportProcessingPerformanceDataUsingPOST')));
        }
        return handle;
    }


  /**
   * getDeliveriesAggregatedData by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getDeliveriesAggregatedDataUsingGETByMap(
    map: GetDeliveriesAggregatedDataUsingGET.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiResponseApiDeliveriesTotal>;
  public getDeliveriesAggregatedDataUsingGETByMap(
    map: GetDeliveriesAggregatedDataUsingGET.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiResponseApiDeliveriesTotal>>;
  public getDeliveriesAggregatedDataUsingGETByMap(
    map: GetDeliveriesAggregatedDataUsingGET.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiResponseApiDeliveriesTotal>>;
  public getDeliveriesAggregatedDataUsingGETByMap(
    map: GetDeliveriesAggregatedDataUsingGET.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.getDeliveriesAggregatedDataUsingGET(
      map.companyId,
      map.aggregationType,
      map.facilityIds,
      map.semiProductId,
      map.farmerId,
      map.collectorId,
      map.isWomenShare,
      map.organicOnly,
      map.priceDeterminedLater,
      map.productionDateStart,
      map.productionDateEnd,
      observe,
      reportProgress
    );
  }


    /**
     * getDeliveriesAggregatedData
     * 
     * @param companyId Company ID
     * @param aggregationType Aggregation type
     * @param facilityIds Facility IDs
     * @param semiProductId Semi-product ID
     * @param farmerId Farmer (UserCustomer) ID
     * @param collectorId Collector (Representative of producer UserCustomer) ID
     * @param isWomenShare Is women share
     * @param organicOnly Organic only
     * @param priceDeterminedLater Price determined later
     * @param productionDateStart Production date range start
     * @param productionDateEnd Production date range end
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDeliveriesAggregatedDataUsingGET(companyId: number, aggregationType: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR', facilityIds?: Array<number>, semiProductId?: number, farmerId?: number, collectorId?: number, isWomenShare?: boolean, organicOnly?: boolean, priceDeterminedLater?: boolean, productionDateStart?: string, productionDateEnd?: string, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiResponseApiDeliveriesTotal>;
    public getDeliveriesAggregatedDataUsingGET(companyId: number, aggregationType: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR', facilityIds?: Array<number>, semiProductId?: number, farmerId?: number, collectorId?: number, isWomenShare?: boolean, organicOnly?: boolean, priceDeterminedLater?: boolean, productionDateStart?: string, productionDateEnd?: string, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiResponseApiDeliveriesTotal>>;
    public getDeliveriesAggregatedDataUsingGET(companyId: number, aggregationType: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR', facilityIds?: Array<number>, semiProductId?: number, farmerId?: number, collectorId?: number, isWomenShare?: boolean, organicOnly?: boolean, priceDeterminedLater?: boolean, productionDateStart?: string, productionDateEnd?: string, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiResponseApiDeliveriesTotal>>;
    public getDeliveriesAggregatedDataUsingGET(companyId: number, aggregationType: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR', facilityIds?: Array<number>, semiProductId?: number, farmerId?: number, collectorId?: number, isWomenShare?: boolean, organicOnly?: boolean, priceDeterminedLater?: boolean, productionDateStart?: string, productionDateEnd?: string, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (companyId === null || companyId === undefined) {
            throw new Error('Required parameter companyId was null or undefined when calling getDeliveriesAggregatedDataUsingGET.');
        }
        if (aggregationType === null || aggregationType === undefined) {
            throw new Error('Required parameter aggregationType was null or undefined when calling getDeliveriesAggregatedDataUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (companyId !== undefined && companyId !== null) {
            queryParameters = queryParameters.set('companyId', <any>companyId);
        }
        if (facilityIds) {
            facilityIds.forEach((element) => {
                queryParameters = queryParameters.append('facilityIds', <any>element);
            })
        }
        if (semiProductId !== undefined && semiProductId !== null) {
            queryParameters = queryParameters.set('semiProductId', <any>semiProductId);
        }
        if (farmerId !== undefined && farmerId !== null) {
            queryParameters = queryParameters.set('farmerId', <any>farmerId);
        }
        if (collectorId !== undefined && collectorId !== null) {
            queryParameters = queryParameters.set('collectorId', <any>collectorId);
        }
        if (isWomenShare !== undefined && isWomenShare !== null) {
            queryParameters = queryParameters.set('isWomenShare', <any>isWomenShare);
        }
        if (organicOnly !== undefined && organicOnly !== null) {
            queryParameters = queryParameters.set('organicOnly', <any>organicOnly);
        }
        if (priceDeterminedLater !== undefined && priceDeterminedLater !== null) {
            queryParameters = queryParameters.set('priceDeterminedLater', <any>priceDeterminedLater);
        }
        if (productionDateStart !== undefined && productionDateStart !== null) {
            queryParameters = queryParameters.set('productionDateStart', <any>productionDateStart);
        }
        if (productionDateEnd !== undefined && productionDateEnd !== null) {
            queryParameters = queryParameters.set('productionDateEnd', <any>productionDateEnd);
        }
        if (aggregationType !== undefined && aggregationType !== null) {
            queryParameters = queryParameters.set('aggregationType', <any>aggregationType);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.get<ApiResponseApiDeliveriesTotal>(`${this.configuration.basePath}/api/dashboard/deliveries-aggregated-data`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'getDeliveriesAggregatedDataUsingGET')));
        }
        return handle;
    }

}
