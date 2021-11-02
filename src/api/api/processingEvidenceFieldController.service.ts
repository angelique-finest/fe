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

import { ApiDefaultResponse } from '../model/apiDefaultResponse';
import { ApiPaginatedResponseApiProcessingEvidenceField } from '../model/apiPaginatedResponseApiProcessingEvidenceField';
import { ApiProcessingEvidenceField } from '../model/apiProcessingEvidenceField';
import { ApiResponseApiBaseEntity } from '../model/apiResponseApiBaseEntity';
import { ApiResponseApiProcessingEvidenceField } from '../model/apiResponseApiProcessingEvidenceField';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/**
 * Namespace for createOrUpdateProcessingEvidenceFieldUsingPUT.
 */
export namespace CreateOrUpdateProcessingEvidenceFieldUsingPUT {
    /**
     * Parameter map for createOrUpdateProcessingEvidenceFieldUsingPUT.
     */
    export interface PartialParamMap {
      /**
       * apiProcessingEvidenceField
       */
      ApiProcessingEvidenceField: ApiProcessingEvidenceField;
    }

    /**
     * Enumeration of all parameters for createOrUpdateProcessingEvidenceFieldUsingPUT.
     */
    export enum Parameters {
      /**
       * apiProcessingEvidenceField
       */
      ApiProcessingEvidenceField = 'ApiProcessingEvidenceField'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of createOrUpdateProcessingEvidenceFieldUsingPUT
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof CreateOrUpdateProcessingEvidenceFieldUsingPUT.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for deleteProcessingEvidenceFieldUsingDELETE.
 */
export namespace DeleteProcessingEvidenceFieldUsingDELETE {
    /**
     * Parameter map for deleteProcessingEvidenceFieldUsingDELETE.
     */
    export interface PartialParamMap {
      /**
       * ProcessingEvidenceField ID
       */
      id: number;
    }

    /**
     * Enumeration of all parameters for deleteProcessingEvidenceFieldUsingDELETE.
     */
    export enum Parameters {
      /**
       * ProcessingEvidenceField ID
       */
      id = 'id'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of deleteProcessingEvidenceFieldUsingDELETE
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof DeleteProcessingEvidenceFieldUsingDELETE.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
      ],
    };
}

/**
 * Namespace for getProcessingEvidenceFieldListUsingGET.
 */
export namespace GetProcessingEvidenceFieldListUsingGET {
    /**
     * Parameter map for getProcessingEvidenceFieldListUsingGET.
     */
    export interface PartialParamMap {
      /**
       * Only count, only fetch, or return both values (if null)
       */
      requestType?: 'COUNT' | 'FETCH';
      /**
       * Number of records to return. Min: 1, default: 100
       */
      limit?: number;
      /**
       * Number of records to skip before returning. Default: 0, min: 0
       */
      offset?: number;
      /**
       * Column name to be sorted by, varies for each endpoint, default is id
       */
      sortBy?: string;
      /**
       * Direction of sorting (ASC or DESC). Default DESC.
       */
      sort?: 'ASC' | 'DESC';
      /**
       * language
       */
      language?: 'EN' | 'DE' | 'RW' | 'ES';
    }

    /**
     * Enumeration of all parameters for getProcessingEvidenceFieldListUsingGET.
     */
    export enum Parameters {
      /**
       * Only count, only fetch, or return both values (if null)
       */
      requestType = 'requestType',
      /**
       * Number of records to return. Min: 1, default: 100
       */
      limit = 'limit',
      /**
       * Number of records to skip before returning. Default: 0, min: 0
       */
      offset = 'offset',
      /**
       * Column name to be sorted by, varies for each endpoint, default is id
       */
      sortBy = 'sortBy',
      /**
       * Direction of sorting (ASC or DESC). Default DESC.
       */
      sort = 'sort',
      /**
       * language
       */
      language = 'language'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of getProcessingEvidenceFieldListUsingGET
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof GetProcessingEvidenceFieldListUsingGET.PartialParamMap]?: [string, ValidatorFn][]} = {
      requestType: [
      ],
      limit: [
      ],
      offset: [
      ],
      sortBy: [
      ],
      sort: [
      ],
      language: [
      ],
    };
}

/**
 * Namespace for getProcessingEvidenceFieldUsingGET.
 */
export namespace GetProcessingEvidenceFieldUsingGET {
    /**
     * Parameter map for getProcessingEvidenceFieldUsingGET.
     */
    export interface PartialParamMap {
      /**
       * ProcessingEvidenceField ID
       */
      id: number;
      /**
       * language
       */
      language?: 'EN' | 'DE' | 'RW' | 'ES';
    }

