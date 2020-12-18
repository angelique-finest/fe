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


import { ApiAddress } from './apiAddress';


/**
 * Organization is a representative object of a company in af-coffee-app.
 */

export interface ChainOrganization { 
    docType?: string;
    _id?: string;
    _rev?: string;
    dbKey?: string;
    mode__?: any;
    /**
     * Timestamp of creation
     */
    created?: string;
    /**
     * Timestamp of last change
     */
    lastChange?: string;
    /**
     * Id of user that created the document.
     */
    userCreatedId?: string;
    /**
     * Id of user that changed the document.
     */
    userChangedId?: string;
    /**
     * company abbreviation
     */
    abbreviation?: string;
    /**
     * about the organization
     */
    about?: string;
    /**
     * email
     */
    email?: string;
    headquarters?: ApiAddress;
    /**
     * Entity id
     */
    id: number;
    /**
     * Type of entity (table in af-coffee app)
     */
    entityType: string;
    /**
     * Logo
     */
    logo?: any;
    /**
     * name of manager / CEO
     */
    manager?: string;
    /**
     * social media URL links (Facebook, Instagram, Twitter, YouTube, ...)
     */
    mediaLinks?: { [key: string]: string; };
    /**
     * company name
     */
    name?: string;
    /**
     * webpage
     */
    phone?: string;
    /**
     * webpage
     */
    webPage?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ChainOrganization.
 */
export namespace ChainOrganization {
    /**
     * All properties of ChainOrganization.
     */
    export enum Properties {
        docType = 'docType',
        _id = '_id',
        _rev = '_rev',
        dbKey = 'dbKey',
        mode__ = 'mode__',
        /**
         * Timestamp of creation
         */
        created = 'created',
        /**
         * Timestamp of last change
         */
        lastChange = 'lastChange',
        /**
         * Id of user that created the document.
         */
        userCreatedId = 'userCreatedId',
        /**
         * Id of user that changed the document.
         */
        userChangedId = 'userChangedId',
        /**
         * company abbreviation
         */
        abbreviation = 'abbreviation',
        /**
         * about the organization
         */
        about = 'about',
        /**
         * email
         */
        email = 'email',
        headquarters = 'headquarters',
        /**
         * Entity id
         */
        id = 'id',
        /**
         * Type of entity (table in af-coffee app)
         */
        entityType = 'entityType',
        /**
         * Logo
         */
        logo = 'logo',
        /**
         * name of manager / CEO
         */
        manager = 'manager',
        /**
         * social media URL links (Facebook, Instagram, Twitter, YouTube, ...)
         */
        mediaLinks = 'mediaLinks',
        /**
         * company name
         */
        name = 'name',
        /**
         * webpage
         */
        phone = 'phone',
        /**
         * webpage
         */
        webPage = 'webPage'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ChainOrganization',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'docType',
                    classname: 'ChainOrganization',
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
                    classname: 'ChainOrganization',
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
                    classname: 'ChainOrganization',
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
                    classname: 'ChainOrganization',
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
                    classname: 'ChainOrganization',
                    dataType: 'any',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'created',
                    classname: 'ChainOrganization',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'lastChange',
                    classname: 'ChainOrganization',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'userCreatedId',
                    classname: 'ChainOrganization',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'userChangedId',
                    classname: 'ChainOrganization',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'abbreviation',
                    classname: 'ChainOrganization',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'about',
                    classname: 'ChainOrganization',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'email',
                    classname: 'ChainOrganization',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiAddress.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'headquarters',
                    classname: 'ChainOrganization',
                    dataType: 'ApiAddress',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiAddress'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'id',
                    classname: 'ChainOrganization',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'entityType',
                    classname: 'ChainOrganization',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'logo',
                    classname: 'ChainOrganization',
                    dataType: 'any',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'manager',
                    classname: 'ChainOrganization',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'mediaLinks',
                    classname: 'ChainOrganization',
                    dataType: '{ [key: string]: string; }',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'name',
                    classname: 'ChainOrganization',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'phone',
                    classname: 'ChainOrganization',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'webPage',
                    classname: 'ChainOrganization',
                    dataType: 'string',
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
                created: [
                ],
                lastChange: [
                ],
                userCreatedId: [
                ],
                userChangedId: [
                ],
                abbreviation: [
                ],
                about: [
                ],
                email: [
                ],
                headquarters: [
                ],
                id: [
                        ['required'],
                ],
                entityType: [
                        ['required'],
                ],
                logo: [
                ],
                manager: [
                ],
                mediaLinks: [
                ],
                name: [
                ],
                phone: [
                ],
                webPage: [
                ],
            }
        }
    }

  // export const ChainOrganizationValidationScheme = {
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
  //               created: {
  //                   validators: []
  //               },
  //               lastChange: {
  //                   validators: []
  //               },
  //               userCreatedId: {
  //                   validators: []
  //               },
  //               userChangedId: {
  //                   validators: []
  //               },
  //               abbreviation: {
  //                   validators: []
  //               },
  //               about: {
  //                   validators: []
  //               },
  //               email: {
  //                   validators: []
  //               },
  //               headquarters: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               entityType: {
  //                   validators: []
  //               },
  //               logo: {
  //                   validators: []
  //               },
  //               manager: {
  //                   validators: []
  //               },
  //               mediaLinks: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //               phone: {
  //                   validators: []
  //               },
  //               webPage: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ChainOrganization>;


}


