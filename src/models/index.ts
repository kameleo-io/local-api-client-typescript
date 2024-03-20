import * as coreClient from "@azure/core-client";

/** Provides possible values for base profile filtering. For example it tells what os languages are available. */
export interface BaseProfileSearchParameters {
  /** List of possible device types. Possible values are 'desktop', 'mobile'. */
  deviceTypes: string[];
  /** List of possible os families. Possible values are 'windows', 'macos', 'linux', 'android', 'ios'. */
  osFamilies: string[];
  /** List of possible browser products. Possible values are 'chrome', 'firefox', 'edge', 'safari'. */
  browserProducts: string[];
  /** List of possible os languages. It using the ISO 639-1 language code format. */
  languages: string[];
}

export interface ProblemResponse {
  code?: number;
  /** Dictionary of <components·18zhilc·schemas·problemresponse·properties·error·additionalproperties> */
  error?: { [propertyName: string]: string[] };
}

/** A preview object of a searched base profile. This contains some information about the base profile that will help you choose the right one. */
export interface BaseProfilePreview {
  /** The unique identifier of the base profile. You can use this as a reference to create a new profile from this base profile. */
  id: string;
  device: Device;
  os: Os;
  browser: Browser;
  /** Language of the base profile. Using ISO 639-1 language codes. */
  language: string;
}

export interface Device {
  /** Type of the device. Possible values are: 'desktop', 'mobile'. */
  type: string;
  /** Name of the device. This is only available for mobile profiles. */
  name?: string;
}

export interface Os {
  /** Specifies the operating system family. Possible values are 'windows', 'macos', 'linux', 'android', 'ios'. */
  family: string;
  /** The specific version of the OS. For example it helps you determine the exact version of the macOS. */
  version: string;
  /** The OS's platform, indicating the processor architecture (e.g., 64-bit, 32-bit) */
  platform: string;
}

export interface Browser {
  /** Product of the browser. Possible values are 'chrome', 'firefox', 'edge', 'safari'. */
  product: string;
  /** Major version of the browser. */
  major: number;
  /** Exact version of the browser. */
  version: string;
}

/** Representation of a cookie. */
export interface BrowserCookie {
  /** The domain attribute signifies the domain for which the cookie is valid and can be submitted with every request for this domain or its subdomains. If this attribute is not specified, then the hostname of the originating server is used as the default value. */
  domain: string;
  /** The name for the Cookie. */
  name: string;
  /** The path attribute indicates a URL path that must exist in the requested URL in order to send the Cookie header. The %x2F ("/") character is considered a directory separator, and subdirectories match as well. */
  path: string;
  /** The value of the Cookie. */
  value: string;
  /** Host Only cookie means that the cookie should be handled by the browser to the server only to the same host/server that firstly sent it to the browser. */
  hostOnly: boolean;
  /** When this attribute is set, client-side scripts are not allowed to access the cookie. */
  httpOnly: boolean;
  /** A cookie with the Secure attribute is sent to the server only with an encrypted request over the HTTPS protocol, never with unsecured HTTP, and therefore can't easily be accessed by a man-in-the-middle attacker. Insecure sites (with http: in the URL) can't set cookies with the Secure attribute. */
  secure: boolean;
  /**
   * The sameSite attribute lets servers require that a cookie shouldn't be sent with cross-origin requests (where Site is defined by the registrable domain), which provides some protection against cross-site request forgery attacks (CSRF).
   * It takes three possible values: Strict, Lax, and None.With Strict, the cookie is sent only to the same site as the one that originated it; Lax is similar, with an exception for when the user navigates to a URL from an external site, such as by following a link; None has no restrictions on cross-site requests.
   */
  sameSite: string;
  /**
   * This unix timestamp formatted attribute is used to set persistent cookies. It signifies how long the browser should use the persistent cookie and when the cookie should be deleted.
   * If this attribute is not specified, then the lifetime of the cookie is the same as that of browser session, i.e.it will be a non-persistent cookie.
   */
  expirationDate?: number;
  /** Session cookies are deleted when the current session ends. The browser defines when the "current session" ends, and some browsers use session restoring when restarting, which can cause session cookies to last indefinitely long. */
  session?: boolean;
  /** The ID of the cookie store containing this cookie. */
  storeId?: string;
}