    /**
     * Enumeration of all parameters for getProcessingEvidenceFieldUsingGET.
     */
    export enum Parameters {
      /**
       * ProcessingEvidenceField ID
       */
      id = 'id',
      /**
       * language
       */
      language = 'language'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of getProcessingEvidenceFieldUsingGET
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof GetProcessingEvidenceFieldUsingGET.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
      ],
      language: [
      ],
    };
}

/**
 * Namespace for listProcessingEvidenceFieldsByValueChainUsingGET.
 */
export namespace ListProcessingEvidenceFieldsByValueChainUsingGET {
    /**
     * Parameter map for listProcessingEvidenceFieldsByValueChainUsingGET.
     */
    export interface PartialParamMap {
      /**
       * Value chain ID
       */
      id: number;
      /**
       * Only count, only fetch, or return both values (if null)
       */
      requestType?: 'COUNT' | 'FETCH';
      /**
       * Number of records to return. Min: 1, default: 100
       */
      limit?: number;
      /**
       * Number of records to skip before returning. Default: 0, min: 0
       */
      offset?: number;
      /**
       * Column name to be sorted by, varies for each endpoint, default is id
       */
      sortBy?: string;
      /**
       * Direction of sorting (ASC or DESC). Default DESC.
       */
      sort?: 'ASC' | 'DESC';
      /**
       * language
       */
      language?: 'EN' | 'DE' | 'RW' | 'ES';
    }

    /**
     * Enumeration of all parameters for listProcessingEvidenceFieldsByValueChainUsingGET.
     */
    export enum Parameters {
      /**
       * Value chain ID
       */
      id = 'id',
      /**
       * Only count, only fetch, or return both values (if null)
       */
      requestType = 'requestType',
      /**
       * Number of records to return. Min: 1, default: 100
       */
      limit = 'limit',
      /**
       * Number of records to skip before returning. Default: 0, min: 0
       */
      offset = 'offset',
      /**
       * Column name to be sorted by, varies for each endpoint, default is id
       */
      sortBy = 'sortBy',
      /**
       * Direction of sorting (ASC or DESC). Default DESC.
       */
      sort = 'sort',
      /**
       * language
       */
      language = 'language'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of listProcessingEvidenceFieldsByValueChainUsingGET
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof ListProcessingEvidenceFieldsByValueChainUsingGET.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
      ],
      requestType: [
      ],
      limit: [
      ],
      offset: [
      ],
      sortBy: [
      ],
      sort: [
      ],
      language: [
      ],
    };
}



