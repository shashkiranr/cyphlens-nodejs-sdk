import { BaseApi } from "./baseApi";
import { UserInfo } from "../interface/userInfo";
export declare class UserApi extends BaseApi {
    private _dummyResponse;
    private getApiResponse;
    getUserAccountInfo(username: string): Promise<UserInfo>;
    addUserAccountInfo(username: string): Promise<UserInfo>;
    deleteUserAccountInfo(username: string): Promise<UserInfo>;
}
