import {
    CreateProfileRequest,
    WebglMetaSpoofingOptions,
    GeolocationSpoofingOptions,
    Server,
    WebRtcSpoofingOptions,
    WebglMetaSpoofingType,
    TimezoneSpoofingType,
    GeolocationSpoofingType,
    ProxyConnectionType,
    WebRtcSpoofingType,
    FontSpoofingType,
    ScreenSpoofingType,
    CanvasSpoofingType,
    PasswordManagerType,
    AudioSpoofingType,
    WebglSpoofingType,
    HardwareConcurrencySpoofingType,
    DeviceMemorySpoofingType
} from './models';

export class BuilderForCreateProfile {
    private profileRequest: CreateProfileRequest;

    private constructor(baseProfileId: string) {
        this.profileRequest = this.reset(baseProfileId);
    }

    public static forBaseProfile(baseProfileId: string): BuilderForCreateProfile {
        if (!baseProfileId) {
            throw new Error("baseProfileId must be set");
        }

        return new BuilderForCreateProfile(baseProfileId);
    }

    public build(): CreateProfileRequest {
        const result = { ...this.profileRequest };
        this.profileRequest = this.reset(result.baseProfileId);

        return result;
    }

    /**
     * @summary Sets the name of the profile
     */
    public setName(value: string): BuilderForCreateProfile {
        this.profileRequest.name = value;

        return this;
    }

    /**
     * @summary <para>Sets the tags of the profile:</para>
     * <para>'tags': The tags of the profile.</para>
     */
    public setTags(tags: string[]): BuilderForCreateProfile {
        this.profileRequest.tags = tags;

        return this;
    }

    /**
     * @summary <para>Specifies how the canvas will be spoofed. Possible values:</para>
     * <para>'intelligent': Use intelligent canvas spoofing. This will result non-unique canvas fingerprints.</para>
     * <para>'noise': Add some noise to canvas generation.</para>
     * <para>'block': Completely block the 2D API.</para>
     * <para>'off': Turn off the spoofing, use the original settings.</para>
     */
    public setCanvas(value: CanvasSpoofingType): BuilderForCreateProfile {
        this.profileRequest.canvas = value;

        return this;
    }

    /**
     * @summary <para>Specifies how the WebGL will be spoofed. Possible values:</para>
     * <para>'noise': Add some noise to the WebGL generation</para>
     * <para>'block': Completely block the 3D API</para>
     * <para>'off': Turn off the spoofing, use the original settings</para>
     */
    public setWebgl(value: WebglSpoofingType): BuilderForCreateProfile {
        this.profileRequest.webgl = value;

        return this;
    }

    /**
     * @summary <para>Specifies how the WebGL vendor and renderer will be spoofed. Possible values:</para>
     * <para>'automatic': The vendor and renderer values comes from the base profile.</para>
     * <para>'manual': Manually set the vendor and renderer values.</para>
     * <para>'off': Turn off the spoofing, use the original settings.</para>
     */
    public setWebglMeta(value: WebglMetaSpoofingType, options: WebglMetaSpoofingOptions|undefined): BuilderForCreateProfile {
        this.profileRequest.webglMeta.value = value;
        this.profileRequest.webglMeta.extra = options;

        return this;
    }

    /**
     * @summary <para>Specifies how the audio will be spoofed. Possible values:</para>
     * <para>'noise': Add some noise to the Audio generation</para>
     * <para>'block': Completely block the Audio API</para>
     * <para>'off': Turn off the spoofing, use the original settings.</para>
     */
     public setAudio(value: AudioSpoofingType): BuilderForCreateProfile {
        this.profileRequest.audio = value;

        return this;
    }

