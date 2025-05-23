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
 * @interface CreateProfileRequest
 */
export interface CreateProfileRequest {
    /**
     * The unique identifier of the fingerprint. This references the fingerprint which should be used to build the new profile.
     * @type {string}
     * @memberof CreateProfileRequest
     */
    fingerprintId: string;
    /**
     * Sets a human-readable name for the profile, which is modifiable at any time.
     * @type {string}
     * @memberof CreateProfileRequest
     */
    name?: string | null;
    /**
     * Id of the folder the profile should be created in.
     * @type {string}
     * @memberof CreateProfileRequest
     */
    folderId?: string | null;
    /**
     * Use tags to categorize profiles by labeling them accordingly.
     * @type {Array<string>}
     * @memberof CreateProfileRequest
     */
    tags?: Array<string> | null;
    /**
     *
     * @type {CanvasSpoofingType}
     * @memberof CreateProfileRequest
     */
    canvas?: CanvasSpoofingType;
    /**
     *
     * @type {WebglSpoofingType}
     * @memberof CreateProfileRequest
     */
    webgl?: WebglSpoofingType;
    /**
     *
     * @type {WebglMetaChoice}
     * @memberof CreateProfileRequest
     */
    webglMeta?: WebglMetaChoice;
    /**
     *
     * @type {AudioSpoofingType}
     * @memberof CreateProfileRequest
     */
    audio?: AudioSpoofingType;
    /**
     *
     * @type {TimezoneChoice}
     * @memberof CreateProfileRequest
     */
    timezone?: TimezoneChoice;
    /**
     *
     * @type {GeolocationChoice}
     * @memberof CreateProfileRequest
     */
    geolocation?: GeolocationChoice;
    /**
     *
     * @type {ProxyChoice}
     * @memberof CreateProfileRequest
     */
    proxy?: ProxyChoice;
    /**
     *
     * @type {WebRtcChoice}
     * @memberof CreateProfileRequest
     */
    webRtc?: WebRtcChoice;
    /**
     *
     * @type {FontSpoofingType}
     * @memberof CreateProfileRequest
     */
    fonts?: FontSpoofingType;
    /**
     *
     * @type {ScreenChoice}
     * @memberof CreateProfileRequest
     */
    screen?: ScreenChoice;
    /**
     *
     * @type {HardwareConcurrencyChoice}
     * @memberof CreateProfileRequest
     */
    hardwareConcurrency?: HardwareConcurrencyChoice;
    /**
     *
     * @type {DeviceMemoryChoice}
     * @memberof CreateProfileRequest
     */
    deviceMemory?: DeviceMemoryChoice;
    /**
     * Language of the profile as ISO 639-1 language and optionally ISO 3166-1 region code.
     * @type {string}
     * @memberof CreateProfileRequest
     */
    language?: string | null;
    /**
     * This website will be opened in the browser when the profile launches.
     * @type {string}
     * @memberof CreateProfileRequest
     */
    startPage?: string | null;
    /**
     *
     * @type {PasswordManagerType}
     * @memberof CreateProfileRequest
     */
    passwordManager?: PasswordManagerType;
    /**
     * A list of abolute paths from where the profile should load extensions or addons when starting the browser. For chrome and edge use CRX3
     * format extensions. For firefox use signed xpi format addons.
     * @type {Array<string>}
     * @memberof CreateProfileRequest
     */
    extensions?: Array<string> | null;
    /**
     * A free text including any notes written by the user.
     * @type {string}
     * @memberof CreateProfileRequest
     */
    notes?: string | null;
    /**
     *
     * @type {ProfileStorageLocation}
     * @memberof CreateProfileRequest
     */
    storage?: ProfileStorageLocation;
}

/**
 * Check if a given object implements the CreateProfileRequest interface.
 */
export function instanceOfCreateProfileRequest(value: object): value is CreateProfileRequest {
    if (!("fingerprintId" in value) || value["fingerprintId"] === undefined) return false;
    return true;
}

export function CreateProfileRequestFromJSON(json: any): CreateProfileRequest {
    return CreateProfileRequestFromJSONTyped(json, false);
}

export function CreateProfileRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProfileRequest {
    if (json == null) {
        return json;
    }
    return {
        fingerprintId: json["fingerprintId"],
        name: json["name"] == null ? undefined : json["name"],
        folderId: json["folderId"] == null ? undefined : json["folderId"],
        tags: json["tags"] == null ? undefined : json["tags"],
        canvas: json["canvas"] == null ? undefined : CanvasSpoofingTypeFromJSON(json["canvas"]),
        webgl: json["webgl"] == null ? undefined : WebglSpoofingTypeFromJSON(json["webgl"]),
        webglMeta: json["webglMeta"] == null ? undefined : WebglMetaChoiceFromJSON(json["webglMeta"]),
        audio: json["audio"] == null ? undefined : AudioSpoofingTypeFromJSON(json["audio"]),
        timezone: json["timezone"] == null ? undefined : TimezoneChoiceFromJSON(json["timezone"]),
        geolocation: json["geolocation"] == null ? undefined : GeolocationChoiceFromJSON(json["geolocation"]),
        proxy: json["proxy"] == null ? undefined : ProxyChoiceFromJSON(json["proxy"]),
        webRtc: json["webRtc"] == null ? undefined : WebRtcChoiceFromJSON(json["webRtc"]),
        fonts: json["fonts"] == null ? undefined : FontSpoofingTypeFromJSON(json["fonts"]),
        screen: json["screen"] == null ? undefined : ScreenChoiceFromJSON(json["screen"]),
        hardwareConcurrency:
            json["hardwareConcurrency"] == null ? undefined : HardwareConcurrencyChoiceFromJSON(json["hardwareConcurrency"]),
        deviceMemory: json["deviceMemory"] == null ? undefined : DeviceMemoryChoiceFromJSON(json["deviceMemory"]),
        language: json["language"] == null ? undefined : json["language"],
        startPage: json["startPage"] == null ? undefined : json["startPage"],
        passwordManager: json["passwordManager"] == null ? undefined : PasswordManagerTypeFromJSON(json["passwordManager"]),
        extensions: json["extensions"] == null ? undefined : json["extensions"],
        notes: json["notes"] == null ? undefined : json["notes"],
        storage: json["storage"] == null ? undefined : ProfileStorageLocationFromJSON(json["storage"]),
    };
}

export function CreateProfileRequestToJSON(json: any): CreateProfileRequest {
    return CreateProfileRequestToJSONTyped(json, false);
}

export function CreateProfileRequestToJSONTyped(value?: CreateProfileRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        fingerprintId: value["fingerprintId"],
        name: value["name"],
        folderId: value["folderId"],
        tags: value["tags"],
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
        storage: ProfileStorageLocationToJSON(value["storage"]),
    };
}