@Injectable({
  providedIn: 'root'
})
export class ProcessingEvidenceFieldControllerService {

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
   * Create or update processing evidence field. If ID is provided, then the entity with the provided ID is updated. by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public createOrUpdateProcessingEvidenceFieldUsingPUTByMap(
    map: CreateOrUpdateProcessingEvidenceFieldUsingPUT.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiResponseApiBaseEntity>;
  public createOrUpdateProcessingEvidenceFieldUsingPUTByMap(
    map: CreateOrUpdateProcessingEvidenceFieldUsingPUT.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiResponseApiBaseEntity>>;
  public createOrUpdateProcessingEvidenceFieldUsingPUTByMap(
    map: CreateOrUpdateProcessingEvidenceFieldUsingPUT.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiResponseApiBaseEntity>>;
  public createOrUpdateProcessingEvidenceFieldUsingPUTByMap(
    map: CreateOrUpdateProcessingEvidenceFieldUsingPUT.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.createOrUpdateProcessingEvidenceFieldUsingPUT(
      map.ApiProcessingEvidenceField,
      observe,
      reportProgress
    );
  }


    /**
     * Create or update processing evidence field. If ID is provided, then the entity with the provided ID is updated.
     * 
     * @param ApiProcessingEvidenceField apiProcessingEvidenceField
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createOrUpdateProcessingEvidenceFieldUsingPUT(ApiProcessingEvidenceField: ApiProcessingEvidenceField, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiResponseApiBaseEntity>;
    public createOrUpdateProcessingEvidenceFieldUsingPUT(ApiProcessingEvidenceField: ApiProcessingEvidenceField, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiResponseApiBaseEntity>>;
    public createOrUpdateProcessingEvidenceFieldUsingPUT(ApiProcessingEvidenceField: ApiProcessingEvidenceField, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiResponseApiBaseEntity>>;
    public createOrUpdateProcessingEvidenceFieldUsingPUT(ApiProcessingEvidenceField: ApiProcessingEvidenceField, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (ApiProcessingEvidenceField === null || ApiProcessingEvidenceField === undefined) {
            throw new Error('Required parameter ApiProcessingEvidenceField was null or undefined when calling createOrUpdateProcessingEvidenceFieldUsingPUT.');
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

        const handle = this.httpClient.put<ApiResponseApiBaseEntity>(`${this.configuration.basePath}/api/chain/processing-evidence-field`,
            ApiProcessingEvidenceField,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'createOrUpdateProcessingEvidenceFieldUsingPUT')));
        }
        return handle;
    }


  /**
   * Deletes a processing evidence field with the provided ID. by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteProcessingEvidenceFieldUsingDELETEByMap(
    map: DeleteProcessingEvidenceFieldUsingDELETE.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiDefaultResponse>;
  public deleteProcessingEvidenceFieldUsingDELETEByMap(
    map: DeleteProcessingEvidenceFieldUsingDELETE.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiDefaultResponse>>;
  public deleteProcessingEvidenceFieldUsingDELETEByMap(
    map: DeleteProcessingEvidenceFieldUsingDELETE.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiDefaultResponse>>;
  public deleteProcessingEvidenceFieldUsingDELETEByMap(
    map: DeleteProcessingEvidenceFieldUsingDELETE.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.deleteProcessingEvidenceFieldUsingDELETE(
      map.id,
      observe,
      reportProgress
    );
  }


    /**
     * Deletes a processing evidence field with the provided ID.
     * 
     * @param id ProcessingEvidenceField ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteProcessingEvidenceFieldUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiDefaultResponse>;
    public deleteProcessingEvidenceFieldUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiDefaultResponse>>;
    public deleteProcessingEvidenceFieldUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiDefaultResponse>>;
    public deleteProcessingEvidenceFieldUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteProcessingEvidenceFieldUsingDELETE.');
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

        const handle = this.httpClient.delete<ApiDefaultResponse>(`${this.configuration.basePath}/api/chain/processing-evidence-field/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'deleteProcessingEvidenceFieldUsingDELETE')));
        }
        return handle;
    }


  /**
   * Get a paginated list of processing evidence fields. by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getProcessingEvidenceFieldListUsingGETByMap(
    map: GetProcessingEvidenceFieldListUsingGET.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiPaginatedResponseApiProcessingEvidenceField>;
  public getProcessingEvidenceFieldListUsingGETByMap(
    map: GetProcessingEvidenceFieldListUsingGET.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiPaginatedResponseApiProcessingEvidenceField>>;
  public getProcessingEvidenceFieldListUsingGETByMap(
    map: GetProcessingEvidenceFieldListUsingGET.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiPaginatedResponseApiProcessingEvidenceField>>;
  public getProcessingEvidenceFieldListUsingGETByMap(
    map: GetProcessingEvidenceFieldListUsingGET.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.getProcessingEvidenceFieldListUsingGET(
      map.requestType,
      map.limit,
      map.offset,
      map.sortBy,
      map.sort,
      map.language,
      observe,
      reportProgress
    );
  }


    /**
     * Get a paginated list of processing evidence fields.
     * 
     * @param requestType Only count, only fetch, or return both values (if null)
     * @param limit Number of records to return. Min: 1, default: 100
     * @param offset Number of records to skip before returning. Default: 0, min: 0
     * @param sortBy Column name to be sorted by, varies for each endpoint, default is id
     * @param sort Direction of sorting (ASC or DESC). Default DESC.
     * @param language language
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProcessingEvidenceFieldListUsingGET(requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', language?: 'EN' | 'DE' | 'RW' | 'ES', observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiPaginatedResponseApiProcessingEvidenceField>;
    public getProcessingEvidenceFieldListUsingGET(requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', language?: 'EN' | 'DE' | 'RW' | 'ES', observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiPaginatedResponseApiProcessingEvidenceField>>;
    public getProcessingEvidenceFieldListUsingGET(requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', language?: 'EN' | 'DE' | 'RW' | 'ES', observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiPaginatedResponseApiProcessingEvidenceField>>;
    public getProcessingEvidenceFieldListUsingGET(requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', language?: 'EN' | 'DE' | 'RW' | 'ES', observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (requestType !== undefined && requestType !== null) {
            queryParameters = queryParameters.set('requestType', <any>requestType);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (sortBy !== undefined && sortBy !== null) {
            queryParameters = queryParameters.set('sortBy', <any>sortBy);
        }
        if (sort !== undefined && sort !== null) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }

        let headers = this.defaultHeaders;
        if (language !== undefined && language !== null) {
            headers = headers.set('language', String(language));
        }

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

        const handle = this.httpClient.get<ApiPaginatedResponseApiProcessingEvidenceField>(`${this.configuration.basePath}/api/chain/processing-evidence-field/list`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'getProcessingEvidenceFieldListUsingGET')));
        }
        return handle;
    }


  /**
   * Get a single processing evidence field with the provided ID. by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getProcessingEvidenceFieldUsingGETByMap(
    map: GetProcessingEvidenceFieldUsingGET.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiResponseApiProcessingEvidenceField>;
  public getProcessingEvidenceFieldUsingGETByMap(
    map: GetProcessingEvidenceFieldUsingGET.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiResponseApiProcessingEvidenceField>>;
  public getProcessingEvidenceFieldUsingGETByMap(
    map: GetProcessingEvidenceFieldUsingGET.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiResponseApiProcessingEvidenceField>>;
  public getProcessingEvidenceFieldUsingGETByMap(
    map: GetProcessingEvidenceFieldUsingGET.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.getProcessingEvidenceFieldUsingGET(
      map.id,
      map.language,
      observe,
      reportProgress
    );
  }


    /**
     * Get a single processing evidence field with the provided ID.
     * 
     * @param id ProcessingEvidenceField ID
     * @param language language
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProcessingEvidenceFieldUsingGET(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiResponseApiProcessingEvidenceField>;
    public getProcessingEvidenceFieldUsingGET(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiResponseApiProcessingEvidenceField>>;
    public getProcessingEvidenceFieldUsingGET(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiResponseApiProcessingEvidenceField>>;
    public getProcessingEvidenceFieldUsingGET(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getProcessingEvidenceFieldUsingGET.');
        }

        let headers = this.defaultHeaders;
        if (language !== undefined && language !== null) {
            headers = headers.set('language', String(language));
        }

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

        const handle = this.httpClient.get<ApiResponseApiProcessingEvidenceField>(`${this.configuration.basePath}/api/chain/processing-evidence-field/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'getProcessingEvidenceFieldUsingGET')));
        }
        return handle;
    }


  /**
   * Get a list of processing evidence fields by value chain ID. by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public listProcessingEvidenceFieldsByValueChainUsingGETByMap(
    map: ListProcessingEvidenceFieldsByValueChainUsingGET.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiPaginatedResponseApiProcessingEvidenceField>;
  public listProcessingEvidenceFieldsByValueChainUsingGETByMap(
    map: ListProcessingEvidenceFieldsByValueChainUsingGET.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiPaginatedResponseApiProcessingEvidenceField>>;
  public listProcessingEvidenceFieldsByValueChainUsingGETByMap(
    map: ListProcessingEvidenceFieldsByValueChainUsingGET.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiPaginatedResponseApiProcessingEvidenceField>>;
  public listProcessingEvidenceFieldsByValueChainUsingGETByMap(
    map: ListProcessingEvidenceFieldsByValueChainUsingGET.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.listProcessingEvidenceFieldsByValueChainUsingGET(
      map.id,
      map.requestType,
      map.limit,
      map.offset,
      map.sortBy,
      map.sort,
      map.language,
      observe,
      reportProgress
    );
  }


    /**
     * Get a list of processing evidence fields by value chain ID.
     * 
     * @param id Value chain ID
     * @param requestType Only count, only fetch, or return both values (if null)
     * @param limit Number of records to return. Min: 1, default: 100
     * @param offset Number of records to skip before returning. Default: 0, min: 0
     * @param sortBy Column name to be sorted by, varies for each endpoint, default is id
     * @param sort Direction of sorting (ASC or DESC). Default DESC.
     * @param language language
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listProcessingEvidenceFieldsByValueChainUsingGET(id: number, requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', language?: 'EN' | 'DE' | 'RW' | 'ES', observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiPaginatedResponseApiProcessingEvidenceField>;
    public listProcessingEvidenceFieldsByValueChainUsingGET(id: number, requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', language?: 'EN' | 'DE' | 'RW' | 'ES', observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiPaginatedResponseApiProcessingEvidenceField>>;
    public listProcessingEvidenceFieldsByValueChainUsingGET(id: number, requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', language?: 'EN' | 'DE' | 'RW' | 'ES', observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiPaginatedResponseApiProcessingEvidenceField>>;
    public listProcessingEvidenceFieldsByValueChainUsingGET(id: number, requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', language?: 'EN' | 'DE' | 'RW' | 'ES', observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling listProcessingEvidenceFieldsByValueChainUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (requestType !== undefined && requestType !== null) {
            queryParameters = queryParameters.set('requestType', <any>requestType);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (sortBy !== undefined && sortBy !== null) {
            queryParameters = queryParameters.set('sortBy', <any>sortBy);
        }
        if (sort !== undefined && sort !== null) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }

        let headers = this.defaultHeaders;
        if (language !== undefined && language !== null) {
            headers = headers.set('language', String(language));
        }

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

        const handle = this.httpClient.get<ApiPaginatedResponseApiProcessingEvidenceField>(`${this.configuration.basePath}/api/chain/processing-evidence-field/list/value-chain/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'listProcessingEvidenceFieldsByValueChainUsingGET')));
        }
        return handle;
    }

}