export interface CookieRequest {
  /** The domain attribute signifies the domain for which the cookie is valid and can be submitted with every request for this domain or its subdomains. If this attribute is not specified, then the hostname of the originating server is used as the default value. */
  domain: string;
  /** The name for the Cookie. */
  name: string;
  /** The path attribute indicates a URL path that must exist in the requested URL in order to send the Cookie header. The %x2F ("/") character is considered a directory separator, and subdirectories match as well. */
  path: string;
  /** The value of the Cookie. */
  value: string;
  /** Host Only cookie means that the cookie should be handled by the browser to the server only to the same host/server that firstly sent it to the browser. */
  hostOnly?: boolean;
  /** When this attribute is set, client-side scripts are not allowed to access the cookie. */
  httpOnly?: boolean;
  /** A cookie with the Secure attribute is sent to the server only with an encrypted request over the HTTPS protocol, never with unsecured HTTP, and therefore can't easily be accessed by a man-in-the-middle attacker. Insecure sites (with http: in the URL) can't set cookies with the Secure attribute. */
  secure?: boolean;
  /**
   * The sameSite attribute lets servers require that a cookie shouldn't be sent with cross-origin requests (where Site is defined by the registrable domain), which provides some protection against cross-site request forgery attacks (CSRF).
   * It takes three possible values: Strict, Lax, and None.With Strict, the cookie is sent only to the same site as the one that originated it; Lax is similar, with an exception for when the user navigates to a URL from an external site, such as by following a link; None has no restrictions on cross-site requests.
   */
  sameSite?: string;
  /**
   * This attribute is used to set persistent cookies. It signifies how long the browser should use the persistent cookie and when the cookie should be deleted.
   * If this attribute is not specified, then the lifetime of the cookie is the same as that of browser session, i.e.it will be a non-persistent cookie.
   */
  expirationDate?: number;
}

export interface UserInfoResponse {
  /** The guid of the user. */
  userId: string;
  /** The email address of the authenticated user. */
  email: string;
  /** A boolean value indicating whether the email address is confirmed. */
  emailConfirmed: boolean;
  /** The end date of the authenticated user's current subscription. */
  subscriptionEnd: Date;
  /** The capabilities that the authenticated user owns thanks to his current subscription. */
  capabilities: string[];
  /** A boolean value indicates whether the subscription is in a grace period and should be renewed immediately. */
  gracePeriod: boolean;
  /** The last date when the user authenticated by the app. */
  lastAppLogin: Date;
  /** The user's workspace folder path where the profiles are stored. */
  workspaceFolder: string;
  localStorage: QuotaStatistics;
  cloudStorage: QuotaStatistics;
}

export interface QuotaStatistics {
  /** Indicates the current count of profiles accessible to the user, always a non-negative value. */
  currentUsage: number;
  /** Indicates the maximum permitted profile count for the user, with null implying no limit. */
  maximumLimit: number;
}

/** A preview about the profile with some of its properties. */
export interface ProfilePreview {
  /** A unique identifier of the profile */
  id: string;
  /** The name of the profile */
  name: string;
  /** Profile tags */
  tags: string[];
  proxy: ProxyConnectionTypeServerMultiLevelChoice;
  /** Date when the profile was created. */
  createdAt: Date;
  device: Device;
  os: Os;
  browser: Browser;
  /** Language of the profile. This is derived from the base profile. Using ISO 639-1 language codes. */
  language: string;
  /** This setting determines which browser engine is launched when a profile is started. This can be modified only before the first start. Possible values for Desktop profiles: 'automatic'. Possible values for Mobile profiles: 'chromium', 'external'. */
  launcher: string;
  /** Status information about the profile */
  status: StatusResponse;
  storage?: ProfileStorageLocation;
}

export interface ProxyConnectionTypeServerMultiLevelChoice {
  /**
   * Proxy connection settings of the profiles. Possible values:
   * 'none': Direct connection without any proxy.
   * 'http': Use a HTTP proxy for upstream communication.
   * 'socks5': Use a SOCKS5 proxy for upstream communication.
   * 'ssh': Use an SSH connection for upstream communication. Basically a SOCKS5 proxy created at the given SSH host.
   */
  value: ProxyConnectionType;
  /** Represents a server connection. It can be used as a proxy server connection as well. */
  extra?: Server;
}

/** Represents a server connection. It can be used as a proxy server connection as well. */
export interface Server {
  /** Gets or sets the hostname where the service is provided from. */
  host: string;
  /** Gets or sets the port where the service is provided from. */
  port: number;
  /** Gets or sets the identity information provided for the service. This could be a custom id or username or anything which identifies a resource on the remote service. Use it as a proxy username. This field is optional. */
  id?: string;
  /** Gets or sets the shared secret between the client and the service provider. Use it as a proxy password. This field is optional. */
  secret?: string;
}

/** Status information about the profile */
export interface StatusResponse {
  /**
   * Indicates the current save state of a profile, including cloud sync status. Possible values:
   * 'unsaved': The profile is not saved
   * 'saved': The profile is saved and current
   * 'syncing': The profile is currently synchronizing with the cloud
   */
  persistenceState: ProfilePersistenceState;
  /**
   * Represents the lifetime states of a profile, indicating which actions
   * can be performed with the associated browser engine at each state. Possible values are:
   * - Unknown: State of the profile is undefined.
   * - Created: Profile is created; the associated browser engine is not started.
   * - Starting: The associated browser engine is starting.
   * - Running: The associated browser engine is currently running.
   * - Terminating: The associated browser engine is in the process of terminating.
   * - Terminated: The associated browser engine is not running but has been started at least once.
   */
  lifetimeState: ProfileLifetimeState;
  /** In case of running profiles which use an external browser this shows the connection port (for mobile profiles as well). */
  externalSpoofingEnginePort?: number;
}

