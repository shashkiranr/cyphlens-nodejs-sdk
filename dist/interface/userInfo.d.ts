type UserStatus = 'PENDING' | 'ACTIVE' | 'INACTIVE';
interface UserInfo {
    id: string;
    businessId: string;
    status: UserStatus;
    username: string;
}
export { UserStatus, UserInfo, };
