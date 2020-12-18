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





export interface ApiLoginRequest { 
    /**
     * Password.
     */
    password: string;
    /**
     * Email (username).
     */
    username: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiLoginRequest.
 */
export namespace ApiLoginRequest {
    /**
     * All properties of ApiLoginRequest.
     */
    export enum Properties {
        /**
         * Password.
         */
        password = 'password',
        /**
         * Email (username).
         */
        username = 'username'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiLoginRequest',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'password',
                    classname: 'ApiLoginRequest',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'username',
                    classname: 'ApiLoginRequest',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                password: [
                        ['required'],
                ],
                username: [
                        ['required'],
                ],
            }
        }
    }

  // export const ApiLoginRequestValidationScheme = {
  //     validators: [],
  //     fields: {
  //               password: {
  //                   validators: []
  //               },
  //               username: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiLoginRequest>;


}


