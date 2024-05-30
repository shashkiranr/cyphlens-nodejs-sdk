import { Configuration } from "./configuration";
import { UserApi } from "./api/userApi";
import { ImageApi } from "./api/imageApi";
export declare class Client {
    private readonly _config;
    private readonly apiClient;
    readonly userApi: UserApi;
    readonly imageApi: ImageApi;
    constructor(clientId: string, clientSecret: string, config?: Partial<Configuration>);
}
