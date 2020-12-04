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
    Canvas
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

    public setCanvas(value: Canvas): BuilderForCreateProfile {
        this.profileRequest.canvas = value;

        return this;
    }

    public setWebgl(value: Value, options: WebglSpoofingOptions|undefined): BuilderForCreateProfile {
        this.profileRequest.webgl.value = value;
        this.profileRequest.webgl.extra = options;

        return this;
    }

    public setTimezone(value: Value1, options: string|undefined): BuilderForCreateProfile {
        this.profileRequest.timezone.value = value;
        this.profileRequest.timezone.extra = options;

        return this;
    }

    public setGeolocation(value: Value2, options: GeolocationSpoofingOptions|undefined): BuilderForCreateProfile {
        this.profileRequest.geolocation.value = value;
        this.profileRequest.geolocation.extra = options;

        return this;
    }

    public setProxy(value: Value3, options: Server|undefined): BuilderForCreateProfile {
        this.profileRequest.proxy.value = value;
        this.profileRequest.proxy.extra = options;

        return this;
    }

    public setWebRtc(value: Value2, options: WebRtcSpoofingOptions|undefined): BuilderForCreateProfile {
        this.profileRequest.webRtc.value = value;
        this.profileRequest.webRtc.extra = options;

        return this;
    }

    public setFonts(value: Value6, options: string[]|undefined): BuilderForCreateProfile {
        this.profileRequest.fonts.value = value;
        this.profileRequest.fonts.extra = options;

        return this;
    }

    public setPlugins(value: Value6, options: string[]|undefined): BuilderForCreateProfile {
        this.profileRequest.plugins.value = value;
        this.profileRequest.plugins.extra = options;

        return this;
    }

    public setStartPage(value: string): BuilderForCreateProfile {
        this.profileRequest.startPage = value;

        return this;
    }

    public setScreen(value: Value1, options: string|undefined): BuilderForCreateProfile {
        this.profileRequest.screen.value = value;
        this.profileRequest.screen.extra = options;

        return this;
    }

    public setExtensions(absolutePaths: string[]): BuilderForCreateProfile {
        this.profileRequest.extensions = absolutePaths;

        return this;
    }

    public setNotes(notes: string): BuilderForCreateProfile {
        this.profileRequest.notes = notes;

        return this;
    }

    public setLauncher(browserLauncher: string): BuilderForCreateProfile {
        this.profileRequest.launcher = browserLauncher;

        return this;
    }

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
        };
    }
}