export interface CreateProfileRequest {
  /** The unique identifier of the base profile. This references the base profile which should be used to build the new profile. */
  baseProfileId: string;
  /** Sets a human readable name for the profile. The value obtained by file name for existing profiles. For new profiles the value is generated by random. */
  name?: string;
  /** Use tags to categorize profiles by labeling them accordingly. */
  tags?: string[];
  /**
   * Specifies how the canvas will be spoofed. Possible values:
   * 'intelligent': Use intelligent canvas spoofing. This will result non-unique canvas fingerprints.
   * 'noise': Add some noise to canvas generation.
   * 'block': Completely block the 2D API.
   * 'off': Turn off the spoofing, use the original settings.
   */
  canvas: CanvasSpoofingType;
  /**
   * Specifies how the WebGL will be spoofed. Possible values:
   * 'noise': Add some noise to the WebGL generation
   * 'block': Completely block the 3D API
   * 'off': Turn off the spoofing, use the original settings
   */
  webgl: WebglSpoofingType;
  webglMeta: WebglMetaSpoofingTypeWebglMetaSpoofingOptionsMultiLevelChoice;
  /**
   * Specifies how the audio will be spoofed. Possible values:
   * 'noise': Add some noise to the Audio generation
   * 'block': Completely block the Audio API
   * 'off': Turn off the spoofing, use the original settings
   */
  audio: AudioSpoofingType;
  timezone: TimezoneSpoofingTypeTimezoneMultiLevelChoice;
  geolocation: GeolocationSpoofingTypeGeolocationSpoofingOptionsMultiLevelChoice;
  proxy: ProxyConnectionTypeServerMultiLevelChoice;
  webRtc: WebRtcSpoofingTypeWebRtcSpoofingOptionsMultiLevelChoice;
  fonts: FontSpoofingTypeFontIListMultiLevelChoice;
  screen: ScreenSpoofingTypeScreenSizeMultiLevelChoice;
  hardwareConcurrency?: HardwareConcurrencySpoofingTypeInt32NullableMultiLevelChoice;
  deviceMemory?: DeviceMemorySpoofingTypeDoubleNullableMultiLevelChoice;
  /** This website will be opened in the browser when the profile launches. */
  startPage?: string;
  /**
   * Defines whether the browser can save login credentials. Possible values are:
   * 'enabled': Credential saving is allowed.
   * 'disabled': Credential saving is blocked.
   */
  passwordManager: PasswordManagerType;
  /** A list of abolute paths from where the profile should load extensions or addons when starting the browser. For chrome and edge use CRX3 format extensions. For firefox use signed xpi format addons. */
  extensions?: string[];
  /** A free text including any notes written by the user. */
  notes?: string;
  storage?: ProfileStorageLocation;
  /** This setting determines which browser engine is launched when a profile is started. This can be modified only before the first start. Possible values for Desktop profiles: 'automatic'. Possible values for Mobile profiles: 'chromium', 'external'. */
  launcher?: string;
}

export interface WebglMetaSpoofingTypeWebglMetaSpoofingOptionsMultiLevelChoice {
  /**
   * Specifies how the WebGL vendor and renderer will be spoofed. Possible values:
   * 'automatic': The vendor and renderer values comes from the base profile.
   * 'manual': Manually set the vendor and renderer values.
   * 'off': Turn off the spoofing, use the original settings
   */
  value: WebglMetaSpoofingType;
  /** When the WebGL Meta spoofing is used, these settings can override the values in the base profile. */
  extra?: WebglMetaSpoofingOptions;
}

/** When the WebGL Meta spoofing is used, these settings can override the values in the base profile. */
export interface WebglMetaSpoofingOptions {
  /** Unmasked vendor */
  vendor?: string;
  /** Unmasked renderer */
  renderer?: string;
}

export interface TimezoneSpoofingTypeTimezoneMultiLevelChoice {
  /**
   * Specifies how the timezone will be spoofed. Possble values:
   * 'automatic': Timezone is automatically set by the IP
   * 'manual': Timezone is manually overridden in the profile
   * 'off': Turn off the spoofing, use the original settings
   */
  value: TimezoneSpoofingType;
  /** When the Timezone spoofing is set to manual the timezone in Iana format is required. For example: America/Grenada */
  extra?: string;
}

export interface GeolocationSpoofingTypeGeolocationSpoofingOptionsMultiLevelChoice {
  /**
   * Specifies how the geolocation will be spoofed. Possible values:
   * 'automatic': Automatically set the values based on the IP address
   * 'manual': Manually set the longitude and latitude in the profile
   * 'block': Completely block the Geolocation API
   * 'off': Turn off the spoofing, use the original settings
   */
  value: GeolocationSpoofingType;
  /** When the Geolocation spoofing is set to manual these extra settings will be used as well. */
  extra?: GeolocationSpoofingOptions;
}

