/*
 * Copyright(c) 2009 - 2019 Abelium d.o.o.
 * Kajuhova 90, 1000 Ljubljana, Slovenia
 * All rights reserved
 * Copyright(c) 1995 - 2018 T-Systems Multimedia Solutions GmbH
 * Riesaer Str. 5, 01129 Dresden
 * All rights reserved.
 *
 * INATrace Services API
 * INATrace Services API swagger documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the openapi-typescript-angular-generator.
 * https://github.com/alenabelium/openapi-typescript-angular-generator
 * Do not edit the class manually.
 */


import { ApiDocumentStorageKey } from './apiDocumentStorageKey';



export interface ApiProcessStandardUpdate { 
    certificate?: ApiDocumentStorageKey;
    /**
     * description of this standard and certification
     */
    description?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiProcessStandardUpdate.
 */
export namespace ApiProcessStandardUpdate {
    /**
     * All properties of ApiProcessStandardUpdate.
     */
    export enum Properties {
        certificate = 'certificate',
        /**
         * description of this standard and certification
         */
        description = 'description'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiProcessStandardUpdate',
            vars: [
                {
                    metadata: ApiDocumentStorageKey.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'certificate',
                    classname: 'ApiProcessStandardUpdate',
                    dataType: 'ApiDocumentStorageKey',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiDocumentStorageKey'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'description',
                    classname: 'ApiProcessStandardUpdate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                certificate: [
                ],
                description: [
                ],
            }
        }
    }

  // export const ApiProcessStandardUpdateValidationScheme = {
  //     validators: [],
  //     fields: {
  //               certificate: {
  //                   validators: []
  //               },
  //               description: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiProcessStandardUpdate>;


}


