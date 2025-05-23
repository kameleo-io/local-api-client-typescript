/* tslint:disable */
/* eslint-disable */
/**
 * kameleo-local-api
 * You can use the following API endpoints to communicate with the local running Kameleo programmatically.
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
/**
 * When the Geolocation spoofing is set to manual these extra settings will be used as well.
 * @export
 * @interface GeolocationSpoofingOptions
 */
export interface GeolocationSpoofingOptions {
    /**
     * From -90 to 90
     * @type {number}
     * @memberof GeolocationSpoofingOptions
     */
    latitude: number;
    /**
     * From -180 to 180
     * @type {number}
     * @memberof GeolocationSpoofingOptions
     */
    longitude: number;
}

/**
 * Check if a given object implements the GeolocationSpoofingOptions interface.
 */
export function instanceOfGeolocationSpoofingOptions(value: object): value is GeolocationSpoofingOptions {
    if (!("latitude" in value) || value["latitude"] === undefined) return false;
    if (!("longitude" in value) || value["longitude"] === undefined) return false;
    return true;
}

export function GeolocationSpoofingOptionsFromJSON(json: any): GeolocationSpoofingOptions {
    return GeolocationSpoofingOptionsFromJSONTyped(json, false);
}

export function GeolocationSpoofingOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeolocationSpoofingOptions {
    if (json == null) {
        return json;
    }
    return {
        latitude: json["latitude"],
        longitude: json["longitude"],
    };
}

export function GeolocationSpoofingOptionsToJSON(json: any): GeolocationSpoofingOptions {
    return GeolocationSpoofingOptionsToJSONTyped(json, false);
}

export function GeolocationSpoofingOptionsToJSONTyped(
    value?: GeolocationSpoofingOptions | null,
    ignoreDiscriminator: boolean = false,
): any {
    if (value == null) {
        return value;
    }

    return {
        latitude: value["latitude"],
        longitude: value["longitude"],
    };
}
