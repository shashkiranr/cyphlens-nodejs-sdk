type UserStatus = 'PENDING' | 'ACTIVE' | 'INACTIVE'

/**
 * Describes a user info response
 */
interface UserInfo {
    id: string,
    businessId: string,
    status: UserStatus,
    username: string,
}

export {
    UserStatus,
    UserInfo,
}