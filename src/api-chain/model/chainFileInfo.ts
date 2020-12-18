/*
 * Copyright(c) 2009 - 2019 Abelium d.o.o.
 * Kajuhova 90, 1000 Ljubljana, Slovenia
 * All rights reserved
 * Copyright(c) 1995 - 2018 T-Systems Multimedia Solutions GmbH
 * Riesaer Str. 5, 01129 Dresden
 * All rights reserved.
 *
 * coffee-be
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the openapi-typescript-angular-generator.
 * https://github.com/alenabelium/openapi-typescript-angular-generator
 * Do not edit the class manually.
 */




/**
 * Represents a document in the system
 */

export interface ChainFileInfo { 
    docType?: string;
    _id?: string;
    _rev?: string;
    dbKey?: string;
    mode__?: any;
    /**
     * Storage key used for access to the actual file.
     */
    storageKey: string;
    /**
     * File name as uploaded.
     */
    name: string;
    /**
     * Mime/content type
     */
    contentType: string;
    /**
     * File size.
     */
    size: number;
}

/**
 * Namespace for property- and property-value-enumerations of ChainFileInfo.
 */
export namespace ChainFileInfo {
    /**
     * All properties of ChainFileInfo.
     */
    export enum Properties {
        docType = 'docType',
        _id = '_id',
        _rev = '_rev',
        dbKey = 'dbKey',
        mode__ = 'mode__',
        /**
         * Storage key used for access to the actual file.
         */
        storageKey = 'storageKey',
        /**
         * File name as uploaded.
         */
        name = 'name',
        /**
         * Mime/content type
         */
        contentType = 'contentType',
        /**
         * File size.
         */
        size = 'size'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ChainFileInfo',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'docType',
                    classname: 'ChainFileInfo',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: '_id',
                    classname: 'ChainFileInfo',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: '_rev',
                    classname: 'ChainFileInfo',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'dbKey',
                    classname: 'ChainFileInfo',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'mode__',
                    classname: 'ChainFileInfo',
                    dataType: 'any',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'storageKey',
                    classname: 'ChainFileInfo',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'name',
                    classname: 'ChainFileInfo',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'contentType',
                    classname: 'ChainFileInfo',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'size',
                    classname: 'ChainFileInfo',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                docType: [
                ],
                _id: [
                ],
                _rev: [
                ],
                dbKey: [
                ],
                mode__: [
                ],
                storageKey: [
                        ['required'],
                ],
                name: [
                        ['required'],
                ],
                contentType: [
                        ['required'],
                ],
                size: [
                        ['required'],
                ],
            }
        }
    }

  // export const ChainFileInfoValidationScheme = {
  //     validators: [],
  //     fields: {
  //               docType: {
  //                   validators: []
  //               },
  //               _id: {
  //                   validators: []
  //               },
  //               _rev: {
  //                   validators: []
  //               },
  //               dbKey: {
  //                   validators: []
  //               },
  //               mode__: {
  //                   validators: []
  //               },
  //               storageKey: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //               contentType: {
  //                   validators: []
  //               },
  //               size: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ChainFileInfo>;


}


