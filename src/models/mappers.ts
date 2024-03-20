import * as coreClient from "@azure/core-client";

export const BaseProfileSearchParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BaseProfileSearchParameters",
    modelProperties: {
      deviceTypes: {
        serializedName: "deviceTypes",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      osFamilies: {
        serializedName: "osFamilies",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      browserProducts: {
        serializedName: "browserProducts",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      languages: {
        serializedName: "languages",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ProblemResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProblemResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "Number"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Sequence", element: { type: { name: "String" } } }
          }
        }
      }
    }
  }
};

export const BaseProfilePreview: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BaseProfilePreview",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      device: {
        serializedName: "device",
        type: {
          name: "Composite",
          className: "Device"
        }
      },
      os: {
        serializedName: "os",
        type: {
          name: "Composite",
          className: "Os"
        }
      },
      browser: {
        serializedName: "browser",
        type: {
          name: "Composite",
          className: "Browser"
        }
      },
      language: {
        serializedName: "language",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Device: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Device",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Os: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Os",
    modelProperties: {
      family: {
        serializedName: "family",
        required: true,
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        required: true,
        type: {
          name: "String"
        }
      },
      platform: {
        serializedName: "platform",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Browser: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Browser",
    modelProperties: {
      product: {
        serializedName: "product",
        required: true,
        type: {
          name: "String"
        }
      },
      major: {
        serializedName: "major",
        required: true,
        type: {
          name: "Number"
        }
      },
      version: {
        serializedName: "version",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BrowserCookie: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BrowserCookie",
    modelProperties: {
      domain: {
        serializedName: "domain",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      path: {
        serializedName: "path",
        required: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      },
      hostOnly: {
        serializedName: "hostOnly",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      httpOnly: {
        serializedName: "httpOnly",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      secure: {
        serializedName: "secure",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      sameSite: {
        serializedName: "sameSite",
        required: true,
        type: {
          name: "String"
        }
      },
      expirationDate: {
        serializedName: "expirationDate",
        type: {
          name: "Number"
        }
      },
      session: {
        serializedName: "session",
        type: {
          name: "Boolean"
        }
      },
      storeId: {
        serializedName: "storeId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CookieRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CookieRequest",
    modelProperties: {
      domain: {
        constraints: {
          MinLength: 1
        },
        serializedName: "domain",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      path: {
        constraints: {
          MinLength: 1
        },
        serializedName: "path",
        required: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      },
      hostOnly: {
        serializedName: "hostOnly",
        type: {
          name: "Boolean"
        }
      },
      httpOnly: {
        serializedName: "httpOnly",
        type: {
          name: "Boolean"
        }
      },
      secure: {
        serializedName: "secure",
        type: {
          name: "Boolean"
        }
      },
      sameSite: {
        serializedName: "sameSite",
        type: {
          name: "String"
        }
      },
      expirationDate: {
        serializedName: "expirationDate",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const UserInfoResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserInfoResponse",
    modelProperties: {
      userId: {
        serializedName: "userId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      email: {
        serializedName: "email",
        required: true,
        type: {
          name: "String"
        }
      },
      emailConfirmed: {
        serializedName: "emailConfirmed",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      subscriptionEnd: {
        serializedName: "subscriptionEnd",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      capabilities: {
        serializedName: "capabilities",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      gracePeriod: {
        serializedName: "gracePeriod",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      lastAppLogin: {
        serializedName: "lastAppLogin",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      workspaceFolder: {
        serializedName: "workspaceFolder",
        required: true,
        type: {
          name: "String"
        }
      },
      localStorage: {
        serializedName: "localStorage",
        type: {
          name: "Composite",
          className: "QuotaStatistics"
        }
      },
      cloudStorage: {
        serializedName: "cloudStorage",
        type: {
          name: "Composite",
          className: "QuotaStatistics"
        }
      }
    }
  }
};

export const QuotaStatistics: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QuotaStatistics",
    modelProperties: {
      currentUsage: {
        serializedName: "currentUsage",
        required: true,
        type: {
          name: "Number"
        }
      },
      maximumLimit: {
        serializedName: "maximumLimit",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ProfilePreview: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProfilePreview",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      proxy: {
        serializedName: "proxy",
        type: {
          name: "Composite",
          className: "ProxyConnectionTypeServerMultiLevelChoice"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      device: {
        serializedName: "device",
        type: {
          name: "Composite",
          className: "Device"
        }
      },
      os: {
        serializedName: "os",
        type: {
          name: "Composite",
          className: "Os"
        }
      },
      browser: {
        serializedName: "browser",
        type: {
          name: "Composite",
          className: "Browser"
        }
      },
      language: {
        serializedName: "language",
        required: true,
        type: {
          name: "String"
        }
      },
      launcher: {
        serializedName: "launcher",
        required: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Composite",
          className: "StatusResponse"
        }
      },
      storage: {
        serializedName: "storage",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyConnectionTypeServerMultiLevelChoice: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyConnectionTypeServerMultiLevelChoice",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      },
      extra: {
        serializedName: "extra",
        type: {
          name: "Composite",
          className: "Server"
        }
      }
    }
  }
};

export const Server: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Server",
    modelProperties: {
      host: {
        serializedName: "host",
        required: true,
        type: {
          name: "String"
        }
      },
      port: {
        serializedName: "port",
        required: true,
        type: {
          name: "Number"
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      secret: {
        serializedName: "secret",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StatusResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StatusResponse",
    modelProperties: {
      persistenceState: {
        serializedName: "persistenceState",
        required: true,
        type: {
          name: "String"
        }
      },
      lifetimeState: {
        serializedName: "lifetimeState",
        required: true,
        type: {
          name: "String"
        }
      },
      externalSpoofingEnginePort: {
        serializedName: "externalSpoofingEnginePort",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CreateProfileRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateProfileRequest",
    modelProperties: {
      baseProfileId: {
        constraints: {
          MinLength: 1
        },
        serializedName: "baseProfileId",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      canvas: {
        serializedName: "canvas",
        required: true,
        type: {
          name: "String"
        }
      },
      webgl: {
        serializedName: "webgl",
        required: true,
        type: {
          name: "String"
        }
      },
      webglMeta: {
        serializedName: "webglMeta",
        type: {
          name: "Composite",
          className:
            "WebglMetaSpoofingTypeWebglMetaSpoofingOptionsMultiLevelChoice"
        }
      },
      audio: {
        serializedName: "audio",
        required: true,
        type: {
          name: "String"
        }
      },
      timezone: {
        serializedName: "timezone",
        type: {
          name: "Composite",
          className: "TimezoneSpoofingTypeTimezoneMultiLevelChoice"
        }
      },
      geolocation: {
        serializedName: "geolocation",
        type: {
          name: "Composite",
          className:
            "GeolocationSpoofingTypeGeolocationSpoofingOptionsMultiLevelChoice"
        }
      },
      proxy: {
        serializedName: "proxy",
        type: {
          name: "Composite",
          className: "ProxyConnectionTypeServerMultiLevelChoice"
        }
      },
      webRtc: {
        serializedName: "webRtc",
        type: {
          name: "Composite",
          className: "WebRtcSpoofingTypeWebRtcSpoofingOptionsMultiLevelChoice"
        }
      },
      fonts: {
        serializedName: "fonts",
        type: {
          name: "Composite",
          className: "FontSpoofingTypeFontIListMultiLevelChoice"
        }
      },
      screen: {
        serializedName: "screen",
        type: {
          name: "Composite",
          className: "ScreenSpoofingTypeScreenSizeMultiLevelChoice"
        }
      },
      hardwareConcurrency: {
        serializedName: "hardwareConcurrency",
        type: {
          name: "Composite",
          className:
            "HardwareConcurrencySpoofingTypeInt32NullableMultiLevelChoice"
        }
      },
      deviceMemory: {
        serializedName: "deviceMemory",
        type: {
          name: "Composite",
          className: "DeviceMemorySpoofingTypeDoubleNullableMultiLevelChoice"
        }
      },
      startPage: {
        serializedName: "startPage",
        type: {
          name: "String"
        }
      },
      passwordManager: {
        serializedName: "passwordManager",
        required: true,
        type: {
          name: "String"
        }
      },
      extensions: {
        serializedName: "extensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      notes: {
        serializedName: "notes",
        type: {
          name: "String"
        }
      },
      storage: {
        serializedName: "storage",
        type: {
          name: "String"
        }
      },
      launcher: {
        serializedName: "launcher",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WebglMetaSpoofingTypeWebglMetaSpoofingOptionsMultiLevelChoice: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebglMetaSpoofingTypeWebglMetaSpoofingOptionsMultiLevelChoice",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      },
      extra: {
        serializedName: "extra",
        type: {
          name: "Composite",
          className: "WebglMetaSpoofingOptions"
        }
      }
    }
  }
};

export const WebglMetaSpoofingOptions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebglMetaSpoofingOptions",
    modelProperties: {
      vendor: {
        serializedName: "vendor",
        type: {
          name: "String"
        }
      },
      renderer: {
        serializedName: "renderer",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TimezoneSpoofingTypeTimezoneMultiLevelChoice: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TimezoneSpoofingTypeTimezoneMultiLevelChoice",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      },
      extra: {
        serializedName: "extra",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeolocationSpoofingTypeGeolocationSpoofingOptionsMultiLevelChoice: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "GeolocationSpoofingTypeGeolocationSpoofingOptionsMultiLevelChoice",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      },
      extra: {
        serializedName: "extra",
        type: {
          name: "Composite",
          className: "GeolocationSpoofingOptions"
        }
      }
    }
  }
};

export const GeolocationSpoofingOptions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeolocationSpoofingOptions",
    modelProperties: {
      latitude: {
        serializedName: "latitude",
        required: true,
        type: {
          name: "Number"
        }
      },
      longitude: {
        serializedName: "longitude",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const WebRtcSpoofingTypeWebRtcSpoofingOptionsMultiLevelChoice: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebRtcSpoofingTypeWebRtcSpoofingOptionsMultiLevelChoice",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      },
      extra: {
        serializedName: "extra",
        type: {
          name: "Composite",
          className: "WebRtcSpoofingOptions"
        }
      }
    }
  }
};

export const WebRtcSpoofingOptions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebRtcSpoofingOptions",
    modelProperties: {
      privateIp: {
        serializedName: "privateIp",
        required: true,
        type: {
          name: "String"
        }
      },
      publicIp: {
        serializedName: "publicIp",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FontSpoofingTypeFontIListMultiLevelChoice: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FontSpoofingTypeFontIListMultiLevelChoice",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      },
      extra: {
        serializedName: "extra",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ScreenSpoofingTypeScreenSizeMultiLevelChoice: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ScreenSpoofingTypeScreenSizeMultiLevelChoice",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      },
      extra: {
        serializedName: "extra",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HardwareConcurrencySpoofingTypeInt32NullableMultiLevelChoice: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "HardwareConcurrencySpoofingTypeInt32NullableMultiLevelChoice",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      },
      extra: {
        serializedName: "extra",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DeviceMemorySpoofingTypeDoubleNullableMultiLevelChoice: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeviceMemorySpoofingTypeDoubleNullableMultiLevelChoice",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      },
      extra: {
        serializedName: "extra",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ProfileResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProfileResponse",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      createdAt: {
        serializedName: "createdAt",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      baseProfile: {
        serializedName: "baseProfile",
        type: {
          name: "Composite",
          className: "BaseProfile"
        }
      },
      canvas: {
        serializedName: "canvas",
        required: true,
        type: {
          name: "String"
        }
      },
      webgl: {
        serializedName: "webgl",
        required: true,
        type: {
          name: "String"
        }
      },
      webglMeta: {
        serializedName: "webglMeta",
        type: {
          name: "Composite",
          className:
            "WebglMetaSpoofingTypeWebglMetaSpoofingOptionsMultiLevelChoice"
        }
      },
      audio: {
        serializedName: "audio",
        required: true,
        type: {
          name: "String"
        }
      },
      timezone: {
        serializedName: "timezone",
        type: {
          name: "Composite",
          className: "TimezoneSpoofingTypeTimezoneMultiLevelChoice"
        }
      },
      geolocation: {
        serializedName: "geolocation",
        type: {
          name: "Composite",
          className:
            "GeolocationSpoofingTypeGeolocationSpoofingOptionsMultiLevelChoice"
        }
      },
      proxy: {
        serializedName: "proxy",
        type: {
          name: "Composite",
          className: "ProxyConnectionTypeServerMultiLevelChoice"
        }
      },
      webRtc: {
        serializedName: "webRtc",
        type: {
          name: "Composite",
          className: "WebRtcSpoofingTypeWebRtcSpoofingOptionsMultiLevelChoice"
        }
      },
      fonts: {
        serializedName: "fonts",
        type: {
          name: "Composite",
          className: "FontSpoofingTypeFontIListMultiLevelChoice"
        }
      },
      screen: {
        serializedName: "screen",
        type: {
          name: "Composite",
          className: "ScreenSpoofingTypeScreenSizeMultiLevelChoice"
        }
      },
      hardwareConcurrency: {
        serializedName: "hardwareConcurrency",
        type: {
          name: "Composite",
          className:
            "HardwareConcurrencySpoofingTypeInt32NullableMultiLevelChoice"
        }
      },
      deviceMemory: {
        serializedName: "deviceMemory",
        type: {
          name: "Composite",
          className: "DeviceMemorySpoofingTypeDoubleNullableMultiLevelChoice"
        }
      },
      startPage: {
        serializedName: "startPage",
        required: true,
        type: {
          name: "String"
        }
      },
      passwordManager: {
        serializedName: "passwordManager",
        required: true,
        type: {
          name: "String"
        }
      },
      extensions: {
        serializedName: "extensions",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      notes: {
        serializedName: "notes",
        required: true,
        type: {
          name: "String"
        }
      },
      launcher: {
        serializedName: "launcher",
        required: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Composite",
          className: "StatusResponse"
        }
      },
      storage: {
        serializedName: "storage",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BaseProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BaseProfile",
    modelProperties: {
      version: {
        serializedName: "version",
        required: true,
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      device: {
        serializedName: "device",
        type: {
          name: "Composite",
          className: "Device"
        }
      },
      os: {
        serializedName: "os",
        type: {
          name: "Composite",
          className: "Os"
        }
      },
      browser: {
        serializedName: "browser",
        type: {
          name: "Composite",
          className: "Browser"
        }
      },
      language: {
        serializedName: "language",
        required: true,
        type: {
          name: "String"
        }
      },
      resolution: {
        serializedName: "resolution",
        required: true,
        type: {
          name: "String"
        }
      },
      fonts: {
        serializedName: "fonts",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      webglMeta: {
        serializedName: "webglMeta",
        type: {
          name: "Composite",
          className: "WebglMeta"
        }
      }
    }
  }
};

export const WebglMeta: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebglMeta",
    modelProperties: {
      vendor: {
        serializedName: "vendor",
        required: true,
        type: {
          name: "String"
        }
      },
      renderer: {
        serializedName: "renderer",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateProfileRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateProfileRequest",
    modelProperties: {
      canvas: {
        serializedName: "canvas",
        required: true,
        type: {
          name: "String"
        }
      },
      webgl: {
        serializedName: "webgl",
        required: true,
        type: {
          name: "String"
        }
      },
      webglMeta: {
        serializedName: "webglMeta",
        type: {
          name: "Composite",
          className:
            "WebglMetaSpoofingTypeWebglMetaSpoofingOptionsMultiLevelChoice"
        }
      },
      audio: {
        serializedName: "audio",
        required: true,
        type: {
          name: "String"
        }
      },
      timezone: {
        serializedName: "timezone",
        type: {
          name: "Composite",
          className: "TimezoneSpoofingTypeTimezoneMultiLevelChoice"
        }
      },
      geolocation: {
        serializedName: "geolocation",
        type: {
          name: "Composite",
          className:
            "GeolocationSpoofingTypeGeolocationSpoofingOptionsMultiLevelChoice"
        }
      },
      proxy: {
        serializedName: "proxy",
        type: {
          name: "Composite",
          className: "ProxyConnectionTypeServerMultiLevelChoice"
        }
      },
      webRtc: {
        serializedName: "webRtc",
        type: {
          name: "Composite",
          className: "WebRtcSpoofingTypeWebRtcSpoofingOptionsMultiLevelChoice"
        }
      },
      fonts: {
        serializedName: "fonts",
        type: {
          name: "Composite",
          className: "FontSpoofingTypeFontIListMultiLevelChoice"
        }
      },
      screen: {
        serializedName: "screen",
        type: {
          name: "Composite",
          className: "ScreenSpoofingTypeScreenSizeMultiLevelChoice"
        }
      },
      hardwareConcurrency: {
        serializedName: "hardwareConcurrency",
        type: {
          name: "Composite",
          className:
            "HardwareConcurrencySpoofingTypeInt32NullableMultiLevelChoice"
        }
      },
      deviceMemory: {
        serializedName: "deviceMemory",
        type: {
          name: "Composite",
          className: "DeviceMemorySpoofingTypeDoubleNullableMultiLevelChoice"
        }
      },
      startPage: {
        serializedName: "startPage",
        type: {
          name: "String"
        }
      },
      passwordManager: {
        serializedName: "passwordManager",
        required: true,
        type: {
          name: "String"
        }
      },
      extensions: {
        serializedName: "extensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      notes: {
        serializedName: "notes",
        type: {
          name: "String"
        }
      },
      name: {
        constraints: {
          MinLength: 1
        },
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      storage: {
        serializedName: "storage",
        type: {
          name: "String"
        }
      },
      launcher: {
        serializedName: "launcher",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WebDriverSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebDriverSettings",
    modelProperties: {
      arguments: {
        serializedName: "arguments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      preferences: {
        serializedName: "preferences",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Preference"
            }
          }
        }
      },
      additionalOptions: {
        serializedName: "additionalOptions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Preference"
            }
          }
        }
      }
    }
  }
};

export const Preference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Preference",
    modelProperties: {
      key: {
        serializedName: "key",
        required: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ExportProfileRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExportProfileRequest",
    modelProperties: {
      path: {
        constraints: {
          MinLength: 1
        },
        serializedName: "path",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImportProfileRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImportProfileRequest",
    modelProperties: {
      path: {
        constraints: {
          MinLength: 1
        },
        serializedName: "path",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};
