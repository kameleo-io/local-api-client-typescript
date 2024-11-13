import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  UpdateFolderRequest as UpdateFolderRequestMapper,
  CreateFolderRequest as CreateFolderRequestMapper,
  AddProfileToFolderRequest as AddProfileToFolderRequestMapper,
  ShareGroupRequest as ShareGroupRequestMapper,
  CreateProfileRequest as CreateProfileRequestMapper,
  UpdateProfileRequest as UpdateProfileRequestMapper,
  WebDriverSettings as WebDriverSettingsMapper,
  ExportProfileRequest as ExportProfileRequestMapper,
  ImportProfileRequest as ImportProfileRequestMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const deviceType: OperationQueryParameter = {
  parameterPath: ["options", "deviceType"],
  mapper: {
    serializedName: "deviceType",
    type: {
      name: "String"
    }
  }
};

export const osFamily: OperationQueryParameter = {
  parameterPath: ["options", "osFamily"],
  mapper: {
    serializedName: "osFamily",
    type: {
      name: "String"
    }
  }
};

export const browserProduct: OperationQueryParameter = {
  parameterPath: ["options", "browserProduct"],
  mapper: {
    serializedName: "browserProduct",
    type: {
      name: "String"
    }
  }
};

export const language: OperationQueryParameter = {
  parameterPath: ["options", "language"],
  mapper: {
    serializedName: "language",
    type: {
      name: "String"
    }
  }
};

export const guid: OperationURLParameter = {
  parameterPath: "guid",
  mapper: {
    serializedName: "guid",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: {
    serializedName: "body",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "CookieRequest"
        }
      }
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UpdateFolderRequestMapper
};

export const includeProfiles: OperationQueryParameter = {
  parameterPath: ["options", "includeProfiles"],
  mapper: {
    defaultValue: false,
    serializedName: "includeProfiles",
    type: {
      name: "Boolean"
    }
  }
};

export const body2: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: CreateFolderRequestMapper
};

export const body3: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: AddProfileToFolderRequestMapper
};

export const profileId: OperationURLParameter = {
  parameterPath: "profileId",
  mapper: {
    serializedName: "profileId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const body4: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: ShareGroupRequestMapper
};

export const body5: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: CreateProfileRequestMapper
};

export const body6: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UpdateProfileRequestMapper
};

export const body7: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: WebDriverSettingsMapper
};

export const body8: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: ExportProfileRequestMapper
};

export const body9: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: ImportProfileRequestMapper
};
