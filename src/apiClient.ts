import {Configuration, Environment} from "./configuration";
import axios, {Axios, AxiosResponse} from 'axios';


export class ApiClient {
    private _apiClient: Readonly<Axios> | undefined;
    // private static _apiClient: Readonly<Axios> | undefined;

    // private _clientId: string;
    // private _clientSecret: string;
    public config: Configuration;
    // public config: Configuration | undefined;

   constructor(clientId: string, clientSecret: string, configuration: Configuration) {
        this.config = configuration;
        // cannot use await in constructor and ignoring the void output
        this.init(clientId, clientSecret, configuration)
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

    private async init(clientId: string, clientSecret: string, config: Configuration){
        let accessToken: string;
        accessToken = config.environment === Environment.Testing ? '' : await this._getAccessToken(clientId, clientSecret, config);
            this._apiClient = axios.create({
                baseURL: config.baseUrl,
                timeout: config.timeout,
                headers: {'x-access-token': accessToken},
                responseType: 'json',
            });
    }

    private async _getAccessToken(clientId: string, clientSecret: string, config: Configuration) {
        return await axios.get("/getAccessToken", {
            baseURL: config.baseUrl,
            timeout: config.timeout,
            headers: {'x-client-id': clientId, 'x-client-secret': clientSecret}
        }).then(value => {
            return value.data['accessToken'];
        }).catch((error => {
            throw 'Unable to get access token.' + error.toString();
        }))
    }


    private async guard() {
        if (this._apiClient == undefined) {
            await new Promise(f => setTimeout(f, 2000));
            if (this._apiClient == undefined) {
                throw 'Api Client is undefined. Please call build'
            }
        }
    }


    // async get(path: string, headers?: {}): Promise<AxiosResponse> {
    //     await this.guard();
    //     return this._apiClient!.get(path, {headers: headers}).catch((er) => {
    //         throw er
    //     });
    // }

    async post(path: string, data?: {}, headers?: {},): Promise<AxiosResponse> {
        await this.guard();
        return this._apiClient!.post(path, data, {headers: headers}).catch((er) => {
            throw er
        });
    }

    // public async build(clientId: string, clientSecret: string, configuration: Configuration): Promise<ApiClient> {
    //     let accessToken: string;
    //     accessToken = this.config.environment === Environment.Testing ? '' : await this._getAccessToken(clientId, clientSecret, this.config);
    //     this._apiClient = axios.create({
    //         baseURL: this.config.baseUrl,
    //         timeout: this.config.timeout,
    //         headers: {'x-access-token': accessToken},
    //         responseType: 'json',
    //     })
    //     return new ApiClient(configuration);
    // }

    // private static async _getAccessToken(clientId: string, clientSecret: string, config: Configuration) {
    //     return await axios.get("/getAccessToken", {
    //         baseURL: config.baseUrl,
    //         timeout: config.timeout,
    //         headers: {'x-client-id': clientId, 'x-client-secret': clientSecret}
    //     }).then(value => {
    //         return value.data['accessToken'];
    //     }).catch((error => {
    //         throw 'Unable to get access token.' + error.toString();
    //     }))
    // }
    //
    // public static async build(clientId: string, clientSecret: string, config: Configuration): Promise<ApiClient> {
    //     let accessToken: string;
    //     accessToken = config.environment === Environment.Testing ? '' : await this._getAccessToken(clientId, clientSecret, config);
    //     this._apiClient = axios.create({
    //         baseURL: config.baseUrl,
    //         timeout: config.timeout,
    //         headers: {'x-access-token': accessToken},
    //         responseType: 'json',
    //     })
    //     return new ApiClient();
    //  }

}