    /**
     * @summary <para>Specifies how the timezone will be spoofed. Possble values:</para>
     * <para>'automatic': Timezone is automatically set by the IP</para>
     * <para>'manual': Timezone is manually overridden in the profile</para>
     * <para>'off': Turn off the spoofing, use the original settings</para>
     * @param options When the Timezone spoofing is set to manual the timezone in Iana format is required. For example: America/Grenada
     */
    public setTimezone(value: TimezoneSpoofingType, options: string|undefined): BuilderForCreateProfile {
        this.profileRequest.timezone.value = value;
        this.profileRequest.timezone.extra = options;

        return this;
    }

    /**
     * @summary <para>Specifies how the geolocation will be spoofed. Possible values:</para>
     * <para>'automatic': Automatically set the values based on the IP address</para>
     * <para>'manual': Manually set the longitude and latitude in the profile</para>
     * <para>'block': Completely block the Geolocation API</para>
     * <para>'off': Turn off the spoofing, use the original settings</para>
     */
    public setGeolocation(value: GeolocationSpoofingType, options: GeolocationSpoofingOptions|undefined): BuilderForCreateProfile {
        this.profileRequest.geolocation.value = value;
        this.profileRequest.geolocation.extra = options;

        return this;
    }

    /**
     * @summary <para>Proxy connection settings of the profiles. Possible values:</para>
     * <para>'none': Direct connection without any proxy.</para>
     * <para>'http': Use a HTTP(S) proxy for upstream communication.</para>
     * <para>'socks5': Use a SOCKS5 proxy for upstream communication.</para>
     * <para>'ssh': Use an SSH connection for upstream communication. Basically a SOCKS5 proxy created at the given SSH host.</para>
     */
    public setProxy(value: ProxyConnectionType, options: Server|undefined): BuilderForCreateProfile {
        this.profileRequest.proxy.value = value;
        this.profileRequest.proxy.extra = options;

        return this;
    }

    /**
     * @summary <para>Specifies how the WebRTC will be spoofed. Possible values:</para>
     * <para>'automatic': Automatically set the webRTC public IP by the IP, and generates a random private IP like '2d2f78e7-1b1e-4345-a21b-07c904c98394.local'</para>
     * <para>'manual': Manually override the webRTC public IP and private IP in the profile</para>
     * <para>'block': Block the WebRTC functionality</para>
     * <para>'off': Turn off the spoofing, use the original settings</para>
     */
    public setWebRtc(value: WebRtcSpoofingType, options: WebRtcSpoofingOptions|undefined): BuilderForCreateProfile {
        this.profileRequest.webRtc.value = value;
        this.profileRequest.webRtc.extra = options;

        return this;
    }

    /**
     * @summary <para>Specifies how the fonts will be spoofed. Possible values:</para>
     * <para>'enabled': Enable fonts spoofing.</para>
     * <para>'disable': Disable fonts spoofing.</para>
     */
    public setFonts(value: FontSpoofingType): BuilderForCreateProfile {
        this.profileRequest.fonts = value;

        return this;
    }

    /**
     * @summary This website will be opened in the browser when the profile launches.
     */
    public setStartPage(value: string): BuilderForCreateProfile {
        this.profileRequest.startPage = value;

        return this;
    }

    /**
     * @summary <para>Enable or disable the password manager function in the browser. Possible values:</para>
     * <para>'enabled': Enable password manager so browser will ask to save and load passwords on logins.</para>
     * <para>'disable': Disable password manager.</para>
     */
     public setPasswordManager(value: PasswordManagerType): BuilderForCreateProfile {
        this.profileRequest.passwordManager = value;

        return this;
    }

    /**
     * @summary <para>Specifies how the screen will be spoofed. Possible values:</para>
     * <para>'automatic': Automatically override the screen resolution based on the Base Profile.</para>
     * <para>'manual': Manually override the screen resolution.</para>
     * <para>'off': Turn off the spoofing, use the original settings.</para>
     */
    public setScreen(value: ScreenSpoofingType, options: string|undefined): BuilderForCreateProfile {
        this.profileRequest.screen.value = value;
        this.profileRequest.screen.extra = options;

        return this;
    }

