import { BaseApi } from "./baseApi";
import { Environment } from "../configuration";
export class UserApi extends BaseApi {
    _dummyResponse = {
        username: 'test@test.com',
        status: 'PENDING',
        businessId: 'sqw562ysxxxxws',
        id: 'user_cyph_37rh2378783',
    };
    async getApiResponse(username, path, type) {
        if (this.apiClient.config.environment === Environment.Testing) {
            const result = (function () {
                switch (type) {
                    case 'get':
                        return 'ACTIVE';
                    case 'add':
                        return 'PENDING';
                    case 'delete':
                    default:
                        return 'INACTIVE';
                }
            })();
            return { ...this._dummyResponse, status: result, username: username };
        }
        const userResponse = (await this.apiClient.post(path, { username: username })).data;
        // need to verify schema of the response.
        return userResponse;
    }
    async getUserAccountInfo(username) {
        return this.getApiResponse(username, '/user/get', 'get');
    }
    async addUserAccountInfo(username) {
        return this.getApiResponse(username, '/user/add', 'add');
    }
    async deleteUserAccountInfo(username) {
        return this.getApiResponse(username, '/user/delete', 'delete');
    }
}
//# sourceMappingURL=userApi.js.map