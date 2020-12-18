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


import { ApiCountry } from './apiCountry';



export interface ApiAddress { 
    /**
     * address
     */
    address?: string;
    /**
     * city
     */
    city?: string;
    country?: ApiCountry;
    /**
     * state / province / region
     */
    state?: string;
    /**
     * ZIP / postal code / p.p. box
     */
    zip?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiAddress.
 */
export namespace ApiAddress {
    /**
     * All properties of ApiAddress.
     */
    export enum Properties {
        /**
         * address
         */
        address = 'address',
        /**
         * city
         */
        city = 'city',
        country = 'country',
        /**
         * state / province / region
         */
        state = 'state',
        /**
         * ZIP / postal code / p.p. box
         */
        zip = 'zip'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiAddress',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'address',
                    classname: 'ApiAddress',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'city',
                    classname: 'ApiAddress',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiCountry.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'country',
                    classname: 'ApiAddress',
                    dataType: 'ApiCountry',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiCountry'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'state',
                    classname: 'ApiAddress',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'zip',
                    classname: 'ApiAddress',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                address: [
                ],
                city: [
                ],
                country: [
                ],
                state: [
                ],
                zip: [
                ],
            }
        }
    }

  // export const ApiAddressValidationScheme = {
  //     validators: [],
  //     fields: {
  //               address: {
  //                   validators: []
  //               },
  //               city: {
  //                   validators: []
  //               },
  //               country: {
  //                   validators: []
  //               },
  //               state: {
  //                   validators: []
  //               },
  //               zip: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiAddress>;


}


