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


import { ApiUserCustomer } from './apiUserCustomer';



export interface ApiUserCustomerImportResponse { 
    duplicates?: Array<ApiUserCustomer>;
    successful?: number;
}

/**
 * Namespace for property- and property-value-enumerations of ApiUserCustomerImportResponse.
 */
export namespace ApiUserCustomerImportResponse {
    /**
     * All properties of ApiUserCustomerImportResponse.
     */
    export enum Properties {
        duplicates = 'duplicates',
        successful = 'successful'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiUserCustomerImportResponse',
            vars: [
                {
                    metadata: ApiUserCustomer.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'duplicates',
                    classname: 'ApiUserCustomerImportResponse',
                    dataType: 'Array&lt;ApiUserCustomer&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiUserCustomer'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'successful',
                    classname: 'ApiUserCustomerImportResponse',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                duplicates: [
                ],
                successful: [
                ],
            }
        }
    }

  // export const ApiUserCustomerImportResponseValidationScheme = {
  //     validators: [],
  //     fields: {
  //               duplicates: {
  //                   validators: []
  //               },
  //               successful: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiUserCustomerImportResponse>;


}


