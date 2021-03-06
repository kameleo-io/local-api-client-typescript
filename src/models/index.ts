/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";

/**
 * Provides possible values for base profile filtering. For example it tells what os languages are
 * available.
 */
export interface BaseProfileSearchParameters {
  /**
   * List of possible device types. Possible values are 'desktop', 'mobile'.
   */
  deviceTypes: string[];
  /**
   * List of possible os families. Possible values are 'windows', 'macos', 'linux', 'android',
   * 'ios'.
   */
  osFamilies: string[];
  /**
   * List of possible browser products. Possible values are 'chrome', 'firefox', 'edge', 'safari'.
   */
  browserProducts: string[];
  /**
   * List of possible os languages. It using the ISO 639-1 language code format.
   */
  languages: string[];
}

/**
 * An interface representing ProblemResponse.
 */
export interface ProblemResponse {
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: number;
  error?: { [propertyName: string]: string[] };
}

/**
 * An interface representing Device.
 */
export interface Device {
  /**
   * Type of the device. Possible values are: 'desktop', 'mobile'.
   */
  type: string;
  /**
   * Name of the device. This is only available for mobile profiles.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
}

/**
 * An interface representing Os.
 */
export interface Os {
  /**
   * Family of the OS. Possible values are 'windows', 'macos', 'linux', 'android', 'ios'.
   */
  family: string;
  /**
   * Version of the OS. For example it helps you determine the exact version of the macOS.
   */
  version: string;
  /**
   * Platform of the OS. Tells if it runs on 64 bit or 32 bit or some other processor platform.
   */
  platform: string;
}

/**
 * An interface representing Browser.
 */
export interface Browser {
  /**
   * Product of the browser. Possible values are 'chrome', 'firefox', 'edge', 'safari'.
   */
  product: string;
  /**
   * Major version of the browser.
   */
  major: number;
  /**
   * Exact version of the browser.
   */
  version: string;
}

/**
 * A preview object of a searched base profile. This contains some information about the base
 * profile that will help you choose the right one.
 */
export interface BaseProfilePreview {
  /**
   * The unique identifier of the base profile. You can use this as a reference to create a new
   * profile from this base profile.
   */
  id: string;
  device: Device;
  os: Os;
  browser: Browser;
  /**
   * Language of the base profile. Using ISO 639-1 language codes.
   */
  language: string;
}

/**
 * Representation of a cookie.
 */
export interface BrowserCookie {
  /**
   * The domain attribute signifies the domain for which the cookie is valid and can be submitted
   * with every request for this domain or its subdomains. If this attribute is not specified, then
   * the hostname of the originating server is used as the default value.
   */
  domain: string;
  /**
   * The name for the Cookie.
   */
  name: string;
  /**
   * The path attribute indicates a URL path that must exist in the requested URL in order to send
   * the Cookie header. The %x2F ("/") character is considered a directory separator, and
   * subdirectories match as well.
   */
  path: string;
  /**
   * The value of the Cookie.
   */
  value: string;
  /**
   * Host Only cookie means that the cookie should be handled by the browser to the server only to
   * the same host/server that firstly sent it to the browser.
   */
  hostOnly: boolean;
  /**
   * When this attribute is set, client-side scripts are not allowed to access the cookie.
   */
  httpOnly: boolean;
  /**
   * A cookie with the Secure attribute is sent to the server only with an encrypted request over
   * the HTTPS protocol, never with unsecured HTTP, and therefore can't easily be accessed by a
   * man-in-the-middle attacker. Insecure sites (with http: in the URL) can't set cookies with the
   * Secure attribute.
   */
  secure: boolean;
  /**
   * The sameSite attribute lets servers require that a cookie shouldn't be sent with cross-origin
   * requests (where Site is defined by the registrable domain), which provides some protection
   * against cross-site request forgery attacks (CSRF).
   * It takes three possible values: Strict, Lax, and None.With Strict, the cookie is sent only to
   * the same site as the one that originated it; Lax is similar, with an exception for when the
   * user navigates to a URL from an external site, such as by following a link; None has no
   * restrictions on cross-site requests.
   */
  sameSite: string;
  /**
   * This unix timestamp formatted attribute is used to set persistent cookies. It signifies how
   * long the browser should use the persistent cookie and when the cookie should be deleted.
   * If this attribute is not specified, then the lifetime of the cookie is the same as that of
   * browser session, i.e.it will be a non-persistent cookie.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly expirationDate?: number;
  /**
   * Session cookies are deleted when the current session ends. The browser defines when the
   * "current session" ends, and some browsers use session restoring when restarting, which can
   * cause session cookies to last indefinitely long.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly session?: boolean;
  /**
   * The ID of the cookie store containing this cookie.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly storeId?: string;
}

/**
 * An interface representing CookieRequest.
 */
export interface CookieRequest {
  /**
   * The domain attribute signifies the domain for which the cookie is valid and can be submitted
   * with every request for this domain or its subdomains. If this attribute is not specified, then
   * the hostname of the originating server is used as the default value.
   */
  domain: string;
  /**
   * The name for the Cookie.
   */
  name: string;
  /**
   * The path attribute indicates a URL path that must exist in the requested URL in order to send
   * the Cookie header. The %x2F ("/") character is considered a directory separator, and
   * subdirectories match as well.
   */
  path: string;
  /**
   * The value of the Cookie.
   */
  value: string;
  /**
   * Host Only cookie means that the cookie should be handled by the browser to the server only to
   * the same host/server that firstly sent it to the browser.
   */
  hostOnly?: boolean;
  /**
   * When this attribute is set, client-side scripts are not allowed to access the cookie.
   */
  httpOnly?: boolean;
  /**
   * A cookie with the Secure attribute is sent to the server only with an encrypted request over
   * the HTTPS protocol, never with unsecured HTTP, and therefore can't easily be accessed by a
   * man-in-the-middle attacker. Insecure sites (with http: in the URL) can't set cookies with the
   * Secure attribute.
   */
  secure?: boolean;
  /**
   * The sameSite attribute lets servers require that a cookie shouldn't be sent with cross-origin
   * requests (where Site is defined by the registrable domain), which provides some protection
   * against cross-site request forgery attacks (CSRF).
   * It takes three possible values: Strict, Lax, and None.With Strict, the cookie is sent only to
   * the same site as the one that originated it; Lax is similar, with an exception for when the
   * user navigates to a URL from an external site, such as by following a link; None has no
   * restrictions on cross-site requests.
   */
  sameSite?: string;
  /**
   * This attribute is used to set persistent cookies. It signifies how long the browser should use
   * the persistent cookie and when the cookie should be deleted.
   * If this attribute is not specified, then the lifetime of the cookie is the same as that of
   * browser session, i.e.it will be a non-persistent cookie.
   */
  expirationDate?: number;
}

/**
 * An interface representing UserInfoResponse.
 */
export interface UserInfoResponse {
  /**
   * The guid of the user.
   */
  userId: string;
  /**
   * The email address of the authenticated user.
   */
  email: string;
  /**
   * The end date of the authenticated user's current subscription.
   */
  subscriptionEnd: Date;
  /**
   * The capabilities that the authenticated user owns thanks to his current subscription.
   */
  capabilities: string[];
  /**
   * The last date when the user authenticated by the app.
   */
  lastAppLogin?: Date;
}

/**
 * Status information about the profile
 */
export interface StatusResponse {
  /**
   * Possible values include: 'unsaved', 'saved'
   */
  persistenceState: PersistenceState;
  /**
   * Possible values include: 'created', 'starting', 'running', 'terminating', 'terminated'
   */
  lifetimeState: LifetimeState;
  /**
   * In case of running profiles which use an external browser this shows the connection port (for
   * mobile profiles as well).
   */
  externalSpoofingEnginePort?: number;
}

/**
 * A preview about the profile with some of its properties.
 */
export interface ProfilePreview {
  /**
   * A unique identifier of the profile
   */
  id: string;
  /**
   * An absolute path where the related .kameleo profile file was accessed lastly. This is updated
   * when a profile is saved to a .kameleo file, or loaded from a .kameleo file.
   */
  lastKnownPath?: string;
  device: Device;
  os: Os;
  browser: Browser;
  /**
   * Language of the profile. This is derived from the base profile. Using ISO 639-1 language
   * codes.
   */
  language: string;
  /**
   * The mode how the profile should be launched. It determines which browser to launch. This
   * cannot be modified after creation. Possible values are 'automatic', 'chrome', 'chromium',
   * 'firefox', 'edge', 'external'
   */
  launcher: string;
  status: StatusResponse;
}

/**
 * When the WebGL spoofing is set to noise these extra settings can be used to ovveride the values
 * in the base profile.
 */
export interface WebglSpoofingOptions {
  /**
   * Unmasked vendor
   */
  vendor?: string;
  /**
   * Unmasked renderer
   */
  renderer?: string;
}

/**
 * An interface representing WebglSpoofingTypeWebglSpoofingOptionsMultiLevelChoice.
 */
export interface WebglSpoofingTypeWebglSpoofingOptionsMultiLevelChoice {
  /**
   * Possible values include: 'noise', 'block', 'off'
   */
  value: Value;
  extra?: WebglSpoofingOptions;
}

/**
 * An interface representing TimezoneSpoofingTypeTimezoneMultiLevelChoice.
 */
export interface TimezoneSpoofingTypeTimezoneMultiLevelChoice {
  /**
   * Possible values include: 'automatic', 'manual', 'off'
   */
  value: Value1;
  /**
   * When the Timezone spoofing is set to manual the timezone in Iana format is required. For
   * example: America/Grenada
   */
  extra?: string;
}

/**
 * When the Geolocation spoofing is set to manual these extra settings will be used as well.
 */
export interface GeolocationSpoofingOptions {
  /**
   * From -90 to 90
   */
  latitude: number;
  /**
   * From -180 to 180
   */
  longitude: number;
}

/**
 * An interface representing GeolocationSpoofingTypeGeolocationSpoofingOptionsMultiLevelChoice.
 */
export interface GeolocationSpoofingTypeGeolocationSpoofingOptionsMultiLevelChoice {
  /**
   * Possible values include: 'automatic', 'manual', 'block', 'off'
   */
  value: Value2;
  extra?: GeolocationSpoofingOptions;
}

/**
 * Represents a server connection. It can be used as a proxy server connection as well.
 */
export interface Server {
  /**
   * Gets or sets the hostname where the service is provided from.
   */
  host: string;
  /**
   * Gets or sets the port where the service is provided from.
   */
  port: number;
  /**
   * Gets or sets the identity information provided for the service. This could be a custom id or
   * username or anything which identifies a resource on the remote service. Use it as a proxy
   * username. This field is optional.
   */
  id?: string;
  /**
   * Gets or sets the shared secret between the client and the service provider. Use it as a proxy
   * password. This field is optional.
   */
  secret?: string;
}

/**
 * An interface representing ProxyConnectionTypeServerMultiLevelChoice.
 */
export interface ProxyConnectionTypeServerMultiLevelChoice {
  /**
   * Possible values include: 'none', 'http', 'socks5', 'ssh'
   */
  value: Value3;
  extra?: Server;
}

/**
 * When the Geolocation spoofing is set to manual these extra settings will be used as well.
 */
export interface WebRtcSpoofingOptions {
  /**
   * The WebRTC local IP address of the machine. It can be an obfuscated value as well.
   */
  privateIp: string;
  /**
   * The WebRTC public IP address of the machine.
   */
  publicIp: string;
}

/**
 * An interface representing WebRtcSpoofingTypeWebRtcSpoofingOptionsMultiLevelChoice.
 */
export interface WebRtcSpoofingTypeWebRtcSpoofingOptionsMultiLevelChoice {
  /**
   * Possible values include: 'automatic', 'manual', 'block', 'off'
   */
  value: Value4;
  extra?: WebRtcSpoofingOptions;
}

/**
 * An interface representing FontSpoofingTypeFontIListMultiLevelChoice.
 */
export interface FontSpoofingTypeFontIListMultiLevelChoice {
  /**
   * Possible values include: 'enabled', 'disabled'
   */
  value: Value5;
  extra?: string[];
}

/**
 * An interface representing PluginSpoofingTypePluginIListMultiLevelChoice.
 */
export interface PluginSpoofingTypePluginIListMultiLevelChoice {
  /**
   * Possible values include: 'enabled', 'disabled'
   */
  value: Value6;
  extra?: string[];
}

/**
 * An interface representing ScreenSpoofingTypeScreenSizeMultiLevelChoice.
 */
export interface ScreenSpoofingTypeScreenSizeMultiLevelChoice {
  /**
   * Possible values include: 'automatic', 'manual', 'off'
   */
  value: Value7;
  /**
   * The screen size of the device in pixels. For example: 1920x1080
   */
  extra?: string;
}

/**
 * An interface representing CreateProfileRequest.
 */
export interface CreateProfileRequest {
  /**
   * The unique identifier of the base profile. This references the base profile which should be
   * used to build the new profile.
   */
  baseProfileId: string;
  /**
   * Possible values include: 'intelligent', 'noise', 'block', 'off'
   */
  canvas: Canvas;
  webgl: WebglSpoofingTypeWebglSpoofingOptionsMultiLevelChoice;
  timezone: TimezoneSpoofingTypeTimezoneMultiLevelChoice;
  geolocation: GeolocationSpoofingTypeGeolocationSpoofingOptionsMultiLevelChoice;
  proxy: ProxyConnectionTypeServerMultiLevelChoice;
  webRtc: WebRtcSpoofingTypeWebRtcSpoofingOptionsMultiLevelChoice;
  fonts: FontSpoofingTypeFontIListMultiLevelChoice;
  plugins: PluginSpoofingTypePluginIListMultiLevelChoice;
  screen: ScreenSpoofingTypeScreenSizeMultiLevelChoice;
  /**
   * This website will be opened in the browser when the profile launches.
   */
  startPage?: string;
  /**
   * A list of abolute paths from where the profile should load extensions or addons when starting
   * the browser. For chrome and edge use CRX3 format extensions. For firefox use signed xpi format
   * addons.
   */
  extensions?: string[];
  /**
   * A free text including any notes written by the user.
   */
  notes?: string;
  /**
   * The mode how the profile should be launched. It determines which browser to launch. This
   * cannot be modified after creation. Possible values are 'automatic', 'chrome', 'chromium',
   * 'firefox', 'edge', 'external'
   */
  launcher?: string;
}

/**
 * Representation of a base profile which is used to build profiles from.
 */
export interface BaseProfile {
  /**
   * The version of the base profile. As time passes new base profile versions will be introduced.
   * It is recommended to use the latest one.
   */
  version: string;
  /**
   * The unique identifier of the base profile. You can use this as a reference to create a new
   * profile from this base profile.
   */
  id: string;
  device: Device;
  os: Os;
  browser: Browser;
  /**
   * Language of the base profile. Using ISO 639-1 language codes.
   */
  language: string;
  /**
   * The screen size of the device in pixels
   */
  resolution: string;
  /**
   * A list of font types included in the profile
   */
  fonts: string[];
  /**
   * A list of plugins included in the profile
   */
  plugins: string[];
}

/**
 * An interface representing ProfileResponse.
 */
export interface ProfileResponse {
  /**
   * A unique identifier of the profile
   */
  id: string;
  /**
   * An absolute path where the related .kameleo profile file was accessed lastly. This is updated
   * when a profile is saved to a .kameleo file, or loaded from a .kameleo file.
   */
  lastKnownPath?: string;
  /**
   * Date when the profile was created.
   */
  createdAt: Date;
  baseProfile: BaseProfile;
  /**
   * Possible values include: 'intelligent', 'noise', 'block', 'off'
   */
  canvas: Canvas1;
  webgl: WebglSpoofingTypeWebglSpoofingOptionsMultiLevelChoice;
  timezone: TimezoneSpoofingTypeTimezoneMultiLevelChoice;
  geolocation: GeolocationSpoofingTypeGeolocationSpoofingOptionsMultiLevelChoice;
  proxy: ProxyConnectionTypeServerMultiLevelChoice;
  webRtc: WebRtcSpoofingTypeWebRtcSpoofingOptionsMultiLevelChoice;
  fonts: FontSpoofingTypeFontIListMultiLevelChoice;
  plugins: PluginSpoofingTypePluginIListMultiLevelChoice;
  screen: ScreenSpoofingTypeScreenSizeMultiLevelChoice;
  /**
   * This website will be opened in the browser when the profile launches.
   */
  startPage: string;
  /**
   * A list of abolute paths from where the profile should load extensions or addons when starting
   * the browser. For chrome and edge use CRX3 format extensions. For firefox use signed xpi format
   * addons.
   */
  extensions: string[];
  /**
   * A free text including any notes written by the user.
   */
  notes: string;
  /**
   * The mode how the profile should be launched. It determines which browser to launch. This
   * cannot be modified after creation. Possible values are 'automatic', 'chrome', 'chromium',
   * 'firefox', 'edge', 'external'
   */
  launcher: string;
  status: StatusResponse;
}

/**
 * An interface representing UpdateProfileRequest.
 */
export interface UpdateProfileRequest {
  /**
   * Possible values include: 'intelligent', 'noise', 'block', 'off'
   */
  canvas: Canvas2;
  webgl: WebglSpoofingTypeWebglSpoofingOptionsMultiLevelChoice;
  timezone: TimezoneSpoofingTypeTimezoneMultiLevelChoice;
  geolocation: GeolocationSpoofingTypeGeolocationSpoofingOptionsMultiLevelChoice;
  proxy: ProxyConnectionTypeServerMultiLevelChoice;
  webRtc: WebRtcSpoofingTypeWebRtcSpoofingOptionsMultiLevelChoice;
  fonts: FontSpoofingTypeFontIListMultiLevelChoice;
  plugins: PluginSpoofingTypePluginIListMultiLevelChoice;
  screen: ScreenSpoofingTypeScreenSizeMultiLevelChoice;
  /**
   * This website will be opened in the browser when the profile launches.
   */
  startPage: string;
  /**
   * A list of abolute paths from where the profile should load extensions or addons when starting
   * the browser. For chrome and edge use CRX3 format extensions. For firefox use signed xpi format
   * addons.
   */
  extensions?: string[];
  /**
   * A free text including any notes written by the user.
   */
  notes?: string;
  /**
   * The mode how the profile should be launched. It determines which browser to launch. This
   * cannot be modified after creation. Possible values are 'automatic', 'chrome', 'chromium',
   * 'firefox', 'edge', 'external'
   */
  launcher?: string;
}

/**
 * Tells where the profile should be saved
 */
export interface SaveProfileRequest {
  /**
   * The path where the profile should be saved.
   */
  path: string;
}

/**
 * Tells where the profile should be loaded from
 */
export interface LoadProfileRequest {
  /**
   * The path where the profile should be loaded from
   */
  path: string;
}

/**
 * An interface representing LocalApiClientOptions.
 */
export interface LocalApiClientOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface LocalApiClientGetBaseProfileSearchParametersOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Filter option for the Device Type. Possible values are 'desktop', 'mobile'. For example set it
   * to mobile if you only want to see what os families we have for mobile profiles.
   */
  deviceType?: string;
  /**
   * Filter option for os family. Possible values are 'windows', 'macos', 'linux', 'android',
   * 'ios'. For example set it to windows if you only want to see what languages we have for
   * windows profiles.
   */
  osFamily?: string;
  /**
   * Filter option for browser product. Possible values are 'chrome', 'firefox', 'edge', 'safari'.
   * For example set it to safari if you only want to see what os families we have for chrome
   * profiles.
   */
  browserProduct?: string;
  /**
   * Filter option for os language. Use ISO 639-1 language code format. For example set it to en-gb
   * if you only want to see what browser products we have for English profiles.
   */
  language?: string;
}

/**
 * Optional Parameters.
 */
export interface LocalApiClientSearchBaseProfilesOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Filter option for the Device Type. Possible values are 'desktop', 'mobile'. For example set it
   * to mobile if you only want to get mobile profiles.
   */
  deviceType?: string;
  /**
   * Filter option for os family. Possible values are 'windows', 'macos', 'linux', 'android',
   * 'ios'. For example set it to windows if you only want to get Windows profiles.
   */
  osFamily?: string;
  /**
   * Filter option for browser product. Possible values are 'chrome', 'firefox', 'edge', 'safari'.
   * For example set it to safari if you only want to get profiles with Safari browser.
   */
  browserProduct?: string;
  /**
   * Filter option for os language. Use ISO 639-1 language code format. For example set it to en-gb
   * if you only want to get English profiles.
   */
  language?: string;
}

