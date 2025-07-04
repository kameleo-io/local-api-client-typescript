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
import type { Fingerprint } from "./Fingerprint";
import { FingerprintFromJSON, FingerprintFromJSONTyped, FingerprintToJSON, FingerprintToJSONTyped } from "./Fingerprint";
import type { FontSpoofingType } from "./FontSpoofingType";
import {
    FontSpoofingTypeFromJSON,
    FontSpoofingTypeFromJSONTyped,
    FontSpoofingTypeToJSON,
    FontSpoofingTypeToJSONTyped,
} from "./FontSpoofingType";
import type { ProfileStorageLocation } from "./ProfileStorageLocation";
import {
    ProfileStorageLocationFromJSON,
    ProfileStorageLocationFromJSONTyped,
    ProfileStorageLocationToJSON,
    ProfileStorageLocationToJSONTyped,
} from "./ProfileStorageLocation";
import type { ScreenChoice } from "./ScreenChoice";
import { ScreenChoiceFromJSON, ScreenChoiceFromJSONTyped, ScreenChoiceToJSON, ScreenChoiceToJSONTyped } from "./ScreenChoice";
import type { AudioSpoofingType } from "./AudioSpoofingType";
import {
    AudioSpoofingTypeFromJSON,
    AudioSpoofingTypeFromJSONTyped,
    AudioSpoofingTypeToJSON,
    AudioSpoofingTypeToJSONTyped,
} from "./AudioSpoofingType";
import type { StatusResponse } from "./StatusResponse";
import { StatusResponseFromJSON, StatusResponseFromJSONTyped, StatusResponseToJSON, StatusResponseToJSONTyped } from "./StatusResponse";
import type { PasswordManagerType } from "./PasswordManagerType";
import {
    PasswordManagerTypeFromJSON,
    PasswordManagerTypeFromJSONTyped,
    PasswordManagerTypeToJSON,
    PasswordManagerTypeToJSONTyped,
} from "./PasswordManagerType";
import type { WebglSpoofingType } from "./WebglSpoofingType";
import {
    WebglSpoofingTypeFromJSON,
    WebglSpoofingTypeFromJSONTyped,
    WebglSpoofingTypeToJSON,
    WebglSpoofingTypeToJSONTyped,
} from "./WebglSpoofingType";
import type { CanvasSpoofingType } from "./CanvasSpoofingType";
import {
    CanvasSpoofingTypeFromJSON,
    CanvasSpoofingTypeFromJSONTyped,
    CanvasSpoofingTypeToJSON,
    CanvasSpoofingTypeToJSONTyped,
} from "./CanvasSpoofingType";
import type { DeviceMemoryChoice } from "./DeviceMemoryChoice";
import {
    DeviceMemoryChoiceFromJSON,
    DeviceMemoryChoiceFromJSONTyped,
    DeviceMemoryChoiceToJSON,
    DeviceMemoryChoiceToJSONTyped,
} from "./DeviceMemoryChoice";
import type { WebglMetaChoice } from "./WebglMetaChoice";
import {
    WebglMetaChoiceFromJSON,
    WebglMetaChoiceFromJSONTyped,
    WebglMetaChoiceToJSON,
    WebglMetaChoiceToJSONTyped,
} from "./WebglMetaChoice";
import type { GeolocationChoice } from "./GeolocationChoice";
import {
    GeolocationChoiceFromJSON,
    GeolocationChoiceFromJSONTyped,
    GeolocationChoiceToJSON,
    GeolocationChoiceToJSONTyped,
} from "./GeolocationChoice";
import type { HardwareConcurrencyChoice } from "./HardwareConcurrencyChoice";
import {
    HardwareConcurrencyChoiceFromJSON,
    HardwareConcurrencyChoiceFromJSONTyped,
    HardwareConcurrencyChoiceToJSON,
    HardwareConcurrencyChoiceToJSONTyped,
} from "./HardwareConcurrencyChoice";
import type { ProxyChoice } from "./ProxyChoice";
import { ProxyChoiceFromJSON, ProxyChoiceFromJSONTyped, ProxyChoiceToJSON, ProxyChoiceToJSONTyped } from "./ProxyChoice";
import type { WebRtcChoice } from "./WebRtcChoice";
import { WebRtcChoiceFromJSON, WebRtcChoiceFromJSONTyped, WebRtcChoiceToJSON, WebRtcChoiceToJSONTyped } from "./WebRtcChoice";
import type { TimezoneChoice } from "./TimezoneChoice";
import { TimezoneChoiceFromJSON, TimezoneChoiceFromJSONTyped, TimezoneChoiceToJSON, TimezoneChoiceToJSONTyped } from "./TimezoneChoice";

