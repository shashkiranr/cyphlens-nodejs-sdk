import {ApiClient} from "../apiClient";

export class BaseApi {
    /**
     * The Api Client that is used for connecting with Cyphlens backend
     * @type {ApiClient}
     */
    protected apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }
}