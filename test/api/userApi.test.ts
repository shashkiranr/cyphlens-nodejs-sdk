import {UserApi} from "../../src";
import {testClient} from "../testClient";

describe('User API', () => {
    let userApi: UserApi;
    let userName:string
    beforeAll(() => {
        userApi = testClient.userApi
        userName = 'testUserName@test.com'
    })


    test('test get user information',async ()=>{
        const result = await userApi.getUserAccountInfo(userName)
        expect(result.username).toBe(userName);
    })

    test('test add user information',async ()=>{
        const result = await userApi.enableUserAccountInfo(userName)
        expect(result.username).toBe(userName);
        expect(result.status).toEqual("ACTIVE")
    })

    test('test delete user information',async ()=>{
        const result = await userApi.deleteUserAccountInfo(userName)
        expect(result.username).toBe(userName);
        expect(result.status).toEqual("INACTIVE")
    })
})