/**
 *
 * @export
 * @interface ProfileResponse
 */
export interface ProfileResponse {
    /**
     * A unique identifier of the profile
     * @type {string}
     * @memberof ProfileResponse
     */
    id: string;
    /**
     * Profile name property. The value obtained by file name for existing profiles. For new profiles the value is generated by a random name
     * generator.
     * @type {string}
     * @memberof ProfileResponse
     */
    name: string | null;
    /**
     * Profile tags
     * @type {Array<string>}
     * @memberof ProfileResponse
     */
    tags: Array<string> | null;
    /**
     * Date when the profile was created.
     * @type {Date}
     * @memberof ProfileResponse
     */
    createdAt: Date;
    /**
     * Provides a full view of a fingerprint, which encapsulates real-world browser fingerprint configurations used to
     * instantiate virtual browser profiles.
     * @type {Fingerprint}
     * @memberof ProfileResponse
     */
    fingerprint: Fingerprint | null;
    /**
     * Specifies how the canvas will be spoofed. Possible values:
     * 'intelligent': Use intelligent canvas spoofing. This will result non-unique canvas fingerprints.
     * 'noise': Add some noise to canvas generation.
     * 'block': Completely block the 2D API.
     * 'off': Turn off the spoofing, use the original settings.
     * @type {CanvasSpoofingType}
     * @memberof ProfileResponse
     */
    canvas: CanvasSpoofingType;
    /**
     * Specifies how the WebGL will be spoofed. Possible values:
     * 'noise': Add some noise to the WebGL generation
     * 'block': Completely block the 3D API
     * 'off': Turn off the spoofing, use the original settings
     * @type {WebglSpoofingType}
     * @memberof ProfileResponse
     */
    webgl: WebglSpoofingType;
    /**
     * Sets how the WebGL Vendor and Renderer will be spoofed. Possible values:
     * 'automatic': The vendor and renderer values comes from the fingerprint.
     * 'manual': Manually set the vendor and renderer values.
     * 'off': Turn off the spoofing, use the original settings
     * @type {WebglMetaChoice}
     * @memberof ProfileResponse
     */
    webglMeta: WebglMetaChoice | null;
    /**
     * Specifies how the audio will be spoofed. Possible values:
     * 'noise': Add some noise to the Audio generation
     * 'block': Completely block the Audio API
     * 'off': Turn off the spoofing, use the original settings
     * @type {AudioSpoofingType}
     * @memberof ProfileResponse
     */
    audio: AudioSpoofingType;
    /**
     * Sets how the Timezone will be spoofed. Values can be 'automatic', 'manual', 'off'.
     * @type {TimezoneChoice}
     * @memberof ProfileResponse
     */
    timezone: TimezoneChoice | null;
    /**
     * Sets how the Geolocation will be spoofed. Values can be 'automatic', 'manual', 'block', 'off'.
     * @type {GeolocationChoice}
     * @memberof ProfileResponse
     */
    geolocation: GeolocationChoice | null;
    /**
     * Proxy connection settings of the profiles. Values can be 'none', 'http', 'socks5', 'ssh'. When it is not set to none, a server is provided.
     * @type {ProxyChoice}
     * @memberof ProfileResponse
     */
    proxy: ProxyChoice | null;
    /**
     * Sets how the WebRTC will be spoofed. Values can be 'automatic', 'manual', 'block', 'off'.
     * @type {WebRtcChoice}
     * @memberof ProfileResponse
     */
    webRtc: WebRtcChoice | null;
    /**
     * Specifies how the fonts will be spoofed. Possible values:
     * 'automatic': Spoof fonts based on the browser fingerpint.
     * 'off': Don't spoof fonts, use the real fonts of your machine.
     * @type {FontSpoofingType}
     * @memberof ProfileResponse
     */
    fonts: FontSpoofingType;
    /**
     * Sets how the Screen will be spoofed. Values can be 'automatic', 'manual', 'off'. When value is set to manual, a ScreenSize must be provided
     * @type {ScreenChoice}
     * @memberof ProfileResponse
     */
    screen: ScreenChoice | null;
    /**
     * Sets how the Hardware Concurrency will be spoofed. Values can be 'automatic', 'manual', 'off'. When value is set to manual, a
     * HardwareConcurrencyType must be provided (valid values:1, 2, 4, 8, 12, 16)
     * @type {HardwareConcurrencyChoice}
     * @memberof ProfileResponse
     */
    hardwareConcurrency: HardwareConcurrencyChoice | null;
    /**
     * Sets the level of device memory spoofing. Values can be 'automatic', 'manual', 'off'.
     * When value is set to manual, a specific amount of device memory must be provided (valid values: 0.25, 0.5, 1, 2, 4, 8)
     * @type {DeviceMemoryChoice}
     * @memberof ProfileResponse
     */
    deviceMemory: DeviceMemoryChoice | null;
    /**
     * Language of the profile as ISO 639-1 language and optionally ISO 3166-1 region code.
     * @type {string}
     * @memberof ProfileResponse
     */
    language: string | null;
    /**
     * This website will be opened in the browser when the profile launches.
     * @type {string}
     * @memberof ProfileResponse
     */
    startPage: string | null;
    /**
     * Defines whether the browser can save login credentials. Possible values are:
     * 'enabled': Credential saving is allowed.
     * 'disabled': Credential saving is blocked.
     * @type {PasswordManagerType}
     * @memberof ProfileResponse
     */
    passwordManager: PasswordManagerType;
    /**
     * A list of extensions or addons that will be loaded to the profile when the profile is started. For chrome and edge use CRX3 format
     * extensions. For firefox use signed xpi format addons.
     * @type {Array<string>}
     * @memberof ProfileResponse
     */
    extensions: Array<string> | null;
    /**
     * A free text including any notes written by the user.
     * @type {string}
     * @memberof ProfileResponse
     */
    notes: string | null;
    /**
     * Status information about the profile.
     * @type {StatusResponse}
     * @memberof ProfileResponse
     */
    status: StatusResponse | null;
    /**
     * Profile storage property which determines where the profile is stored. The default value is 'local'. When the value is changed the profile
     * will be migrated.
     * @type {ProfileStorageLocation}
     * @memberof ProfileResponse
     */
    storage?: ProfileStorageLocation;
    /**
     * A unique identifier of the containing folder or empty (00000000-0000-0000-0000-000000000000) if it is not in folder.
     * @type {string}
     * @memberof ProfileResponse
     */
    folderId?: string | null;
}

