/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";

const packageName = "local-api-client";
const packageVersion = "2.6.0";

export class LocalApiClientContext extends msRest.ServiceClient {

  /**
   * Initializes a new instance of the LocalApiClientContext class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.LocalApiClientOptions) {
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = msRest.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.baseUri = options.baseUri || this.baseUri || "http://localhost:5050";
    this.requestContentType = "application/json; charset=utf-8";
  }
}