/** When the Geolocation spoofing is set to manual these extra settings will be used as well. */
export interface GeolocationSpoofingOptions {
  /** From -90 to 90 */
  latitude: number;
  /** From -180 to 180 */
  longitude: number;
}

export interface WebRtcSpoofingTypeWebRtcSpoofingOptionsMultiLevelChoice {
  /**
   * Specifies how the WebRTC will be spoofed. Possible values:
   * 'automatic': Automatically set the webRTC public IP by the IP, and generates a random private IP like '2d2f78e7-1b1e-4345-a21b-07c904c98394.local'
   * 'manual': Manually override the webRTC public IP and private IP in the profile
   * 'block': Block the WebRTC functionality
   * 'off': Turn off the spoofing, use the original settings
   */
  value: WebRtcSpoofingType;
  /** When the WebRTC spoofing is set to manual these extra settings will be used as well. */
  extra?: WebRtcSpoofingOptions;
}

/** When the WebRTC spoofing is set to manual these extra settings will be used as well. */
export interface WebRtcSpoofingOptions {
  /** The WebRTC local IP address of the machine. It can be an obfuscated value as well. */
  privateIp: string;
  /** The WebRTC public IP address of the machine. */
  publicIp: string;
}

export interface FontSpoofingTypeFontIListMultiLevelChoice {
  /**
   * Specifies how the fonts will be spoofed. Possible values:
   * 'enabled': Enable fonts spoofing. A list can be provided to override the fonts coming from the base profile.
   * 'disable': Disable fonts spoofing.
   */
  value: FontSpoofingType;
  extra?: string[];
}

export interface ScreenSpoofingTypeScreenSizeMultiLevelChoice {
  /**
   * Specifies how the screen will be spoofed. Possible values:
   * 'automatic': Automatically override the screen resolution based on the Base Profile.
   * 'manual': Manually override the screen resolution.
   * 'off': Turn off the spoofing, use the original settings.
   */
  value: ScreenSpoofingType;
  /** The screen size of the device in pixels. For example: 1920x1080 */
  extra?: string;
}

export interface HardwareConcurrencySpoofingTypeInt32NullableMultiLevelChoice {
  /**
   * Specifies how the hardwareConcurrency will be spoofed. Possible values:
   * 'automatic': Automatically set the values based on the Base Profile.
   * 'manual': Manually set the value in the profile. Valid values: 1, 2, 4, 8, 12, 16.
   * 'off': Turn off the spoofing, use the original settings.
   */
  value: HardwareConcurrencySpoofingType;
  extra?: number;
}

export interface DeviceMemorySpoofingTypeDoubleNullableMultiLevelChoice {
  /**
   * Specifies how the deviceMemory will be spoofed. Possible values:
   * 'automatic': Automatically set the values based on the Base Profile.
   * 'manual': Manually set the value in the profile. Valid values: 0.25, 0.5, 1, 2, 4, 8.
   * 'off': Turn off the spoofing, use the original settings.
   */
  value: DeviceMemorySpoofingType;
  extra?: number;
}

export interface ProfileResponse {
  /** A unique identifier of the profile */
  id: string;
  /** Profile name property. The value obtained by file name for existing profiles. For new profiles the value is generated by a random name generator. */
  name: string;
  /** Profile tags */
  tags: string[];
  /** Date when the profile was created. */
  createdAt: Date;
  /** Representation of a base profile which is used to build profiles from. */
  baseProfile: BaseProfile;
  /**
   * Specifies how the canvas will be spoofed. Possible values:
   * 'intelligent': Use intelligent canvas spoofing. This will result non-unique canvas fingerprints.
   * 'noise': Add some noise to canvas generation.
   * 'block': Completely block the 2D API.
   * 'off': Turn off the spoofing, use the original settings.
   */
  canvas: CanvasSpoofingType;
  /**
   * Specifies how the WebGL will be spoofed. Possible values:
   * 'noise': Add some noise to the WebGL generation
   * 'block': Completely block the 3D API
   * 'off': Turn off the spoofing, use the original settings
   */
  webgl: WebglSpoofingType;
  webglMeta: WebglMetaSpoofingTypeWebglMetaSpoofingOptionsMultiLevelChoice;
  /**
   * Specifies how the audio will be spoofed. Possible values:
   * 'noise': Add some noise to the Audio generation
   * 'block': Completely block the Audio API
   * 'off': Turn off the spoofing, use the original settings
   */
  audio: AudioSpoofingType;
  timezone: TimezoneSpoofingTypeTimezoneMultiLevelChoice;
  geolocation: GeolocationSpoofingTypeGeolocationSpoofingOptionsMultiLevelChoice;
  proxy: ProxyConnectionTypeServerMultiLevelChoice;
  webRtc: WebRtcSpoofingTypeWebRtcSpoofingOptionsMultiLevelChoice;
  fonts: FontSpoofingTypeFontIListMultiLevelChoice;
  screen: ScreenSpoofingTypeScreenSizeMultiLevelChoice;
  hardwareConcurrency: HardwareConcurrencySpoofingTypeInt32NullableMultiLevelChoice;
  deviceMemory: DeviceMemorySpoofingTypeDoubleNullableMultiLevelChoice;
  /** This website will be opened in the browser when the profile launches. */
  startPage: string;
  /**
   * Defines whether the browser can save login credentials. Possible values are:
   * 'enabled': Credential saving is allowed.
   * 'disabled': Credential saving is blocked.
   */
  passwordManager: PasswordManagerType;
  /** A list of extensions or addons that will be loaded to the profile when the profile is started. For chrome and edge use CRX3 format extensions. For firefox use signed xpi format addons. */
  extensions: string[];
  /** A free text including any notes written by the user. */
  notes: string;
  /** This setting determines which browser engine is launched when a profile is started. This can be modified only before the first start. Possible values for Desktop profiles: 'automatic'. Possible values for Mobile profiles: 'chromium', 'external'. */
  launcher: string;
  /** Status information about the profile */
  status: StatusResponse;
  storage?: ProfileStorageLocation;
}

