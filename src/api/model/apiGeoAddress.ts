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


import { ApiCountry } from './apiCountry';



export interface ApiGeoAddress { 
    /**
     * address
     */
    address?: string;
    /**
     * Village cell
     */
    cell?: string;
    /**
     * city
     */
    city?: string;
    country?: ApiCountry;
    /**
     * Honduras department name
     */
    hondurasDepartment?: string;
    /**
     * Honduras farm name
     */
    hondurasFarm?: string;
    /**
     * Honduras municipality name
     */
    hondurasMunicipality?: string;
    /**
     * Honduras village name
     */
    hondurasVillage?: string;
    /**
     * location latitude
     */
    latitude?: number;
    /**
     * location longitude
     */
    longitude?: number;
    /**
     * Village sector
     */
    sector?: string;
    /**
     * state / province / region
     */
    state?: string;
    /**
     * Village name
     */
    village?: string;
    /**
     * ZIP / postal code / p.p. box
     */
    zip?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiGeoAddress.
 */
export namespace ApiGeoAddress {
    /**
     * All properties of ApiGeoAddress.
     */
    export enum Properties {
        /**
         * address
         */
        address = 'address',
        /**
         * Village cell
         */
        cell = 'cell',
        /**
         * city
         */
        city = 'city',
        country = 'country',
        /**
         * Honduras department name
         */
        hondurasDepartment = 'hondurasDepartment',
        /**
         * Honduras farm name
         */
        hondurasFarm = 'hondurasFarm',
        /**
         * Honduras municipality name
         */
        hondurasMunicipality = 'hondurasMunicipality',
        /**
         * Honduras village name
         */
        hondurasVillage = 'hondurasVillage',
        /**
         * location latitude
         */
        latitude = 'latitude',
        /**
         * location longitude
         */
        longitude = 'longitude',
        /**
         * Village sector
         */
        sector = 'sector',
        /**
         * state / province / region
         */
        state = 'state',
        /**
         * Village name
         */
        village = 'village',
        /**
         * ZIP / postal code / p.p. box
         */
        zip = 'zip'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiGeoAddress',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'address',
                    classname: 'ApiGeoAddress',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'cell',
                    classname: 'ApiGeoAddress',
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
                    classname: 'ApiGeoAddress',
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
                    classname: 'ApiGeoAddress',
                    dataType: 'ApiCountry',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiCountry'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'hondurasDepartment',
                    classname: 'ApiGeoAddress',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'hondurasFarm',
                    classname: 'ApiGeoAddress',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'hondurasMunicipality',
                    classname: 'ApiGeoAddress',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'hondurasVillage',
                    classname: 'ApiGeoAddress',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'latitude',
                    classname: 'ApiGeoAddress',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'longitude',
                    classname: 'ApiGeoAddress',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'sector',
                    classname: 'ApiGeoAddress',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'state',
                    classname: 'ApiGeoAddress',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'village',
                    classname: 'ApiGeoAddress',
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
                    classname: 'ApiGeoAddress',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                address: [
                ],
                cell: [
                ],
                city: [
                ],
                country: [
                ],
                hondurasDepartment: [
                ],
                hondurasFarm: [
                ],
                hondurasMunicipality: [
                ],
                hondurasVillage: [
                ],
                latitude: [
                ],
                longitude: [
                ],
                sector: [
                ],
                state: [
                ],
                village: [
                ],
                zip: [
                ],
            }
        }
    }

  // export const ApiGeoAddressValidationScheme = {
  //     validators: [],
  //     fields: {
  //               address: {
  //                   validators: []
  //               },
  //               cell: {
  //                   validators: []
  //               },
  //               city: {
  //                   validators: []
  //               },
  //               country: {
  //                   validators: []
  //               },
  //               hondurasDepartment: {
  //                   validators: []
  //               },
  //               hondurasFarm: {
  //                   validators: []
  //               },
  //               hondurasMunicipality: {
  //                   validators: []
  //               },
  //               hondurasVillage: {
  //                   validators: []
  //               },
  //               latitude: {
  //                   validators: []
  //               },
  //               longitude: {
  //                   validators: []
  //               },
  //               sector: {
  //                   validators: []
  //               },
  //               state: {
  //                   validators: []
  //               },
  //               village: {
  //                   validators: []
  //               },
  //               zip: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiGeoAddress>;


}


