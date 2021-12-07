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



export interface ApiCompanyDocument { 
    /**
     * document category
     */
    category?: ApiCompanyDocument.CategoryEnum;
    /**
     * description of this document
     */
    description?: string;
    document?: ApiDocument;
    /**
     * link
     */
    link?: string;
    /**
     * name
     */
    name?: string;
    /**
     * quote of this document
     */
    quote?: string;
    /**
     * type of the document (link, file)
     */
    type?: ApiCompanyDocument.TypeEnum;
}

/**
 * Namespace for property- and property-value-enumerations of ApiCompanyDocument.
 */
export namespace ApiCompanyDocument {
    /**
     * All properties of ApiCompanyDocument.
     */
    export enum Properties {
        /**
         * document category
         */
        category = 'category',
        /**
         * description of this document
         */
        description = 'description',
        document = 'document',
        /**
         * link
         */
        link = 'link',
        /**
         * name
         */
        name = 'name',
        /**
         * quote of this document
         */
        quote = 'quote',
        /**
         * type of the document (link, file)
         */
        type = 'type'
    }

    /**
     * All possible values of category.
     */
    export enum CategoryEnum {
        VIDEO = 'VIDEO',
        PRODUCTIONRECORD = 'PRODUCTION_RECORD',
        MEETTHEFARMER = 'MEET_THE_FARMER'
    }

    /**
     * All possible values of type.
     */
    export enum TypeEnum {
        LINK = 'LINK',
        FILE = 'FILE'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiCompanyDocument',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiCompanyDocument.CategoryEnum',
                    required: false,
                    name: 'category',
                    classname: 'ApiCompanyDocument',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'description',
                    classname: 'ApiCompanyDocument',
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
                    name: 'document',
                    classname: 'ApiCompanyDocument',
                    dataType: 'ApiDocument',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiDocument'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'link',
                    classname: 'ApiCompanyDocument',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'name',
                    classname: 'ApiCompanyDocument',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'quote',
                    classname: 'ApiCompanyDocument',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiCompanyDocument.TypeEnum',
                    required: false,
                    name: 'type',
                    classname: 'ApiCompanyDocument',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                category: [
                ],
                description: [
                ],
                document: [
                ],
                link: [
                ],
                name: [
                ],
                quote: [
                ],
                type: [
                ],
            }
        }
    }

  // export const ApiCompanyDocumentValidationScheme = {
  //     validators: [],
  //     fields: {
  //               category: {
  //                   validators: []
  //               },
  //               description: {
  //                   validators: []
  //               },
  //               document: {
  //                   validators: []
  //               },
  //               link: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //               quote: {
  //                   validators: []
  //               },
  //               type: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiCompanyDocument>;


}