/**
 * Check if a given object implements the ProfileResponse interface.
 */
export function instanceOfProfileResponse(value: object): value is ProfileResponse {
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("tags" in value) || value["tags"] === undefined) return false;
    if (!("createdAt" in value) || value["createdAt"] === undefined) return false;
    if (!("fingerprint" in value) || value["fingerprint"] === undefined) return false;
    if (!("canvas" in value) || value["canvas"] === undefined) return false;
    if (!("webgl" in value) || value["webgl"] === undefined) return false;
    if (!("webglMeta" in value) || value["webglMeta"] === undefined) return false;
    if (!("audio" in value) || value["audio"] === undefined) return false;
    if (!("timezone" in value) || value["timezone"] === undefined) return false;
    if (!("geolocation" in value) || value["geolocation"] === undefined) return false;
    if (!("proxy" in value) || value["proxy"] === undefined) return false;
    if (!("webRtc" in value) || value["webRtc"] === undefined) return false;
    if (!("fonts" in value) || value["fonts"] === undefined) return false;
    if (!("screen" in value) || value["screen"] === undefined) return false;
    if (!("hardwareConcurrency" in value) || value["hardwareConcurrency"] === undefined) return false;
    if (!("deviceMemory" in value) || value["deviceMemory"] === undefined) return false;
    if (!("language" in value) || value["language"] === undefined) return false;
    if (!("startPage" in value) || value["startPage"] === undefined) return false;
    if (!("passwordManager" in value) || value["passwordManager"] === undefined) return false;
    if (!("extensions" in value) || value["extensions"] === undefined) return false;
    if (!("notes" in value) || value["notes"] === undefined) return false;
    if (!("status" in value) || value["status"] === undefined) return false;
    return true;
}

