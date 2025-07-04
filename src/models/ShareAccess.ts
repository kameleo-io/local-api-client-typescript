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
import type { User } from "./User";
import { UserFromJSON, UserFromJSONTyped, UserToJSON, UserToJSONTyped } from "./User";
import type { GroupRole } from "./GroupRole";
import { GroupRoleFromJSON, GroupRoleFromJSONTyped, GroupRoleToJSON, GroupRoleToJSONTyped } from "./GroupRole";

/**
 *
 * @export
 * @interface ShareAccess
 */
export interface ShareAccess {
    /**
     * User accessing this folder.
     * @type {User}
     * @memberof ShareAccess
     */
    user: User | null;
    /**
     * Level of access to the folder.
     * @type {GroupRole}
     * @memberof ShareAccess
     */
    role: GroupRole | null;
    /**
     * Timestamp when the acess was granted to the user.
     * @type {Date}
     * @memberof ShareAccess
     */
    sharedAt: Date;
}

/**
 * Check if a given object implements the ShareAccess interface.
 */
export function instanceOfShareAccess(value: object): value is ShareAccess {
    if (!("user" in value) || value["user"] === undefined) return false;
    if (!("role" in value) || value["role"] === undefined) return false;
    if (!("sharedAt" in value) || value["sharedAt"] === undefined) return false;
    return true;
}

export function ShareAccessFromJSON(json: any): ShareAccess {
    return ShareAccessFromJSONTyped(json, false);
}

export function ShareAccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShareAccess {
    if (json == null) {
        return json;
    }
    return {
        user: UserFromJSON(json["user"]),
        role: GroupRoleFromJSON(json["role"]),
        sharedAt: new Date(json["sharedAt"]),
    };
}

export function ShareAccessToJSON(json: any): ShareAccess {
    return ShareAccessToJSONTyped(json, false);
}

export function ShareAccessToJSONTyped(value?: ShareAccess | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        user: UserToJSON(value["user"]),
        role: GroupRoleToJSON(value["role"]),
        sharedAt: value["sharedAt"].toISOString(),
    };
}
