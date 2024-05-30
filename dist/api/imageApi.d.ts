import { BaseApi } from "./baseApi";
import { ImageInfo, ImageType } from "../interface/imageInfo";
import { VerifyInfo } from "../interface/verifyInfo";
export declare class ImageApi extends BaseApi {
    private _dummyImageInfo;
    private _dummyVerifyInfo;
    getCyphlensImage(username: string, imageType: ImageType): Promise<ImageInfo>;
    verifyCyphlensImage(username: string, passcode: string, sessionId: string): Promise<VerifyInfo>;
}
