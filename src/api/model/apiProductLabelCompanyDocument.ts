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


import { ApiDocument } from './apiDocument';



export interface ApiProductLabelCompanyDocument { 
    /**
     * Entity id
     */
    id?: number;
    /**
     * type of the document (link, file)
     */
    type?: ApiProductLabelCompanyDocument.TypeEnum;
    /**
     * document category
     */
    category?: ApiProductLabelCompanyDocument.CategoryEnum;
    /**
     * name
     */
    name?: string;
    /**
     * description of this document
     */
    description?: string;
    /**
     * quote of this document
     */
    quote?: string;
    /**
     * link
     */
    link?: string;
    document?: ApiDocument;
    active?: boolean;
}

/**
 * Namespace for property- and property-value-enumerations of ApiProductLabelCompanyDocument.
 */
export namespace ApiProductLabelCompanyDocument {
    /**
     * All properties of ApiProductLabelCompanyDocument.
     */
    export enum Properties {
        /**
         * Entity id
         */
        id = 'id',
        /**
         * type of the document (link, file)
         */
        type = 'type',
        /**
         * document category
         */
        category = 'category',
        /**
         * name
         */
        name = 'name',
        /**
         * description of this document
         */
        description = 'description',
        /**
         * quote of this document
         */
        quote = 'quote',
        /**
         * link
         */
        link = 'link',
        document = 'document',
        active = 'active'
    }

    /**
     * All possible values of type.
     */
    export enum TypeEnum {
        LINK = 'LINK',
        FILE = 'FILE'
    }

    /**
     * All possible values of category.
     */
    export enum CategoryEnum {
        VIDEO = 'VIDEO',
        PRODUCTIONRECORD = 'PRODUCTION_RECORD',
        MEETTHEFARMER = 'MEET_THE_FARMER'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiProductLabelCompanyDocument',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiProductLabelCompanyDocument',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiProductLabelCompanyDocument.TypeEnum',
                    required: false,
                    name: 'type',
                    classname: 'ApiProductLabelCompanyDocument',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiProductLabelCompanyDocument.CategoryEnum',
                    required: false,
                    name: 'category',
                    classname: 'ApiProductLabelCompanyDocument',
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
                    classname: 'ApiProductLabelCompanyDocument',
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
                    classname: 'ApiProductLabelCompanyDocument',
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
                    classname: 'ApiProductLabelCompanyDocument',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'link',
                    classname: 'ApiProductLabelCompanyDocument',
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
                    classname: 'ApiProductLabelCompanyDocument',
                    dataType: 'ApiDocument',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiDocument'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'active',
                    classname: 'ApiProductLabelCompanyDocument',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                id: [
                ],
                type: [
                ],
                category: [
                ],
                name: [
                        ['minlength', 0],
                        ['maxlength', 255],
                ],
                description: [
                        ['minlength', 0],
                        ['maxlength', 255],
                ],
                quote: [
                        ['minlength', 0],
                        ['maxlength', 2000],
                ],
                link: [
                        ['minlength', 0],
                        ['maxlength', 255],
                ],
                document: [
                ],
                active: [
                ],
            }
        }
    }

  // export const ApiProductLabelCompanyDocumentValidationScheme = {
  //     validators: [],
  //     fields: {
  //               id: {
  //                   validators: []
  //               },
  //               type: {
  //                   validators: []
  //               },
  //               category: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //               description: {
  //                   validators: []
  //               },
  //               quote: {
  //                   validators: []
  //               },
  //               link: {
  //                   validators: []
  //               },
  //               document: {
  //                   validators: []
  //               },
  //               active: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiProductLabelCompanyDocument>;


}


