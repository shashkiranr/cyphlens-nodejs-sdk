import {ImageApi, ImageType, VerifyStatus} from "../../src";
import {testClient} from "../testClient";

describe('Image API', () => {
    let imageApi: ImageApi;
    let userName:string
    beforeAll(() => {
        imageApi = testClient.imageApi
        userName = 'testUserName@test.com'
    })


    test('test get cyphlens image SVG',async ()=>{
        const imageType:ImageType = 'SVG';
        const result = await imageApi.getLoginCyphlensImage(userName,imageType)
        expect(result.username).toEqual(userName);
        expect(result.imageType).toEqual(imageType)
    })

    test('test get cyphlens image PNG',async ()=>{
        const imageType:ImageType = 'PNG';
        const result = await imageApi.getLoginCyphlensImage(userName,imageType)
        expect(result.username).toEqual(userName);
        expect(result.imageType).toEqual(imageType)
    })

    test('test get cyphlens image SVG_DECODED',async ()=>{
        const imageType:ImageType = 'SVG_DECODED';
        const result = await imageApi.getLoginCyphlensImage(userName,imageType)
        expect(result.username).toEqual(userName);
        expect(result.imageType).toEqual(imageType)
    })

    test('test verify cyphlens image SVG_DECODED',async ()=>{
        const status:VerifyStatus = 'SUCCESS';
        const result = await imageApi.verifyLoginCyphlensImage(userName,'','')
        expect(result.status).toEqual(status);
        expect(result.message).toEqual('Verification successful.')
    })
})