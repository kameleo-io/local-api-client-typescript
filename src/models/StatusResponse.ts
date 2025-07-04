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
import type { ProfileLifetimeState } from "./ProfileLifetimeState";
import {
    ProfileLifetimeStateFromJSON,
    ProfileLifetimeStateFromJSONTyped,
    ProfileLifetimeStateToJSON,
    ProfileLifetimeStateToJSONTyped,
} from "./ProfileLifetimeState";

/**
 * Status information about the profile
 * @export
 * @interface StatusResponse
 */
export interface StatusResponse {
    /**
     * Represents the lifetime states of a profile, indicating which actions
     * can be performed with the associated browser engine at each state. Possible values are:
     * - Created: Profile is created; the associated browser engine is not started.
     * - Starting: The associated browser engine is starting.
     * - Running: The associated browser engine is currently running.
     * - Terminating: The associated browser engine is in the process of terminating.
     * - Terminated: The associated browser engine is not running but has been started at least once.
     * - Locked: The profile is currently being used by another user.
     * - Loading: The profile data or the browser engine is syncing with the cloud storage.
     * - Unknown: State of the profile is undefined.
     * @type {ProfileLifetimeState}
     * @memberof StatusResponse
     */
    lifetimeState: ProfileLifetimeState;
}

/**
 * Check if a given object implements the StatusResponse interface.
 */
export function instanceOfStatusResponse(value: object): value is StatusResponse {
    if (!("lifetimeState" in value) || value["lifetimeState"] === undefined) return false;
    return true;
}

export function StatusResponseFromJSON(json: any): StatusResponse {
    return StatusResponseFromJSONTyped(json, false);
}

export function StatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusResponse {
    if (json == null) {
        return json;
    }
    return {
        lifetimeState: ProfileLifetimeStateFromJSON(json["lifetimeState"]),
    };
}

export function StatusResponseToJSON(json: any): StatusResponse {
    return StatusResponseToJSONTyped(json, false);
}

export function StatusResponseToJSONTyped(value?: StatusResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        lifetimeState: ProfileLifetimeStateToJSON(value["lifetimeState"]),
    };
}