/**
 * Optional Parameters.
 */
export interface LocalApiClientAddCookiesOptionalParams extends msRest.RequestOptionsBase {
  body?: CookieRequest[];
}

/**
 * Optional Parameters.
 */
export interface LocalApiClientCreateProfileOptionalParams extends msRest.RequestOptionsBase {
  body?: CreateProfileRequest;
}

/**
 * Optional Parameters.
 */
export interface LocalApiClientUpdateProfileOptionalParams extends msRest.RequestOptionsBase {
  body?: UpdateProfileRequest;
}

/**
 * Optional Parameters.
 */
export interface LocalApiClientSaveProfileOptionalParams extends msRest.RequestOptionsBase {
  body?: SaveProfileRequest;
}

/**
 * Optional Parameters.
 */
export interface LocalApiClientLoadProfileOptionalParams extends msRest.RequestOptionsBase {
  body?: LoadProfileRequest;
}

/**
 * Defines values for PersistenceState.
 * Possible values include: 'unsaved', 'saved'
 * @readonly
 * @enum {string}
 */
export type PersistenceState = 'unsaved' | 'saved';

/**
 * Defines values for LifetimeState.
 * Possible values include: 'created', 'starting', 'running', 'terminating', 'terminated'
 * @readonly
 * @enum {string}
 */