/** Representation of a base profile which is used to build profiles from. */
export interface BaseProfile {
  /** The version of the base profile. As time passes new base profile versions will be introduced. It is recommended to use the latest one. */
  version: string;
  /** The unique identifier of the base profile. You can use this as a reference to create a new profile from this base profile. */
  id: string;
  device: Device;
  os: Os;
  browser: Browser;
  /** Language of the base profile. Using ISO 639-1 language codes. */
  language: string;
  /** The screen size of the device in pixels */
  resolution: string;
  /** A list of font types included in the profile */
  fonts: string[];
  webglMeta: WebglMeta;
}

export interface WebglMeta {
  /** The UnmaskedVendor field from WebGL context */
  vendor: string;
  /** The UnmaskedRenderer field from WebGL context */
  renderer?: string;
}

export interface UpdateProfileRequest {
  /**
   * Specifies how the canvas will be spoofed. Possible values:
   * 'intelligent': Use intelligent canvas spoofing. This will result non-unique canvas fingerprints.
   * 'noise': Add some noise to canvas generation.
   * 'block': Completely block the 2D API.
   * 'off': Turn off the spoofing, use the original settings.
   */
  canvas: CanvasSpoofingType;
  /**
   * Specifies how the WebGL will be spoofed. Possible values:
   * 'noise': Add some noise to the WebGL generation
   * 'block': Completely block the 3D API
   * 'off': Turn off the spoofing, use the original settings
   */
  webgl: WebglSpoofingType;
  webglMeta: WebglMetaSpoofingTypeWebglMetaSpoofingOptionsMultiLevelChoice;
  /**
   * Specifies how the audio will be spoofed. Possible values:
   * 'noise': Add some noise to the Audio generation
   * 'block': Completely block the Audio API
   * 'off': Turn off the spoofing, use the original settings
   */
  audio: AudioSpoofingType;
  timezone: TimezoneSpoofingTypeTimezoneMultiLevelChoice;
  geolocation: GeolocationSpoofingTypeGeolocationSpoofingOptionsMultiLevelChoice;
  proxy: ProxyConnectionTypeServerMultiLevelChoice;
  webRtc: WebRtcSpoofingTypeWebRtcSpoofingOptionsMultiLevelChoice;
  fonts: FontSpoofingTypeFontIListMultiLevelChoice;
  screen: ScreenSpoofingTypeScreenSizeMultiLevelChoice;
  hardwareConcurrency: HardwareConcurrencySpoofingTypeInt32NullableMultiLevelChoice;
  deviceMemory?: DeviceMemorySpoofingTypeDoubleNullableMultiLevelChoice;
  /** This website will be opened in the browser when the profile launches. */
  startPage?: string;
  /**
   * Defines whether the browser can save login credentials. Possible values are:
   * 'enabled': Credential saving is allowed.
   * 'disabled': Credential saving is blocked.
   */
  passwordManager: PasswordManagerType;
  /**
   * A list of extensions or addons should be loaded to the browser when starting the profile. For extensions that are added now, it should be an absolute path.
   * For extensions already added to the profile in a previous update, the name is only enough.
   * For chrome and edge use CRX3 format extensions. For firefox use signed xpi format addons.
   */
  extensions?: string[];
  /** A free text including any notes written by the user. */
  notes?: string;
  /** Profile name property. The value obtained by file name for existing profiles. For new profiles the value is generated by a random name generator. */
  name: string;
  /** Profile tags */
  tags?: string[];
  storage?: ProfileStorageLocation;
  /** This setting determines which browser engine is launched when a profile is started. This can be modified only before the first start. Possible values for Desktop profiles: 'automatic'. Possible values for Mobile profiles: 'chromium', 'external'. */
  launcher?: string;
}

