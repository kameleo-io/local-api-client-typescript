import * as coreClient from "@azure/core-client";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  KameleoLocalApiClientOptionalParams,
  GetBaseProfileSearchParametersOptionalParams,
  GetBaseProfileSearchParametersResponse,
  SearchBaseProfilesOptionalParams,
  SearchBaseProfilesResponse,
  ListCookiesOptionalParams,
  ListCookiesResponse,
  AddCookiesOptionalParams,
  AddCookiesResponse,
  DeleteCookiesOptionalParams,
  HealthcheckOptionalParams,
  GetUserInfoOptionalParams,
  GetUserInfoResponse,
  TerminateApplicationOptionalParams,
  ListProfilesOptionalParams,
  ListProfilesResponse,
  CreateProfileOptionalParams,
  CreateProfileResponse,
  UpdateProfileOptionalParams,
  UpdateProfileResponse,
  ReadProfileOptionalParams,
  ReadProfileResponse,
  DeleteProfileOptionalParams,
  GetProfileStatusOptionalParams,
  GetProfileStatusResponse,
  StartProfileOptionalParams,
  StartProfileResponse,
  StartProfileWithOptionsOptionalParams,
  StartProfileWithOptionsResponse,
  StopProfileOptionalParams,
  StopProfileResponse,
  ExportProfileOptionalParams,
  ExportProfileResponse,
  DuplicateProfileOptionalParams,
  DuplicateProfileResponse,
  ImportProfileOptionalParams,
  ImportProfileResponse,
  UpgradeProfileOptionalParams,
  UpgradeProfileResponse
} from "./models";