    /**
     * @summary <para>Specifies how the hardwareConcurrency will be spoofed. Possible values:</para>
     * <para>'automatic': Automatically override the HardwareConcurrency based on the Base Profile.</para>
     * <para>'manual': Manually override the HardwareConcurrency. Valid values: 1,2,4,8,16.</para>
     * <para>'off': Turn off the spoofing, use the original settings.</para>
     */
    public setHardwareConcurrency(value: HardwareConcurrencySpoofingType, options: number|undefined): BuilderForCreateProfile {
        this.profileRequest.hardwareConcurrency = { value: value, extra: options };
        return this;
    }

    /**
     * @summary <para>Specifies how the DeviceMemory will be spoofed. Possible values:</para>
     * <para>'automatic': Automatically override the DeviceMemory based on the Base Profile.</para>
     * <para>'manual': Manually override the DeviceMemory. Valid values: 0.25, 0.5, 1, 2, 4, 8.</para>
     * <para>'off': Turn off the spoofing, use the original settings.</para>
     */
    public setDeviceMemory(value: DeviceMemorySpoofingType, options: number|undefined): BuilderForCreateProfile {
        this.profileRequest.deviceMemory = { value: value, extra: options };
        return this;
    }

    /**
     * @summary A list of abolute paths from where the profile should load extensions or addons when starting the browser. For chrome and edge use CRX3 format extensions. For firefox use signed xpi format addons.
     */
    public setExtensions(absolutePaths: string[]): BuilderForCreateProfile {
        this.profileRequest.extensions = absolutePaths;

        return this;
    }

    /**
     * @summary A free text including any notes written by the user.
     */
    public setNotes(notes: string): BuilderForCreateProfile {
        this.profileRequest.notes = notes;

        return this;
    }

    /**
     * @summary <para>The mode how the profile should be launched. It determines which browser to launch. This cannot be modified after creation. </para>
     * <para> Possible values for Desktop profiles 'automatic'. </para>
     * <para> Possible values for Mobile profiles: 'chromium', 'external'. </para>
     */
    public setLauncher(browserLauncher: string): BuilderForCreateProfile {
        this.profileRequest.launcher = browserLauncher;

        return this;
    }

    /**
     * @summary This sets all the profile options to the defaults recommended by Kameleo Team. Please consider providing Proxy settings to your profile.
     */
    public setRecommendedDefaults(): BuilderForCreateProfile {
        this.profileRequest.canvas = "intelligent";
        this.profileRequest.webgl = "off";
        this.profileRequest.webglMeta.value = "automatic";
        this.profileRequest.audio = "off";
        this.profileRequest.timezone.value = "automatic";
        this.profileRequest.geolocation.value = "automatic";
        this.profileRequest.webRtc.value = "automatic";
        this.profileRequest.fonts = "enabled";
        this.profileRequest.screen.value = "automatic";
        this.profileRequest.hardwareConcurrency = { value: "automatic", extra: undefined };
        this.profileRequest.deviceMemory = { value: "automatic", extra: undefined };
        this.profileRequest.launcher = "automatic";
        this.profileRequest.startPage = "about:newtab";

        return this;
    }

    private reset(baseProfileId: string): CreateProfileRequest {
        return {
            name: undefined as unknown as string,
            baseProfileId: baseProfileId,
            canvas: "off",
            webgl: "off",
            webglMeta: {
                value: "off",
                extra: undefined,
            },
            audio: "off",
            timezone: {
                value: "off",
                extra: undefined,
            },
            geolocation: {
                value: "off",
                extra: undefined,
            },
            proxy: {
                value: "none",
                extra: undefined,
            },
            webRtc: {
                value: "off",
                extra: undefined,
            },
            fonts: "disabled",
            screen: {
                value: "off",
                extra: undefined,
            },
            hardwareConcurrency: {
                value: "off",
                extra: undefined,
            },
            deviceMemory: {
                value: "off",
                extra: undefined,
            },
            passwordManager: "disabled",
        };
    }
}