export type LifetimeState = 'created' | 'starting' | 'running' | 'terminating' | 'terminated';

/**
 * Defines values for Value.
 * Possible values include: 'noise', 'block', 'off'
 * @readonly
 * @enum {string}
 */
export type Value = 'noise' | 'block' | 'off';

/**
 * Defines values for Value1.
 * Possible values include: 'automatic', 'manual', 'off'
 * @readonly
 * @enum {string}
 */
export type Value1 = 'automatic' | 'manual' | 'off';

/**
 * Defines values for Value2.
 * Possible values include: 'automatic', 'manual', 'block', 'off'
 * @readonly
 * @enum {string}
 */
export type Value2 = 'automatic' | 'manual' | 'block' | 'off';

/**
 * Defines values for Value3.
 * Possible values include: 'none', 'http', 'socks5', 'ssh'
 * @readonly
 * @enum {string}
 */
export type Value3 = 'none' | 'http' | 'socks5' | 'ssh';

/**
 * Defines values for Value4.
 * Possible values include: 'automatic', 'manual', 'block', 'off'
 * @readonly
 * @enum {string}
 */
export type Value4 = 'automatic' | 'manual' | 'block' | 'off';

/**
 * Defines values for Value5.
 * Possible values include: 'enabled', 'disabled'
 * @readonly
 * @enum {string}
 */
