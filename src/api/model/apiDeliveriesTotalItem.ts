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





export interface ApiDeliveriesTotalItem { 
    totalQuantity?: number;
    unit?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiDeliveriesTotalItem.
 */
export namespace ApiDeliveriesTotalItem {
    /**
     * All properties of ApiDeliveriesTotalItem.
     */
    export enum Properties {
        totalQuantity = 'totalQuantity',
        unit = 'unit'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiDeliveriesTotalItem',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'totalQuantity',
                    classname: 'ApiDeliveriesTotalItem',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'unit',
                    classname: 'ApiDeliveriesTotalItem',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                totalQuantity: [
                ],
                unit: [
                ],
            }
        }
    }

  // export const ApiDeliveriesTotalItemValidationScheme = {
  //     validators: [],
  //     fields: {
  //               totalQuantity: {
  //                   validators: []
  //               },
  //               unit: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiDeliveriesTotalItem>;


}


