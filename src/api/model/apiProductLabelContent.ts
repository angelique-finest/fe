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


import { ApiCompany } from './apiCompany';
import { ApiComparisonOfPrice } from './apiComparisonOfPrice';
import { ApiDocument } from './apiDocument';
import { ApiProcess } from './apiProcess';
import { ApiProductOrigin } from './apiProductOrigin';
import { ApiProductSettings } from './apiProductSettings';
import { ApiResponsibility } from './apiResponsibility';
import { ApiSustainability } from './apiSustainability';



export interface ApiProductLabelContent { 
    company?: ApiCompany;
    comparisonOfPrice?: ApiComparisonOfPrice;
    /**
     * product description
     */
    description?: string;
    /**
     * how to Use / Recipes - Describe the best way to use the product (e.g. recipes, how to apply the product...)
     */
    howToUse?: string;
    /**
     * Entity id
     */
    id?: number;
    /**
     * ingredients - list the ingredients in the product and describe their properties
     */
    ingredients?: string;
    /**
     * Key Markets, market name - share number map
     */
    keyMarketsShare?: { [key: string]: number; };
    /**
     * knowledge blog
     */
    knowledgeBlog?: boolean;
    /**
     * label id
     */
    labelId?: number;
    /**
     * product name
     */
    name?: string;
    /**
     * nutritional Value - list the nutritional value of the product
     */
    nutritionalValue?: string;
    origin?: ApiProductOrigin;
    photo?: ApiDocument;
    process?: ApiProcess;
    responsibility?: ApiResponsibility;
    settings?: ApiProductSettings;
    /**
     * speciality document
     */
    specialityDescription?: string;
    specialityDocument?: ApiDocument;
    sustainability?: ApiSustainability;
}

/**
 * Namespace for property- and property-value-enumerations of ApiProductLabelContent.
 */
export namespace ApiProductLabelContent {
    /**
     * All properties of ApiProductLabelContent.
     */
    export enum Properties {
        company = 'company',
        comparisonOfPrice = 'comparisonOfPrice',
        /**
         * product description
         */
        description = 'description',
        /**
         * how to Use / Recipes - Describe the best way to use the product (e.g. recipes, how to apply the product...)
         */
        howToUse = 'howToUse',
        /**
         * Entity id
         */
        id = 'id',
        /**
         * ingredients - list the ingredients in the product and describe their properties
         */
        ingredients = 'ingredients',
        /**
         * Key Markets, market name - share number map
         */
        keyMarketsShare = 'keyMarketsShare',
        /**
         * knowledge blog
         */
        knowledgeBlog = 'knowledgeBlog',
        /**
         * label id
         */
        labelId = 'labelId',
        /**
         * product name
         */
        name = 'name',
        /**
         * nutritional Value - list the nutritional value of the product
         */
        nutritionalValue = 'nutritionalValue',
        origin = 'origin',
        photo = 'photo',
        process = 'process',
        responsibility = 'responsibility',
        settings = 'settings',
        /**
         * speciality document
         */
        specialityDescription = 'specialityDescription',
        specialityDocument = 'specialityDocument',
        sustainability = 'sustainability'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiProductLabelContent',
            vars: [
                {
                    metadata: ApiCompany.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'company',
                    classname: 'ApiProductLabelContent',
                    dataType: 'ApiCompany',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiCompany'
                },
                {
                    metadata: ApiComparisonOfPrice.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'comparisonOfPrice',
                    classname: 'ApiProductLabelContent',
                    dataType: 'ApiComparisonOfPrice',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiComparisonOfPrice'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'description',
                    classname: 'ApiProductLabelContent',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'howToUse',
                    classname: 'ApiProductLabelContent',
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
                    classname: 'ApiProductLabelContent',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'ingredients',
                    classname: 'ApiProductLabelContent',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'keyMarketsShare',
                    classname: 'ApiProductLabelContent',
                    dataType: '{ [key: string]: number; }',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'knowledgeBlog',
                    classname: 'ApiProductLabelContent',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'labelId',
                    classname: 'ApiProductLabelContent',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'name',
                    classname: 'ApiProductLabelContent',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'nutritionalValue',
                    classname: 'ApiProductLabelContent',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiProductOrigin.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'origin',
                    classname: 'ApiProductLabelContent',
                    dataType: 'ApiProductOrigin',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiProductOrigin'
                },
                {
                    metadata: ApiDocument.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'photo',
                    classname: 'ApiProductLabelContent',
                    dataType: 'ApiDocument',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiDocument'
                },
                {
                    metadata: ApiProcess.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'process',
                    classname: 'ApiProductLabelContent',
                    dataType: 'ApiProcess',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiProcess'
                },
                {
                    metadata: ApiResponsibility.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'responsibility',
                    classname: 'ApiProductLabelContent',
                    dataType: 'ApiResponsibility',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiResponsibility'
                },
                {
                    metadata: ApiProductSettings.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'settings',
                    classname: 'ApiProductLabelContent',
                    dataType: 'ApiProductSettings',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiProductSettings'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'specialityDescription',
                    classname: 'ApiProductLabelContent',
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
                    name: 'specialityDocument',
                    classname: 'ApiProductLabelContent',
                    dataType: 'ApiDocument',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiDocument'
                },
                {
                    metadata: ApiSustainability.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'sustainability',
                    classname: 'ApiProductLabelContent',
                    dataType: 'ApiSustainability',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiSustainability'
                },
            ],
            validators: {
                company: [
                ],
                comparisonOfPrice: [
                ],
                description: [
                ],
                howToUse: [
                ],
                id: [
                ],
                ingredients: [
                ],
                keyMarketsShare: [
                ],
                knowledgeBlog: [
                ],
                labelId: [
                ],
                name: [
                ],
                nutritionalValue: [
                ],
                origin: [
                ],
                photo: [
                ],
                process: [
                ],
                responsibility: [
                ],
                settings: [
                ],
                specialityDescription: [
                ],
                specialityDocument: [
                ],
                sustainability: [
                ],
            }
        }
    }

  // export const ApiProductLabelContentValidationScheme = {
  //     validators: [],
  //     fields: {
  //               company: {
  //                   validators: []
  //               },
  //               comparisonOfPrice: {
  //                   validators: []
  //               },
  //               description: {
  //                   validators: []
  //               },
  //               howToUse: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               ingredients: {
  //                   validators: []
  //               },
  //               keyMarketsShare: {
  //                   validators: []
  //               },
  //               knowledgeBlog: {
  //                   validators: []
  //               },
  //               labelId: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //               nutritionalValue: {
  //                   validators: []
  //               },
  //               origin: {
  //                   validators: []
  //               },
  //               photo: {
  //                   validators: []
  //               },
  //               process: {
  //                   validators: []
  //               },
  //               responsibility: {
  //                   validators: []
  //               },
  //               settings: {
  //                   validators: []
  //               },
  //               specialityDescription: {
  //                   validators: []
  //               },
  //               specialityDocument: {
  //                   validators: []
  //               },
  //               sustainability: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiProductLabelContent>;


}