export class KameleoLocalApiClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the KameleoLocalApiClient class.
   * @param options The parameter options
   */
  constructor(options?: KameleoLocalApiClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: KameleoLocalApiClientOptionalParams = { requestContentType: "application/json; charset=utf-8", allowInsecureConnection: true, retryOptions: { maxRetries: 0 } };

    const packageDetails = `azsdk-js-kameleoLocalApiClient/3.1.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint: options.endpoint ?? options.baseUri ?? "http://localhost:5050"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://localhost:5050";
  }

  /**
   * Retrieves the available filtering options for base profiles, including device types, operating
   * system families, browser products, and languages. This enables you to refine the selection, for
   * example, to see which languages are available for profiles using Windows with Chrome.
   * @param options The options parameters.
   */
  getBaseProfileSearchParameters(
    options?: GetBaseProfileSearchParametersOptionalParams
  ): Promise<GetBaseProfileSearchParametersResponse> {
    return this.sendOperationRequest(
      { options },
      getBaseProfileSearchParametersOperationSpec
    );
  }

  /**
   * Retrieves a set of 25 base profiles based on specified criteria, with the most recent browser
   * versions at the beginning of the list. Note that calling this method multiple times will return
   * different sets of base profiles.
   * @param options The options parameters.
   */
  searchBaseProfiles(
    options?: SearchBaseProfilesOptionalParams
  ): Promise<SearchBaseProfilesResponse> {
    return this.sendOperationRequest(
      { options },
      searchBaseProfilesOperationSpec
    );
  }

  /**
   * Retrieves the list of cookies stored in the profile's browser. Note that this list does not include
   * session cookies, which are not persisted between browser launches.
   * @param guid The unique identifier of the profile
   * @param options The options parameters.
   */
  listCookies(
    guid: string,
    options?: ListCookiesOptionalParams
  ): Promise<ListCookiesResponse> {
    return this.sendOperationRequest(
      { guid, options },
      listCookiesOperationSpec
    );
  }

  /**
   * Adds a list of cookies to the profile, allowing you to inject cookies before starting the profile.
   * If cookies already exist for a domain, they will be replaced with the new ones.
   * @param guid The unique identifier of the profile
   * @param options The options parameters.
   */
  addCookies(
    guid: string,
    options?: AddCookiesOptionalParams
  ): Promise<AddCookiesResponse> {
    return this.sendOperationRequest(
      { guid, options },
      addCookiesOperationSpec
    );
  }

  /**
   * Deletes all the cookies stored in the profile, which will likely log the profile out of all
   * websites.
   * @param guid The unique identifier of the profile
   * @param options The options parameters.
   */
  deleteCookies(
    guid: string,
    options?: DeleteCookiesOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { guid, options },
      deleteCookiesOperationSpec
    );
  }

  /**
   * Health check request to test if Kameleo has been started and accepting connections.
   * @param options The options parameters.
   */
  healthcheck(options?: HealthcheckOptionalParams): Promise<void> {
    return this.sendOperationRequest({ options }, healthcheckOperationSpec);
  }

  /**
   * Provides information about the user.
   * @param options The options parameters.
   */
  getUserInfo(
    options?: GetUserInfoOptionalParams
  ): Promise<GetUserInfoResponse> {
    return this.sendOperationRequest({ options }, getUserInfoOperationSpec);
  }

  /**
   * Terminates the Kameleo session by deauthenticating and exiting the CLI. It is important to call it
   * after operating with Kameleo, so other users of the team account won't be logged out.
   * @param options The options parameters.
   */
  terminateApplication(
    options?: TerminateApplicationOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { options },
      terminateApplicationOperationSpec
    );
  }

  /**
   * Gets a list of the profiles that are loaded in the current workspace.
   * @param options The options parameters.
   */
  listProfiles(
    options?: ListProfilesOptionalParams
  ): Promise<ListProfilesResponse> {
    return this.sendOperationRequest({ options }, listProfilesOperationSpec);
  }

  /**
   * Creates a new profile based on a selected BaseProfile and inputs.
   * @param options The options parameters.
   */
  createProfile(
    options?: CreateProfileOptionalParams
  ): Promise<CreateProfileResponse> {
    return this.sendOperationRequest({ options }, createProfileOperationSpec);
  }

  /**
   * Updates profile settings.
   * @param guid The unique identifier of the profile
   * @param options The options parameters.
   */
  updateProfile(
    guid: string,
    options?: UpdateProfileOptionalParams
  ): Promise<UpdateProfileResponse> {
    return this.sendOperationRequest(
      { guid, options },
      updateProfileOperationSpec
    );
  }

  /**
   * Gets the profile with the specified ID from the current workspace. On startup, Kameleo will
   * automatically scan and load profiles stored in your workspace folder.
   * @param guid The unique identifier of the profile
   * @param options The options parameters.
   */
  readProfile(
    guid: string,
    options?: ReadProfileOptionalParams
  ): Promise<ReadProfileResponse> {
    return this.sendOperationRequest(
      { guid, options },
      readProfileOperationSpec
    );
  }

  /**
   * Irreversibly deletes a profile from the current workspace, freeing up disk space and removing all
   * associated data. It is recommended to create a backup using the export function before deleting a
   * profile, as this operation is permanent and can result in data loss.
   * @param guid The unique identifier of the profile
   * @param options The options parameters.
   */
  deleteProfile(
    guid: string,
    options?: DeleteProfileOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { guid, options },
      deleteProfileOperationSpec
    );
  }

  /**
   * Returns the current status information about a profile, including its save state, lifetime state,
   * and the connection port for profiles using an external spoofing engine.
   * @param guid The unique identifier of the profile
   * @param options The options parameters.
   */
  getProfileStatus(
    guid: string,
    options?: GetProfileStatusOptionalParams
  ): Promise<GetProfileStatusResponse> {
    return this.sendOperationRequest(
      { guid, options },
      getProfileStatusOperationSpec
    );
  }

  /**
   * Starts the selected profile by transitioning its status to 'starting', launching the browser engine
   * associated with the profile, and then changing its status to 'running'. If there is an error during
   * start up, it will be 'terminated'. You can use the launcher property to override the browser engine
   * before the first start.
   * @param guid The unique identifier of the profile
   * @param options The options parameters.
   */
  startProfile(
    guid: string,
    options?: StartProfileOptionalParams
  ): Promise<StartProfileResponse> {
    return this.sendOperationRequest(
      { guid, options },
      startProfileOperationSpec
    );
  }

  /**
   * Starts the selected profile with additional command line arguments or browser profile options. The
   * browser engine associated with the profile is launched, and then the profile's status is changed to
   * 'running'. If there is an error during start-up, it will be 'terminated'. You can use the launcher
   * property to override the browser engine before the first start.
   * @param guid The unique identifier of the profile
   * @param options The options parameters.
   */
  startProfileWithOptions(
    guid: string,
    options?: StartProfileWithOptionsOptionalParams
  ): Promise<StartProfileWithOptionsResponse> {
    return this.sendOperationRequest(
      { guid, options },
      startProfileWithOptionsOperationSpec
    );
  }

  /**
   * Stops the selected profile and optionally releases resources. The browser engine (desktop browsers
   * or external spoofing engine) associated with the profile is closed, and the profile's status is
   * changed to 'terminated'.
   * @param guid The unique identifier of the profile
   * @param options The options parameters.
   */
  stopProfile(
    guid: string,
    options?: StopProfileOptionalParams
  ): Promise<StopProfileResponse> {
    return this.sendOperationRequest(
      { guid, options },
      stopProfileOperationSpec
    );
  }

  /**
   * Exports a profile to a file, creating a .kameleo file at the specified location. This file
   * encapsulates everything about the profile including settings, browsing data, cookies, history,
   * bookmarks, and any installed extensions/addons. This allows for the profile to be loaded again at a
   * later time, and it can also be loaded into a different Kameleo instance.
   * @param guid The unique identifier of the profile
   * @param options The options parameters.
   */
  exportProfile(
    guid: string,
    options?: ExportProfileOptionalParams
  ): Promise<ExportProfileResponse> {
    return this.sendOperationRequest(
      { guid, options },
      exportProfileOperationSpec
    );
  }

  /**
   * Creates a copy of the loaded profile, which is saved to the workspace on the filesystem. The
   * duplicated profile will have a new ID, but will retain all the settings, browsing data, cookies,
   * history, bookmarks, and installed extensions of the original profile.
   * @param guid The unique identifier of the profile
   * @param options The options parameters.
   */
  duplicateProfile(
    guid: string,
    options?: DuplicateProfileOptionalParams
  ): Promise<DuplicateProfileResponse> {
    return this.sendOperationRequest(
      { guid, options },
      duplicateProfileOperationSpec
    );
  }

  /**
   * Imports a profile from a .kameleo file, effectively recreating the profile with all its attributes,
   * including settings, browsing data, cookies, history, bookmarks, and any installed extensions/addons.
   * If the profile is already loaded, the import process will fail.
   * @param options The options parameters.
   */
  importProfile(
    options?: ImportProfileOptionalParams
  ): Promise<ImportProfileResponse> {
    return this.sendOperationRequest({ options }, importProfileOperationSpec);
  }

  /**
   * Upgrades the profile to the most recent browser version available from the server, tailored to the
   * profile's current device, browser, operating system, and language settings. Note that upgrading a
   * profile will alter its browser fingerprint.
   * @param guid
   * @param options The options parameters.
   */
  upgradeProfile(
    guid: string,
    options?: UpgradeProfileOptionalParams
  ): Promise<UpgradeProfileResponse> {
    return this.sendOperationRequest(
      { guid, options },
      upgradeProfileOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getBaseProfileSearchParametersOperationSpec: coreClient.OperationSpec = {
  path: "/base-profile-search-parameters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseProfileSearchParameters
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  queryParameters: [
    Parameters.deviceType,
    Parameters.osFamily,
    Parameters.browserProduct,
    Parameters.language
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const searchBaseProfilesOperationSpec: coreClient.OperationSpec = {
  path: "/base-profiles",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "BaseProfilePreview" }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  queryParameters: [
    Parameters.deviceType,
    Parameters.osFamily,
    Parameters.browserProduct,
    Parameters.language
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const listCookiesOperationSpec: coreClient.OperationSpec = {
  path: "/profiles/{guid}/cookies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "BrowserCookie" } }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  urlParameters: [Parameters.$host, Parameters.guid],
  headerParameters: [Parameters.accept],
  serializer
};
const addCookiesOperationSpec: coreClient.OperationSpec = {
  path: "/profiles/{guid}/cookies",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "BrowserCookie" } }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host, Parameters.guid],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteCookiesOperationSpec: coreClient.OperationSpec = {
  path: "/profiles/{guid}/cookies",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  urlParameters: [Parameters.$host, Parameters.guid],
  headerParameters: [Parameters.accept],
  serializer
};
const healthcheckOperationSpec: coreClient.OperationSpec = {
  path: "/general/healthcheck",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getUserInfoOperationSpec: coreClient.OperationSpec = {
  path: "/general/user-info",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserInfoResponse
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const terminateApplicationOperationSpec: coreClient.OperationSpec = {
  path: "/general/terminate",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const listProfilesOperationSpec: coreClient.OperationSpec = {
  path: "/profiles",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ProfilePreview" } }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const createProfileOperationSpec: coreClient.OperationSpec = {
  path: "/profiles/new",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ProfileResponse
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateProfileOperationSpec: coreClient.OperationSpec = {
  path: "/profiles/{guid}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProfileResponse
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host, Parameters.guid],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const readProfileOperationSpec: coreClient.OperationSpec = {
  path: "/profiles/{guid}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProfileResponse
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  urlParameters: [Parameters.$host, Parameters.guid],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteProfileOperationSpec: coreClient.OperationSpec = {
  path: "/profiles/{guid}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  urlParameters: [Parameters.$host, Parameters.guid],
  headerParameters: [Parameters.accept],
  serializer
};
const getProfileStatusOperationSpec: coreClient.OperationSpec = {
  path: "/profiles/{guid}/status",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StatusResponse
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  urlParameters: [Parameters.$host, Parameters.guid],
  headerParameters: [Parameters.accept],
  serializer
};
const startProfileOperationSpec: coreClient.OperationSpec = {
  path: "/profiles/{guid}/start",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StatusResponse
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  urlParameters: [Parameters.$host, Parameters.guid],
  headerParameters: [Parameters.accept],
  serializer
};
const startProfileWithOptionsOperationSpec: coreClient.OperationSpec = {
  path: "/profiles/{guid}/start",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.StatusResponse
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.$host, Parameters.guid],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const stopProfileOperationSpec: coreClient.OperationSpec = {
  path: "/profiles/{guid}/stop",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StatusResponse
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  urlParameters: [Parameters.$host, Parameters.guid],
  headerParameters: [Parameters.accept],
  serializer
};
const exportProfileOperationSpec: coreClient.OperationSpec = {
  path: "/profiles/{guid}/export",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ProfileResponse
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  requestBody: Parameters.body4,
  urlParameters: [Parameters.$host, Parameters.guid],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const duplicateProfileOperationSpec: coreClient.OperationSpec = {
  path: "/profiles/{guid}/duplicate",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProfileResponse
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  urlParameters: [Parameters.$host, Parameters.guid],
  headerParameters: [Parameters.accept],
  serializer
};
const importProfileOperationSpec: coreClient.OperationSpec = {
  path: "/profiles/import",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ProfileResponse
    },
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  requestBody: Parameters.body5,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const upgradeProfileOperationSpec: coreClient.OperationSpec = {
  path: "/profiles/{guid}/upgrade",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProfileResponse
    },
    204: {},
    409: {},
    default: {
      bodyMapper: Mappers.ProblemResponse
    }
  },
  urlParameters: [Parameters.$host, Parameters.guid],
  headerParameters: [Parameters.accept],
  serializer
};

