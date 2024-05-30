import {BaseApi} from "./baseApi";
import {ImageInfo, ImageType} from "../models/imageInfo";
import {VerifyInfo} from "../models/verifyInfo";
import {Environment} from "../configuration";

export class ImageApi extends BaseApi {

    private _dummyImageInfo: ImageInfo = {
        username: "user@business.com",
        imageType: "SVG",
        image: "PHN2ZyBiYXNlUHJvZmlsZT0idGlu...",
        sessionId: "xcRTH3567%thASFDASvcQW"
    }
    private _dummyVerifyInfo: VerifyInfo = {
        "status": "SUCCESS",
        "message": "Verification successful."
    }

    /**
     * Returns the login Cyphlens Image
     *
     * @remarks
     * Refer the {@link image.md#get-login-cyphlens-image} for detailed explanation
     *
     * @param username
     * @param imageType
     * @returns {Promise<ImageInfo>}
     */
    async getLoginCyphlensImage(username: string, imageType: ImageType): Promise<ImageInfo> {
        if (this.apiClient.config!.environment === Environment.Testing) {
            return {...this._dummyImageInfo, imageType: imageType, username: username};
        }
        const userResponse = (await this.apiClient.post('/login/getCyph', {
            username: username,
            imageType: imageType,
        })).data;

        // need to verify schema of the response.
        return userResponse as ImageInfo;
    }

    /**
     * Verify the login image with sessionId and passcode
     *
     * @remarks
     * Refer the {@link image.md#verify-login-cyphlens-image} for detailed explanation
     *
     * @param username
     * @param passcode
     * @param sessionId
     * @returns {Promise<VerifyInfo>}
     */
    async verifyLoginCyphlensImage(username: string, passcode: string, sessionId: string,): Promise<VerifyInfo> {
        if (this.apiClient.config!.environment === Environment.Testing) {
            return this._dummyVerifyInfo;
        }
        const userResponse = (await this.apiClient.post('/login/verifyCyph', {
            username: username,
            passcode: passcode,
            sessionId: sessionId,
        })).data;
        // need to verify schema of the response.
        return userResponse as VerifyInfo;
    }
}