export type Value5 = 'enabled' | 'disabled';

/**
 * Defines values for Value6.
 * Possible values include: 'enabled', 'disabled'
 * @readonly
 * @enum {string}
 */
export type Value6 = 'enabled' | 'disabled';

/**
 * Defines values for Value7.
 * Possible values include: 'automatic', 'manual', 'off'
 * @readonly
 * @enum {string}
 */
export type Value7 = 'automatic' | 'manual' | 'off';

/**
 * Defines values for Canvas.
 * Possible values include: 'intelligent', 'noise', 'block', 'off'
 * @readonly
 * @enum {string}
 */
export type Canvas = 'intelligent' | 'noise' | 'block' | 'off';

/**
 * Defines values for Canvas1.
 * Possible values include: 'intelligent', 'noise', 'block', 'off'
 * @readonly
 * @enum {string}
 */
export type Canvas1 = 'intelligent' | 'noise' | 'block' | 'off';

/**
 * Defines values for Canvas2.
 * Possible values include: 'intelligent', 'noise', 'block', 'off'
 * @readonly
 * @enum {string}
 */
export type Canvas2 = 'intelligent' | 'noise' | 'block' | 'off';

/**
 * Contains response data for the getBaseProfileSearchParameters operation.
 */
export type GetBaseProfileSearchParametersResponse = BaseProfileSearchParameters & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: BaseProfileSearchParameters;
    };
};

