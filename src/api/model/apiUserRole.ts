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





export interface ApiUserRole { 
    /**
     * Entity id
     */
    id?: number;
    /**
     * Role
     */
    role?: ApiUserRole.RoleEnum;
}

/**
 * Namespace for property- and property-value-enumerations of ApiUserRole.
 */
export namespace ApiUserRole {
    /**
     * All properties of ApiUserRole.
     */
    export enum Properties {
        /**
         * Entity id
         */
        id = 'id',
        /**
         * Role
         */
        role = 'role'
    }

    /**
     * All possible values of role.
     */
    export enum RoleEnum {
        USER = 'USER',
        ADMIN = 'ADMIN',
        MANAGER = 'MANAGER',
        ACCOUNTANT = 'ACCOUNTANT'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiUserRole',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiUserRole',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiUserRole.RoleEnum',
                    required: false,
                    name: 'role',
                    classname: 'ApiUserRole',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                id: [
                ],
                role: [
                ],
            }
        }
    }

  // export const ApiUserRoleValidationScheme = {
  //     validators: [],
  //     fields: {
  //               id: {
  //                   validators: []
  //               },
  //               role: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiUserRole>;


}


