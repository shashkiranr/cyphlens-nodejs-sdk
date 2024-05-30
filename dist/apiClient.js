import { Environment } from "./configuration";
import axios from 'axios';
export class ApiClient {
    _apiClient;
    // private static _apiClient: Readonly<Axios> | undefined;
    // private _clientId: string;
    // private _clientSecret: string;
    config;
    // public config: Configuration | undefined;
    constructor(clientId, clientSecret, configuration) {
        this.config = configuration;
        // cannot use await in constructor and ignoring the void output
        this.init(clientId, clientSecret, configuration);
        // return (async (): Promise<ApiClient> => {
        //     this.config = configuration;
        //     let accessToken: string;
        //     accessToken = configuration.environment === Environment.Testing ? '' : await this._getAccessToken(clientId, clientSecret, configuration);
        //
        //     // Constructors return `this` implicitly, but this is an IIFE, so
        //     // return `this` explicitly (else we'd return an empty object).
        //     this._apiClient = axios.create({
        //         baseURL: configuration.baseUrl,
        //         timeout: configuration.timeout,
        //         headers: {'x-access-token': accessToken},
        //         responseType: 'json',
        //     });
        //
        //     return this
        // })() as unknown as ApiClient;
    }
    async init(clientId, clientSecret, config) {
        let accessToken;
        accessToken = config.environment === Environment.Testing ? '' : await this._getAccessToken(clientId, clientSecret, config);
        this._apiClient = axios.create({
            baseURL: config.baseUrl,
            timeout: config.timeout,
            headers: { 'x-access-token': accessToken },
            responseType: 'json',
        });
    }
    async _getAccessToken(clientId, clientSecret, config) {
        return await axios.get("/getAccessToken", {
            baseURL: config.baseUrl,
            timeout: config.timeout,
            headers: { 'x-client-id': clientId, 'x-client-secret': clientSecret }
        }).then(value => {
            return value.data['accessToken'];
        }).catch((error => {
            throw 'Unable to get access token.' + error.toString();
        }));
    }
    async guard() {
        if (this._apiClient == undefined) {
            await new Promise(f => setTimeout(f, 2000));
            if (this._apiClient == undefined) {
                throw 'Api Client is undefined. Please call build';
            }
        }
    }
    async get(path, headers) {
        await this.guard();
        return this._apiClient.get(path, { headers: headers }).catch((er) => {
            throw er;
        });
    }
    async post(path, data, headers) {
        await this.guard();
        return this._apiClient.post(path, data, { headers: headers }).catch((er) => {
            throw er;
        });
    }
}
//# sourceMappingURL=apiClient.js.map