/** Additional arguments, options and preferences that can be passed to the started WebDriver and browser. */
export interface WebDriverSettings {
  /** Command line switches that can be passed to the browser at startup. It is applicable for both chromium based browsers and for firefox. */
  arguments?: string[];
  /** List of preferences for browsers that can be passed at startup. In case of Chromium based options it will be a user profile preference. In case of Firefox profiles it will be a preference. */
  preferences?: Preference[];
  /** List of additional Kameleo options that can be passed at startup. It applies to all desktop profiles. See Kameleo Help Center for available options. */
  additionalOptions?: Preference[];
}

/** Represents a Key-Value pair where Value can be a string or a boolean or an integer */
export interface Preference {
  /** Key of the preference */
  key: string;
  /** Value of the preference. It can a string or a boolean or an integer */
  value: any;
}

/** Defines the target location for profile export. */
export interface ExportProfileRequest {
  /** Specifies the file path for exporting the profile. */
  path: string;
}

/** Specifies the source location for profile import. */
export interface ImportProfileRequest {
  /** The file path from which the profile will be imported. */
  path: string;
}

/** Known values of {@link ProxyConnectionType} that the service accepts. */
export enum KnownProxyConnectionType {
  /** None */
  None = "none",
  /** Http */
  Http = "http",
  /** Socks5 */
  Socks5 = "socks5",
  /** Ssh */
  Ssh = "ssh"
}

/**
 * Defines values for ProxyConnectionType. \
 * {@link KnownProxyConnectionType} can be used interchangeably with ProxyConnectionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **none** \
 * **http** \
 * **socks5** \
 * **ssh**
 */
export type ProxyConnectionType = string;

/** Known values of {@link ProfilePersistenceState} that the service accepts. */
export enum KnownProfilePersistenceState {
  /** Unsaved */
  Unsaved = "unsaved",
  /** Saved */
  Saved = "saved",
  /** Syncing */
  Syncing = "syncing"
}

/**
 * Defines values for ProfilePersistenceState. \
 * {@link KnownProfilePersistenceState} can be used interchangeably with ProfilePersistenceState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **unsaved** \
 * **saved** \
 * **syncing**
 */
export type ProfilePersistenceState = string;

/** Known values of {@link ProfileLifetimeState} that the service accepts. */
export enum KnownProfileLifetimeState {
  /** Created */
  Created = "created",
  /** Starting */
  Starting = "starting",
  /** Running */
  Running = "running",
  /** Terminating */
  Terminating = "terminating",
  /** Terminated */
  Terminated = "terminated",
  /** Locked */
  Locked = "locked",
  /** Unknown */
  Unknown = "unknown"
}

/**
 * Defines values for ProfileLifetimeState. \
 * {@link KnownProfileLifetimeState} can be used interchangeably with ProfileLifetimeState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **created** \
 * **starting** \
 * **running** \
 * **terminating** \
 * **terminated** \
 * **locked** \
 * **unknown**
 */
export type ProfileLifetimeState = string;

/** Known values of {@link ProfileStorageLocation} that the service accepts. */
export enum KnownProfileStorageLocation {
  /** Local */
  Local = "local",
  /** Cloud */
  Cloud = "cloud"
}

/**
 * Defines values for ProfileStorageLocation. \
 * {@link KnownProfileStorageLocation} can be used interchangeably with ProfileStorageLocation,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **local** \
 * **cloud**
 */
export type ProfileStorageLocation = string;

/** Known values of {@link CanvasSpoofingType} that the service accepts. */
export enum KnownCanvasSpoofingType {
  /** Intelligent */
  Intelligent = "intelligent",
  /** Noise */
  Noise = "noise",
  /** Block */
  Block = "block",
  /** Off */
  Off = "off"
}

/**
 * Defines values for CanvasSpoofingType. \
 * {@link KnownCanvasSpoofingType} can be used interchangeably with CanvasSpoofingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **intelligent** \
 * **noise** \
 * **block** \
 * **off**
 */
export type CanvasSpoofingType = string;

/** Known values of {@link WebglSpoofingType} that the service accepts. */
export enum KnownWebglSpoofingType {
  /** Noise */
  Noise = "noise",
  /** Block */
  Block = "block",
  /** Off */
  Off = "off"
}

/**
 * Defines values for WebglSpoofingType. \
 * {@link KnownWebglSpoofingType} can be used interchangeably with WebglSpoofingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **noise** \
 * **block** \
 * **off**
 */
export type WebglSpoofingType = string;

/** Known values of {@link WebglMetaSpoofingType} that the service accepts. */
export enum KnownWebglMetaSpoofingType {
  /** Automatic */
  Automatic = "automatic",
  /** Manual */
  Manual = "manual",
  /** Off */
  Off = "off"
}

/**
 * Defines values for WebglMetaSpoofingType. \
 * {@link KnownWebglMetaSpoofingType} can be used interchangeably with WebglMetaSpoofingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **automatic** \
 * **manual** \
 * **off**
 */
export type WebglMetaSpoofingType = string;

