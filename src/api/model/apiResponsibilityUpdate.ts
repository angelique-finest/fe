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



export interface ApiResponsibilityUpdate { 
    /**
     * farmers story - farmer or community
     */
    farmer?: string;
    /**
     * labor policies - Briefly describe labor policies you have in place in your company
     */
    laborPolicies?: string;
    picture?: ApiDocumentStorageKey;
    /**
     * storage - Briefly describe your storage procedures
     */
    relationship?: string;
    /**
     * farmers story - text
     */
    story?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiResponsibilityUpdate.
 */
export namespace ApiResponsibilityUpdate {
    /**
     * All properties of ApiResponsibilityUpdate.
     */
    export enum Properties {
        /**
         * farmers story - farmer or community
         */
        farmer = 'farmer',
        /**
         * labor policies - Briefly describe labor policies you have in place in your company
         */
        laborPolicies = 'laborPolicies',
        picture = 'picture',
        /**
         * storage - Briefly describe your storage procedures
         */
        relationship = 'relationship',
        /**
         * farmers story - text
         */
        story = 'story'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiResponsibilityUpdate',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'farmer',
                    classname: 'ApiResponsibilityUpdate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'laborPolicies',
                    classname: 'ApiResponsibilityUpdate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiDocumentStorageKey.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'picture',
                    classname: 'ApiResponsibilityUpdate',
                    dataType: 'ApiDocumentStorageKey',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiDocumentStorageKey'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'relationship',
                    classname: 'ApiResponsibilityUpdate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'story',
                    classname: 'ApiResponsibilityUpdate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                farmer: [
                ],
                laborPolicies: [
                ],
                picture: [
                ],
                relationship: [
                ],
                story: [
                ],
            }
        }
    }

  // export const ApiResponsibilityUpdateValidationScheme = {
  //     validators: [],
  //     fields: {
  //               farmer: {
  //                   validators: []
  //               },
  //               laborPolicies: {
  //                   validators: []
  //               },
  //               picture: {
  //                   validators: []
  //               },
  //               relationship: {
  //                   validators: []
  //               },
  //               story: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiResponsibilityUpdate>;


}


