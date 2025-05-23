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
import type { Server } from "./Server";
import { ServerFromJSON, ServerFromJSONTyped, ServerToJSON, ServerToJSONTyped } from "./Server";
import type { ProxyConnectionType } from "./ProxyConnectionType";
import {
    ProxyConnectionTypeFromJSON,
    ProxyConnectionTypeFromJSONTyped,
    ProxyConnectionTypeToJSON,
    ProxyConnectionTypeToJSONTyped,
} from "./ProxyConnectionType";

/**
 *
 * @export
 * @interface ProxyChoice
 */
export interface ProxyChoice {
    /**
     *
     * @type {ProxyConnectionType}
     * @memberof ProxyChoice
     */
    value: ProxyConnectionType;
    /**
     *
     * @type {Server}
     * @memberof ProxyChoice
     */
    extra?: Server;
}

/**
 * Check if a given object implements the ProxyChoice interface.
 */
export function instanceOfProxyChoice(value: object): value is ProxyChoice {
    if (!("value" in value) || value["value"] === undefined) return false;
    return true;
}

export function ProxyChoiceFromJSON(json: any): ProxyChoice {
    return ProxyChoiceFromJSONTyped(json, false);
}

export function ProxyChoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProxyChoice {
    if (json == null) {
        return json;
    }
    return {
        value: ProxyConnectionTypeFromJSON(json["value"]),
        extra: json["extra"] == null ? undefined : ServerFromJSON(json["extra"]),
    };
}

export function ProxyChoiceToJSON(json: any): ProxyChoice {
    return ProxyChoiceToJSONTyped(json, false);
}

export function ProxyChoiceToJSONTyped(value?: ProxyChoice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        value: ProxyConnectionTypeToJSON(value["value"]),
        extra: ServerToJSON(value["extra"]),
    };
}