/** Known values of {@link AudioSpoofingType} that the service accepts. */
export enum KnownAudioSpoofingType {
  /** Off */
  Off = "off",
  /** Noise */
  Noise = "noise",
  /** Block */
  Block = "block"
}

/**
 * Defines values for AudioSpoofingType. \
 * {@link KnownAudioSpoofingType} can be used interchangeably with AudioSpoofingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **off** \
 * **noise** \
 * **block**
 */
export type AudioSpoofingType = string;

/** Known values of {@link TimezoneSpoofingType} that the service accepts. */
export enum KnownTimezoneSpoofingType {
  /** Automatic */
  Automatic = "automatic",
  /** Manual */
  Manual = "manual",
  /** Off */
  Off = "off"
}

/**
 * Defines values for TimezoneSpoofingType. \
 * {@link KnownTimezoneSpoofingType} can be used interchangeably with TimezoneSpoofingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **automatic** \
 * **manual** \
 * **off**
 */
export type TimezoneSpoofingType = string;

/** Known values of {@link GeolocationSpoofingType} that the service accepts. */
export enum KnownGeolocationSpoofingType {
  /** Automatic */
  Automatic = "automatic",
  /** Manual */
  Manual = "manual",
  /** Block */
  Block = "block",
  /** Off */
  Off = "off"
}

/**
 * Defines values for GeolocationSpoofingType. \
 * {@link KnownGeolocationSpoofingType} can be used interchangeably with GeolocationSpoofingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **automatic** \
 * **manual** \
 * **block** \
 * **off**
 */
export type GeolocationSpoofingType = string;

/** Known values of {@link WebRtcSpoofingType} that the service accepts. */
export enum KnownWebRtcSpoofingType {
  /** Automatic */
  Automatic = "automatic",
  /** Manual */
  Manual = "manual",
  /** Block */
  Block = "block",
  /** Off */
  Off = "off"
}

/**
 * Defines values for WebRtcSpoofingType. \
 * {@link KnownWebRtcSpoofingType} can be used interchangeably with WebRtcSpoofingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **automatic** \
 * **manual** \
 * **block** \
 * **off**
 */
export type WebRtcSpoofingType = string;

/** Known values of {@link FontSpoofingType} that the service accepts. */
export enum KnownFontSpoofingType {
  /** Enabled */
  Enabled = "enabled",
  /** Disabled */
  Disabled = "disabled"
}

/**
 * Defines values for FontSpoofingType. \
 * {@link KnownFontSpoofingType} can be used interchangeably with FontSpoofingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **enabled** \
 * **disabled**
 */
export type FontSpoofingType = string;

/** Known values of {@link ScreenSpoofingType} that the service accepts. */
export enum KnownScreenSpoofingType {
  /** Automatic */
  Automatic = "automatic",
  /** Manual */
  Manual = "manual",
  /** Off */
  Off = "off"
}

/**
 * Defines values for ScreenSpoofingType. \
 * {@link KnownScreenSpoofingType} can be used interchangeably with ScreenSpoofingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **automatic** \
 * **manual** \
 * **off**
 */
export type ScreenSpoofingType = string;

/** Known values of {@link HardwareConcurrencySpoofingType} that the service accepts. */
export enum KnownHardwareConcurrencySpoofingType {
  /** Automatic */
  Automatic = "automatic",
  /** Manual */
  Manual = "manual",
  /** Off */
  Off = "off"
}

/**
 * Defines values for HardwareConcurrencySpoofingType. \
 * {@link KnownHardwareConcurrencySpoofingType} can be used interchangeably with HardwareConcurrencySpoofingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **automatic** \
 * **manual** \
 * **off**
 */
export type HardwareConcurrencySpoofingType = string;

/** Known values of {@link DeviceMemorySpoofingType} that the service accepts. */
export enum KnownDeviceMemorySpoofingType {
  /** Automatic */
  Automatic = "automatic",
  /** Manual */
  Manual = "manual",
  /** Off */
  Off = "off"
}

/**
 * Defines values for DeviceMemorySpoofingType. \
 * {@link KnownDeviceMemorySpoofingType} can be used interchangeably with DeviceMemorySpoofingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **automatic** \
 * **manual** \
 * **off**
 */
export type DeviceMemorySpoofingType = string;

/** Known values of {@link PasswordManagerType} that the service accepts. */
export enum KnownPasswordManagerType {
  /** Enabled */
  Enabled = "enabled",
  /** Disabled */
  Disabled = "disabled"
}

/**
 * Defines values for PasswordManagerType. \
 * {@link KnownPasswordManagerType} can be used interchangeably with PasswordManagerType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **enabled** \
 * **disabled**
 */
export type PasswordManagerType = string;

