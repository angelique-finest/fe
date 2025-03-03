/*
 * Copyright(c) 2009 - 2019 Abelium d.o.o.
 * Kajuhova 90, 1000 Ljubljana, Slovenia
 * All rights reserved
 * Copyright(c) 1995 - 2018 T-Systems Multimedia Solutions GmbH
 * Riesaer Str. 5, 01129 Dresden
 * All rights reserved.
 *
 * INATrace Services API
 * INATrace Services API OpenAPI documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the openapi-typescript-angular-generator.
 * https://github.com/alenabelium/openapi-typescript-angular-generator
 * Do not edit the class manually.
 */


import { ApiSemiProduct } from './apiSemiProduct';
import { ApiUserCustomer } from './apiUserCustomer';



export interface ApiPurchaseOrderFarmer { 
    /**
     * Entity id
     */
    id?: number;
    /**
     * Purchase order identifier
     */
    identifier?: string;
    producerUserCustomer?: ApiUserCustomer;
    semiProduct?: ApiSemiProduct;
    /**
     * Total quantity
     */
    totalQuantity?: number;
    /**
     * Total gross quantity
     */
    totalGrossQuantity?: number;
    /**
     * Fulfilled quantity
     */
    fulfilledQuantity?: number;
    /**
     * Available quantity
     */
    availableQuantity?: number;
    /**
     * Price per unit
     */
    pricePerUnit?: number;
    /**
     * Tare
     */
    tare?: number;
    /**
     * Damaged price deduction
     */
    damagedPriceDeduction?: number;
    /**
     * Damaged weight deduction
     */
    damagedWeightDeduction?: number;
    /**
     * Organic
     */
    organic?: boolean;
    /**
     * Women only
     */
    womenShare?: boolean;
    /**
     * Cost
     */
    cost?: number;
    /**
     * Balance
     */
    balance?: number;
}

/**
 * Namespace for property- and property-value-enumerations of ApiPurchaseOrderFarmer.
 */
export namespace ApiPurchaseOrderFarmer {
    /**
     * All properties of ApiPurchaseOrderFarmer.
     */
    export enum Properties {
        /**
         * Entity id
         */
        id = 'id',
        /**
         * Purchase order identifier
         */
        identifier = 'identifier',
        producerUserCustomer = 'producerUserCustomer',
        semiProduct = 'semiProduct',
        /**
         * Total quantity
         */
        totalQuantity = 'totalQuantity',
        /**
         * Total gross quantity
         */
        totalGrossQuantity = 'totalGrossQuantity',
        /**
         * Fulfilled quantity
         */
        fulfilledQuantity = 'fulfilledQuantity',
        /**
         * Available quantity
         */
        availableQuantity = 'availableQuantity',
        /**
         * Price per unit
         */
        pricePerUnit = 'pricePerUnit',
        /**
         * Tare
         */
        tare = 'tare',
        /**
         * Damaged price deduction
         */
        damagedPriceDeduction = 'damagedPriceDeduction',
        /**
         * Damaged weight deduction
         */
        damagedWeightDeduction = 'damagedWeightDeduction',
        /**
         * Organic
         */
        organic = 'organic',
        /**
         * Women only
         */
        womenShare = 'womenShare',
        /**
         * Cost
         */
        cost = 'cost',
        /**
         * Balance
         */
        balance = 'balance'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiPurchaseOrderFarmer',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'identifier',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiUserCustomer.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'producerUserCustomer',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'ApiUserCustomer',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiUserCustomer'
                },
                {
                    metadata: ApiSemiProduct.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'semiProduct',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'ApiSemiProduct',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiSemiProduct'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'totalQuantity',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'totalGrossQuantity',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'fulfilledQuantity',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'availableQuantity',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'pricePerUnit',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'tare',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'damagedPriceDeduction',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'damagedWeightDeduction',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'organic',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'womenShare',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'cost',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'balance',
                    classname: 'ApiPurchaseOrderFarmer',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                id: [
                ],
                identifier: [
                ],
                producerUserCustomer: [
                ],
                semiProduct: [
                ],
                totalQuantity: [
                ],
                totalGrossQuantity: [
                ],
                fulfilledQuantity: [
                ],
                availableQuantity: [
                ],
                pricePerUnit: [
                ],
                tare: [
                ],
                damagedPriceDeduction: [
                ],
                damagedWeightDeduction: [
                ],
                organic: [
                ],
                womenShare: [
                ],
                cost: [
                ],
                balance: [
                ],
            }
        }
    }

  // export const ApiPurchaseOrderFarmerValidationScheme = {
  //     validators: [],
  //     fields: {
  //               id: {
  //                   validators: []
  //               },
  //               identifier: {
  //                   validators: []
  //               },
  //               producerUserCustomer: {
  //                   validators: []
  //               },
  //               semiProduct: {
  //                   validators: []
  //               },
  //               totalQuantity: {
  //                   validators: []
  //               },
  //               totalGrossQuantity: {
  //                   validators: []
  //               },
  //               fulfilledQuantity: {
  //                   validators: []
  //               },
  //               availableQuantity: {
  //                   validators: []
  //               },
  //               pricePerUnit: {
  //                   validators: []
  //               },
  //               tare: {
  //                   validators: []
  //               },
  //               damagedPriceDeduction: {
  //                   validators: []
  //               },
  //               damagedWeightDeduction: {
  //                   validators: []
  //               },
  //               organic: {
  //                   validators: []
  //               },
  //               womenShare: {
  //                   validators: []
  //               },
  //               cost: {
  //                   validators: []
  //               },
  //               balance: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiPurchaseOrderFarmer>;


}


