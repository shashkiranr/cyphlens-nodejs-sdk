import { Environment } from "./configuration";
import { DEFAULT_CONFIGURATION } from "./defaultConfiguration";
import { ApiClient } from "./apiClient";
import { UserApi } from "./api/userApi";
import { ImageApi } from "./api/imageApi";
export class Client {
    _config;
    apiClient;
    userApi;
    imageApi;
    constructor(clientId, clientSecret, config) {
        //set the default configuration and update incoming configuration
        this._config = {
            ...DEFAULT_CONFIGURATION,
            ...config,
        };
        // get base url
        this._config = {
            ...this._config,
            baseUrl: getBaseUri(this._config),
        };
        // update user agent detail
        if (this._config.userAgentDetail == null) {
            this._config = {
                ...this._config,
                userAgentDetail: 'Cyphelens-SDK-Demo 0.00.001',
            };
        }
        // get the api client with
        this.apiClient = new ApiClient(clientId, clientSecret, this._config);
        // initiate api classes
        this.userApi = new UserApi(this.apiClient);
        this.imageApi = new ImageApi(this.apiClient);
    }
}
function getBaseUri(config) {
    if (config.environment === Environment.Production) {
        return 'https://api.cyphme.com/api/v1/business';
    }
    if (config.environment === Environment.Sandbox || config.environment === Environment.Testing) {
        return 'https://staging.cyphme.com/api/v1/business';
    }
    throw new Error('Could not get Base URL. Invalid environment.');
}
//# sourceMappingURL=client.js.map