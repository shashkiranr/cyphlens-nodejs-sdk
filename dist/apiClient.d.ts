import { Configuration } from "./configuration";
import { AxiosResponse } from 'axios';
export declare class ApiClient {
    private _apiClient;
    config: Configuration;
    constructor(clientId: string, clientSecret: string, configuration: Configuration);
    private init;
    private _getAccessToken;
    private guard;
    get(path: string, headers?: {}): Promise<AxiosResponse>;
    post(path: string, data?: {}, headers?: {}): Promise<AxiosResponse>;
}