export function ProfileResponseFromJSON(json: any): ProfileResponse {
    return ProfileResponseFromJSONTyped(json, false);
}

export function ProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileResponse {
    if (json == null) {
        return json;
    }
    return {
        id: json["id"],
        name: json["name"],
        tags: json["tags"] == null ? null : json["tags"],
        createdAt: new Date(json["createdAt"]),
        fingerprint: FingerprintFromJSON(json["fingerprint"]),
        canvas: CanvasSpoofingTypeFromJSON(json["canvas"]),
        webgl: WebglSpoofingTypeFromJSON(json["webgl"]),
        webglMeta: WebglMetaChoiceFromJSON(json["webglMeta"]),
        audio: AudioSpoofingTypeFromJSON(json["audio"]),
        timezone: TimezoneChoiceFromJSON(json["timezone"]),
        geolocation: GeolocationChoiceFromJSON(json["geolocation"]),
        proxy: ProxyChoiceFromJSON(json["proxy"]),
        webRtc: WebRtcChoiceFromJSON(json["webRtc"]),
        fonts: FontSpoofingTypeFromJSON(json["fonts"]),
        screen: ScreenChoiceFromJSON(json["screen"]),
        hardwareConcurrency: HardwareConcurrencyChoiceFromJSON(json["hardwareConcurrency"]),
        deviceMemory: DeviceMemoryChoiceFromJSON(json["deviceMemory"]),
        language: json["language"],
        startPage: json["startPage"],
        passwordManager: PasswordManagerTypeFromJSON(json["passwordManager"]),
        extensions: json["extensions"] == null ? null : json["extensions"],
        notes: json["notes"],
        status: StatusResponseFromJSON(json["status"]),
        storage: json["storage"] == null ? undefined : ProfileStorageLocationFromJSON(json["storage"]),
        folderId: json["folderId"] == null ? undefined : json["folderId"],
    };
}

export function ProfileResponseToJSON(json: any): ProfileResponse {
    return ProfileResponseToJSONTyped(json, false);
}

export function ProfileResponseToJSONTyped(value?: ProfileResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        id: value["id"],
        name: value["name"],
        tags: value["tags"],
        createdAt: value["createdAt"].toISOString(),
        fingerprint: FingerprintToJSON(value["fingerprint"]),
        canvas: CanvasSpoofingTypeToJSON(value["canvas"]),
        webgl: WebglSpoofingTypeToJSON(value["webgl"]),
        webglMeta: WebglMetaChoiceToJSON(value["webglMeta"]),
        audio: AudioSpoofingTypeToJSON(value["audio"]),
        timezone: TimezoneChoiceToJSON(value["timezone"]),
        geolocation: GeolocationChoiceToJSON(value["geolocation"]),
        proxy: ProxyChoiceToJSON(value["proxy"]),
        webRtc: WebRtcChoiceToJSON(value["webRtc"]),
        fonts: FontSpoofingTypeToJSON(value["fonts"]),
        screen: ScreenChoiceToJSON(value["screen"]),
        hardwareConcurrency: HardwareConcurrencyChoiceToJSON(value["hardwareConcurrency"]),
        deviceMemory: DeviceMemoryChoiceToJSON(value["deviceMemory"]),
        language: value["language"],
        startPage: value["startPage"],
        passwordManager: PasswordManagerTypeToJSON(value["passwordManager"]),
        extensions: value["extensions"],
        notes: value["notes"],
        status: StatusResponseToJSON(value["status"]),
        storage: ProfileStorageLocationToJSON(value["storage"]),
        folderId: value["folderId"],
    };
}
