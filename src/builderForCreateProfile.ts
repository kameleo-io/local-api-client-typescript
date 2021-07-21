import {
    CreateProfileRequest,
    Value,
    WebglSpoofingOptions,
    Value1,
    Value2,
    Value3,
    GeolocationSpoofingOptions,
    Server,
    WebRtcSpoofingOptions,
    Value6,
    Canvas,
    PasswordManager1
} from './models';

export class BuilderForCreateProfile {
    private profileRequest: CreateProfileRequest;

    private constructor(baseProfileId: string) {
        this.profileRequest = this.reset(baseProfileId);
    }

    public static forBaseProfile(baseProfileId: string): BuilderForCreateProfile {
        return new BuilderForCreateProfile(baseProfileId);
    }

    public build(): CreateProfileRequest {
        const result = { ...this.profileRequest };
        this.profileRequest = this.reset(result.baseProfileId);

        return result;
    }

    /**
     * @summary <para>Tells the mode how the canvas will be spoofed. Possible values:</para>
     * <para>'noise': Add some noise to the Canvas generation.</para>
     * <para>'block': Completely block the 2D API.</para>
     * <para>'off': Turn off the spoofing, use the original settings.</para>
     */
    public setCanvas(value: Canvas): BuilderForCreateProfile {
        this.profileRequest.canvas = value;

        return this;
    }

    /**
     * @summary <para>Set the Webgl spoofing. Possible values:</para>
     * <para>'noise': Add some noise to the WebGL generation</para>
     * <para>'block': Completely block the 3D API</para>
     * <para>'off': Turn off the spoofing, use the original settings</para>
     */
    public setWebgl(value: Value, options: WebglSpoofingOptions|undefined): BuilderForCreateProfile {
        this.profileRequest.webgl.value = value;
        this.profileRequest.webgl.extra = options;

        return this;
    }

    /**
     * @summary <para>Tells the mode how the Timezone will be spoofed. Possble values:</para>
     * <para>'automatic': Timezone is automatically set by the IP</para>
     * <para>'manual': Timezone is manually overridden in the profile</para>
     * <para>'off': Turn off the spoofing, use the original settings</para>
     * @param options When the Timezone spoofing is set to manual the timezone in Iana format is required. For example: America/Grenada
     */
    public setTimezone(value: Value1, options: string|undefined): BuilderForCreateProfile {
        this.profileRequest.timezone.value = value;
        this.profileRequest.timezone.extra = options;

        return this;
    }

    /**
     * @summary <para>Tells the mode how the Geolocation will be spoofed. Possible values:</para>
     * <para>'automatic': Automatically set the values based on the IP address</para>
     * <para>'manual': Manually set the longitude and latitude in the profile</para>
     * <para>'block': Completely block the GeolocationAPI</para>
     * <para>'off': Turn off the spoofing, use the original settings</para>
     */
    public setGeolocation(value: Value2, options: GeolocationSpoofingOptions|undefined): BuilderForCreateProfile {
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
    public setProxy(value: Value3, options: Server|undefined): BuilderForCreateProfile {
        this.profileRequest.proxy.value = value;
        this.profileRequest.proxy.extra = options;

        return this;
    }

    /**
     * @summary <para>Tells the mode how the WebRTC will be spoofed. Possible values:</para>
     * <para>'automatic': Automatically set the webRTC public IP by the IP, and generates a random private IP like '2d2f78e7-1b1e-4345-a21b-07c904c98394.local'</para>
     * <para>'manual': Manually override the webRTC public IP and private IP in the profile</para>
     * <para>'block': Block the WebRTC functionality</para>
     * <para>'off': Turn off the spoofing, use the original settings</para>
     */
    public setWebRtc(value: Value2, options: WebRtcSpoofingOptions|undefined): BuilderForCreateProfile {
        this.profileRequest.webRtc.value = value;
        this.profileRequest.webRtc.extra = options;

        return this;
    }

    /**
     * @summary <para>Tells the mode how the Fonts will be spoofed. Possible values:</para>
     * <para>'enabled': Enable fonts spoofing. A list can be provided to override the fonts coming from the base profile.</para>
     * <para>'disable': Disable fonts spoofing.</para>
     */
    public setFonts(value: Value6, options: string[]|undefined): BuilderForCreateProfile {
        this.profileRequest.fonts.value = value;
        this.profileRequest.fonts.extra = options;

        return this;
    }

    /**
     * @summary <para>Tells the mode how the Plugins will be spoofed.</para>
     * <para>'enabled': Enable plugins spoofing. A list can be provided to EXCLUDE plugins from the plugins of the base profile.</para>
     * <para>'disabled': Disable plugins spoofing.</para>
     */
    public setPlugins(value: Value6, options: string[]|undefined): BuilderForCreateProfile {
        this.profileRequest.plugins.value = value;
        this.profileRequest.plugins.extra = options;

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
     public setPasswordManager(value: PasswordManager1): BuilderForCreateProfile {
        this.profileRequest.passwordManager = value;

        return this;
    }

    /**
     * @summary <para>Tells the mode how the screen will be spoofed. Possible values:</para>
     * <para>'automatic': Automatically override the screen resolution based on the Base Profile.</para>
     * <para>'manual': Manually override the screen resolution.</para>
     * <para>'off': Turn off the spoofing, use the original settings.</para>
     */
    public setScreen(value: Value1, options: string|undefined): BuilderForCreateProfile {
        this.profileRequest.screen.value = value;
        this.profileRequest.screen.extra = options;

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
     * @summary <para>The mode how the profile should be launched. It determines which browser to launch. This cannot be modified after creation. Possible values are:</para>
     * <para>'automatic': Automatically choose launcher based on DeviceType and BrowserProduct property.</para>
     * <para>'chrome': Forcefully start the profile in Chrome.</para>
     * <para>'chromium': Forcefully start the profile in Chromium.</para>
     * <para>'firefox': Forcefully start the profile in Firefox.</para>
     * <para>'edge': Forcefully start the profile in Edge.</para>
     * <para>'external': Only start the external spoofing engine and connect any browser manually. This is also used for Mobile Device spoofing.</para>
     */
    public setLauncher(browserLauncher: string): BuilderForCreateProfile {
        this.profileRequest.launcher = browserLauncher;

        return this;
    }

    /**
     * @summary This sets all the profile options to the defaults recommended by Kameleo Team. Please consider providing Proxy settings to your profile.
     */
    public setRecommendedDefaults(): BuilderForCreateProfile {
        this.profileRequest.canvas = "noise";
        this.profileRequest.webgl.value = "noise";
        this.profileRequest.timezone.value = "automatic";
        this.profileRequest.geolocation.value = "automatic";
        this.profileRequest.webRtc.value = "automatic";
        this.profileRequest.fonts.value = "enabled";
        this.profileRequest.plugins.value = "enabled";
        this.profileRequest.screen.value = "automatic";
        this.profileRequest.launcher = "automatic";

        return this;
    }

    private reset(baseProfileId: string): CreateProfileRequest {
        return {
            baseProfileId: baseProfileId,
            canvas: "off",
            webgl: {
                value: "off",
                extra: undefined,
            },
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
            fonts: {
                value: "disabled",
                extra: undefined,
            },
            plugins: {
                value: "disabled",
                extra: undefined,
            },
            screen: {
                value: "off",
                extra: undefined,
            },
            passwordManager: "disabled",
        };
    }
}
