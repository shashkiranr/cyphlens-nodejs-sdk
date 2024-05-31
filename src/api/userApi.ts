import {BaseApi} from "./baseApi";
import {UserInfo, UserStatus} from "../models/userInfo";
import {Environment} from "../configuration";

export class UserApi extends BaseApi {

    private _dummyResponse: UserInfo = {
        username: 'test@test.com',
        status: 'PENDING',
        businessId: 'sqw562ysxxxxws',
        id: 'user_cyph_37rh2378783',
    }

    /**
     * Executes and returns the user api
     *
     * if {@link Configuration.environment} is {@link Environment.Testing} then a dummy response is returned with an updated {@link UserStatus}
     * based on {@link type}
     *
     * @param username
     * @param path
     * @param type
     * @returns {Promise<UserInfo>}
     */
    private async getApiResponse(username: string, path: string, type: string): Promise<UserInfo> {
        if (this.apiClient.config!.environment === Environment.Testing) {
            const result: UserStatus = (function () {
                switch (type) {
                    case 'get':
                        return 'PENDING';
                    case 'enable':
                        return 'ACTIVE';
                    case 'delete':
                    default:
                        return 'INACTIVE';

                }
            })();

            return <UserInfo>{...this._dummyResponse, status: result, username: username}
        }
        const userResponse = (await this.apiClient.post(path, {username: username})).data
        // need to verify schema of the response.
        return userResponse as UserInfo
    }

    /**
     * Returns user account info
     *
     * @remarks
     * Refer the {@link user.md#get-user-account-info} for detailed explanation
     *
     * @param username
     * @returns {Promise<UserInfo>}
     */
    async getUserAccountInfo(username: string): Promise<UserInfo> {
        return this.getApiResponse(username, '/user/get', 'get')
    }

    /**
     * Enables user account
     *
     * @remarks
     * Refer the {@link user.md#enable-user-account-info} for detailed explanation
     *
     * @param username
     * @returns {Promise<UserInfo>}
     */
    async enableUserAccountInfo(username: string): Promise<UserInfo> {
        return this.getApiResponse(username, '/user/add', 'enable')
    }

    /**
     * Diable user account
     *
     * @remarks
     * Refer the {@link user.md#delete-user-account-info} for detailed explanation
     *
     * @param username
     * @returns {Promise<UserInfo>}
     */
    async deleteUserAccountInfo(username: string): Promise<UserInfo> {
        return this.getApiResponse(username, '/user/delete', 'delete')
    }
}