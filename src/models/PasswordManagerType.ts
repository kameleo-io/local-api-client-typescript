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

/**
 * Defines whether the browser can save login credentials. Possible values are:
 * 'enabled': Credential saving is allowed.
 * 'disabled': Credential saving is blocked.
 * @export
 */
export const PasswordManagerType = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;
export type PasswordManagerType = (typeof PasswordManagerType)[keyof typeof PasswordManagerType];

export function instanceOfPasswordManagerType(value: any): boolean {
    for (const key in PasswordManagerType) {
        if (Object.prototype.hasOwnProperty.call(PasswordManagerType, key)) {
            if (PasswordManagerType[key as keyof typeof PasswordManagerType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PasswordManagerTypeFromJSON(json: any): PasswordManagerType {
    return PasswordManagerTypeFromJSONTyped(json, false);
}

export function PasswordManagerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PasswordManagerType {
    return json as PasswordManagerType;
}

export function PasswordManagerTypeToJSON(value?: PasswordManagerType | null): any {
    return value as any;
}

export function PasswordManagerTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): PasswordManagerType {
    return value as PasswordManagerType;
}
