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





export interface ApiBaseEntity { 
    /**
     * Entity id
     */
    id?: number;
}

/**
 * Namespace for property- and property-value-enumerations of ApiBaseEntity.
 */
export namespace ApiBaseEntity {
    /**
     * All properties of ApiBaseEntity.
     */
    export enum Properties {
        /**
         * Entity id
         */
        id = 'id'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiBaseEntity',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiBaseEntity',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                id: [
                ],
            }
        }
    }

  // export const ApiBaseEntityValidationScheme = {
  //     validators: [],
  //     fields: {
  //               id: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiBaseEntity>;


}