/** Optional parameters. */
export interface GetBaseProfileSearchParametersOptionalParams
  extends coreClient.OperationOptions {
  /** Filter option for the Device Type. Possible values are 'desktop', 'mobile'. For example set it to mobile if you only want to see what os families we have for mobile profiles. */
  deviceType?: string;
  /** Filter option for os family. Possible values are 'windows', 'macos', 'linux', 'android', 'ios'. For example set it to windows if you only want to see what languages we have for windows profiles. */
  osFamily?: string;
  /** Filter option for browser product. Possible values are 'chrome', 'firefox', 'edge', 'safari'. For example set it to safari if you only want to see what os families we have for chrome profiles. */
  browserProduct?: string;
  /** Filter option for os language. Use ISO 639-1 language code format. For example set it to en-gb if you only want to see what browser products we have for English profiles. */
  language?: string;
}

/** Contains response data for the getBaseProfileSearchParameters operation. */
export type GetBaseProfileSearchParametersResponse = BaseProfileSearchParameters;

/** Optional parameters. */
export interface SearchBaseProfilesOptionalParams
  extends coreClient.OperationOptions {
  /**
   * Filter option for the Device Type. Possible values are 'desktop', 'mobile'.
   * You can also use a comma-separated list to provide more than one value.
   */
  deviceType?: string;
  /**
   * Filter option for os family. Possible values are 'windows', 'macos', 'linux', 'android', 'ios'.
   * You can also use a comma-separated list to provide more than one value.
   */
  osFamily?: string;
  /**
   * Filter option for browser product. Possible values are 'chrome', 'firefox', 'edge', 'safari'.
   * You can also use a comma-separated list to provide more than one value.
   */
  browserProduct?: string;
  /**
   * Filter option for os language. Use ISO 639-1 language code format.
   * For example, set it to en-gb if you want to get only English profiles from Great-Britain.
   * You can also use a comma-separated list to provide more than one value.
   * This field also supports wildcard for the sublanguage part: to retrieve both en-us, en-gb, and en-ca profiles, use 'en-*' as value.
   */
  language?: string;
}

/** Contains response data for the searchBaseProfiles operation. */
export type SearchBaseProfilesResponse = BaseProfilePreview[];

/** Optional parameters. */
export interface ListCookiesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listCookies operation. */
export type ListCookiesResponse = BrowserCookie[];

/** Optional parameters. */
export interface AddCookiesOptionalParams extends coreClient.OperationOptions {
  /** Array of CookieRequest */
  body?: CookieRequest[];
}

/** Contains response data for the addCookies operation. */
export type AddCookiesResponse = BrowserCookie[];

/** Optional parameters. */
export interface DeleteCookiesOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HealthcheckOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetUserInfoOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getUserInfo operation. */
export type GetUserInfoResponse = UserInfoResponse;

/** Optional parameters. */
export interface TerminateApplicationOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ListProfilesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listProfiles operation. */
export type ListProfilesResponse = ProfilePreview[];

/** Optional parameters. */
export interface CreateProfileOptionalParams
  extends coreClient.OperationOptions {
  body?: CreateProfileRequest;
}

/** Contains response data for the createProfile operation. */
export type CreateProfileResponse = ProfileResponse;

/** Optional parameters. */
export interface UpdateProfileOptionalParams
  extends coreClient.OperationOptions {
  body?: UpdateProfileRequest;
}

/** Contains response data for the updateProfile operation. */
export type UpdateProfileResponse = ProfileResponse;

/** Optional parameters. */
export interface ReadProfileOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the readProfile operation. */
export type ReadProfileResponse = ProfileResponse;

/** Optional parameters. */
export interface DeleteProfileOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetProfileStatusOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getProfileStatus operation. */
export type GetProfileStatusResponse = StatusResponse;

/** Optional parameters. */
export interface StartProfileOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the startProfile operation. */
export type StartProfileResponse = StatusResponse;

/** Optional parameters. */
export interface StartProfileWithOptionsOptionalParams
  extends coreClient.OperationOptions {
  /** Additional arguments, options and preferences that can be passed to the started WebDriver and browser. */
  body?: WebDriverSettings;
}

/** Contains response data for the startProfileWithOptions operation. */
export type StartProfileWithOptionsResponse = StatusResponse;

/** Optional parameters. */
export interface StopProfileOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the stopProfile operation. */
export type StopProfileResponse = StatusResponse;

/** Optional parameters. */
export interface ExportProfileOptionalParams
  extends coreClient.OperationOptions {
  /** Defines the target location for profile export. */
  body?: ExportProfileRequest;
}

/** Contains response data for the exportProfile operation. */
export type ExportProfileResponse = ProfileResponse;

/** Optional parameters. */
export interface DuplicateProfileOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the duplicateProfile operation. */
export type DuplicateProfileResponse = ProfileResponse;

/** Optional parameters. */
export interface ImportProfileOptionalParams
  extends coreClient.OperationOptions {
  /** Specifies the source location for profile import. */
  body?: ImportProfileRequest;
}

/** Contains response data for the importProfile operation. */
export type ImportProfileResponse = ProfileResponse;

/** Optional parameters. */
export interface UpgradeProfileOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the upgradeProfile operation. */
export type UpgradeProfileResponse = ProfileResponse;

/** Optional parameters. */
export interface KameleoLocalApiClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
