type VerifyStatus = 'SUCCESS' | 'FAILURE' | '400' | '401' | '404'
interface VerifyInfo {
    status: VerifyStatus,
    message: string,
}

export {
    VerifyInfo,
    VerifyStatus,
}