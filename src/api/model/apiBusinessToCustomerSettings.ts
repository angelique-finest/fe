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


import { ApiDocument } from './apiDocument';



export interface ApiBusinessToCustomerSettings { 
    creationTimestamp?: Date;
    footerImage?: ApiDocument;
    graphicFairPrices?: boolean;
    graphicFarmGatePrice?: ApiBusinessToCustomerSettings.GraphicFarmGatePriceEnum;
    graphicIncreaseOfIncome?: boolean;
    graphicPriceToProducer?: ApiBusinessToCustomerSettings.GraphicPriceToProducerEnum;
    graphicQuality?: boolean;
    headerBackgroundImage?: ApiDocument;
    headerImage?: ApiDocument;
    headingColor?: string;
    /**
     * Entity id
     */
    id?: number;
    orderFairPrices?: number;
    orderFeedback?: number;
    orderProducers?: number;
    orderQuality?: number;
    primaryColor?: string;
    productFont?: ApiDocument;
    quaternaryColor?: string;
    secondaryColor?: string;
    tabFairPrices?: boolean;
    tabFeedback?: boolean;
    tabProducers?: boolean;
    tabQuality?: boolean;
    tertiaryColor?: string;
    textColor?: string;
    textFont?: ApiDocument;
    updateTimestamp?: Date;
}

/**
 * Namespace for property- and property-value-enumerations of ApiBusinessToCustomerSettings.
 */
export namespace ApiBusinessToCustomerSettings {
    /**
     * All properties of ApiBusinessToCustomerSettings.
     */
    export enum Properties {
        creationTimestamp = 'creationTimestamp',
        footerImage = 'footerImage',
        graphicFairPrices = 'graphicFairPrices',
        graphicFarmGatePrice = 'graphicFarmGatePrice',
        graphicIncreaseOfIncome = 'graphicIncreaseOfIncome',
        graphicPriceToProducer = 'graphicPriceToProducer',
        graphicQuality = 'graphicQuality',
        headerBackgroundImage = 'headerBackgroundImage',
        headerImage = 'headerImage',
        headingColor = 'headingColor',
        /**
         * Entity id
         */
        id = 'id',
        orderFairPrices = 'orderFairPrices',
        orderFeedback = 'orderFeedback',
        orderProducers = 'orderProducers',
        orderQuality = 'orderQuality',
        primaryColor = 'primaryColor',
        productFont = 'productFont',
        quaternaryColor = 'quaternaryColor',
        secondaryColor = 'secondaryColor',
        tabFairPrices = 'tabFairPrices',
        tabFeedback = 'tabFeedback',
        tabProducers = 'tabProducers',
        tabQuality = 'tabQuality',
        tertiaryColor = 'tertiaryColor',
        textColor = 'textColor',
        textFont = 'textFont',
        updateTimestamp = 'updateTimestamp'
    }

    /**
     * All possible values of graphicFarmGatePrice.
     */
    export enum GraphicFarmGatePriceEnum {
        DISABLED = 'DISABLED',
        PERCONTAINER = 'PER_CONTAINER',
        PERKG = 'PER_KG',
        PERCENTVALUE = 'PERCENT_VALUE'
    }

    /**
     * All possible values of graphicPriceToProducer.
     */
    export enum GraphicPriceToProducerEnum {
        DISABLED = 'DISABLED',
        PERCONTAINER = 'PER_CONTAINER',
        PERKG = 'PER_KG',
        PERCENTVALUE = 'PERCENT_VALUE'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiBusinessToCustomerSettings',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'creationTimestamp',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'Date',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiDocument.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'footerImage',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'ApiDocument',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiDocument'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'graphicFairPrices',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiBusinessToCustomerSettings.GraphicFarmGatePriceEnum',
                    required: false,
                    name: 'graphicFarmGatePrice',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'graphicIncreaseOfIncome',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiBusinessToCustomerSettings.GraphicPriceToProducerEnum',
                    required: false,
                    name: 'graphicPriceToProducer',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'graphicQuality',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiDocument.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'headerBackgroundImage',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'ApiDocument',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiDocument'
                },
                {
                    metadata: ApiDocument.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'headerImage',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'ApiDocument',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiDocument'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'headingColor',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'orderFairPrices',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'orderFeedback',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'orderProducers',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'orderQuality',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'primaryColor',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiDocument.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'productFont',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'ApiDocument',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiDocument'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'quaternaryColor',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'secondaryColor',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'tabFairPrices',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'tabFeedback',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'tabProducers',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'tabQuality',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'tertiaryColor',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'textColor',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiDocument.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'textFont',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'ApiDocument',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiDocument'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'updateTimestamp',
                    classname: 'ApiBusinessToCustomerSettings',
                    dataType: 'Date',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                creationTimestamp: [
                ],
                footerImage: [
                ],
                graphicFairPrices: [
                ],
                graphicFarmGatePrice: [
                ],
                graphicIncreaseOfIncome: [
                ],
                graphicPriceToProducer: [
                ],
                graphicQuality: [
                ],
                headerBackgroundImage: [
                ],
                headerImage: [
                ],
                headingColor: [
                ],
                id: [
                ],
                orderFairPrices: [
                ],
                orderFeedback: [
                ],
                orderProducers: [
                ],
                orderQuality: [
                ],
                primaryColor: [
                ],
                productFont: [
                ],
                quaternaryColor: [
                ],
                secondaryColor: [
                ],
                tabFairPrices: [
                ],
                tabFeedback: [
                ],
                tabProducers: [
                ],
                tabQuality: [
                ],
                tertiaryColor: [
                ],
                textColor: [
                ],
                textFont: [
                ],
                updateTimestamp: [
                ],
            }
        }
    }

  // export const ApiBusinessToCustomerSettingsValidationScheme = {
  //     validators: [],
  //     fields: {
  //               creationTimestamp: {
  //                   validators: []
  //               },
  //               footerImage: {
  //                   validators: []
  //               },
  //               graphicFairPrices: {
  //                   validators: []
  //               },
  //               graphicFarmGatePrice: {
  //                   validators: []
  //               },
  //               graphicIncreaseOfIncome: {
  //                   validators: []
  //               },
  //               graphicPriceToProducer: {
  //                   validators: []
  //               },
  //               graphicQuality: {
  //                   validators: []
  //               },
  //               headerBackgroundImage: {
  //                   validators: []
  //               },
  //               headerImage: {
  //                   validators: []
  //               },
  //               headingColor: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               orderFairPrices: {
  //                   validators: []
  //               },
  //               orderFeedback: {
  //                   validators: []
  //               },
  //               orderProducers: {
  //                   validators: []
  //               },
  //               orderQuality: {
  //                   validators: []
  //               },
  //               primaryColor: {
  //                   validators: []
  //               },
  //               productFont: {
  //                   validators: []
  //               },
  //               quaternaryColor: {
  //                   validators: []
  //               },
  //               secondaryColor: {
  //                   validators: []
  //               },
  //               tabFairPrices: {
  //                   validators: []
  //               },
  //               tabFeedback: {
  //                   validators: []
  //               },
  //               tabProducers: {
  //                   validators: []
  //               },
  //               tabQuality: {
  //                   validators: []
  //               },
  //               tertiaryColor: {
  //                   validators: []
  //               },
  //               textColor: {
  //                   validators: []
  //               },
  //               textFont: {
  //                   validators: []
  //               },
  //               updateTimestamp: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiBusinessToCustomerSettings>;


}