/**
 * Contains response data for the searchBaseProfiles operation.
 */
export type SearchBaseProfilesResponse = Array<BaseProfilePreview> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: BaseProfilePreview[];
    };
};

/**
 * Contains response data for the listCookies operation.
 */
export type ListCookiesResponse = Array<BrowserCookie> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: BrowserCookie[];
    };
};

/**
 * Contains response data for the addCookies operation.
 */
export type AddCookiesResponse = Array<BrowserCookie> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: BrowserCookie[];
    };
};

/**
 * Contains response data for the getUserInfo operation.
 */
export type GetUserInfoResponse = UserInfoResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UserInfoResponse;
    };
};

/**
 * Contains response data for the listProfiles operation.
 */
export type ListProfilesResponse = Array<ProfilePreview> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProfilePreview[];
    };
};

/**
 * Contains response data for the createProfile operation.
 */
export type CreateProfileResponse = ProfileResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProfileResponse;
    };
};

/**
 * Contains response data for the updateProfile operation.
 */
export type UpdateProfileResponse = ProfileResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProfileResponse;
    };
};

/**
 * Contains response data for the readProfile operation.
 */
export type ReadProfileResponse = ProfileResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProfileResponse;
    };
};

/**
 * Contains response data for the getProfileStatus operation.
 */
export type GetProfileStatusResponse = StatusResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: StatusResponse;
    };
};

/**
 * Contains response data for the startProfile operation.
 */
export type StartProfileResponse = StatusResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: StatusResponse;
    };
};

/**
 * Contains response data for the stopProfile operation.
 */
export type StopProfileResponse = StatusResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: StatusResponse;
    };
};

/**
 * Contains response data for the saveProfile operation.
 */
export type SaveProfileResponse = ProfileResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProfileResponse;
    };
};

/**
 * Contains response data for the loadProfile operation.
 */
export type LoadProfileResponse = ProfileResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProfileResponse;
    };
};
