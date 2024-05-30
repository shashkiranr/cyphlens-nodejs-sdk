import { BaseApi } from "./baseApi";
import { Environment } from "../configuration";
export class ImageApi extends BaseApi {
    _dummyImageInfo = {
        username: "user@business.com",
        imageType: "SVG",
        image: "PHN2ZyBiYXNlUHJvZmlsZT0idGlu...",
        sessionId: "xcRTH3567%thASFDASvcQW"
    };
    _dummyVerifyInfo = {
        "status": "SUCCESS",
        "message": "Verification successful."
    };
    async getCyphlensImage(username, imageType) {
        if (this.apiClient.config.environment === Environment.Testing) {
            return { ...this._dummyImageInfo, imageType: imageType, username: username };
        }
        const userResponse = (await this.apiClient.post('/login/getCyph', {
            username: username,
            imageType: imageType,
        })).data;
        // need to verify schema of the response.
        return userResponse;
    }
    async verifyCyphlensImage(username, passcode, sessionId) {
        if (this.apiClient.config.environment === Environment.Testing) {
            return this._dummyVerifyInfo;
        }
        const userResponse = (await this.apiClient.post('/login/verifyCyph', {
            username: username,
            passcode: passcode,
            sessionId: sessionId,
        })).data;
        // need to verify schema of the response.
        return userResponse;
    }
}
//# sourceMappingURL=imageApi.js.map