# User

```ts
const userApi = testClient.userApi;
```

## Class Name

`UserApi`

## Methods

* [Get User Account Info](../../doc/api/user.md#get-user-account-info)
* [Enable User Account Info](../../doc/api/user.md#enable-user-account-info)
* [Delete User Account Info](../../doc/api/user.md#delete-user-account-info)


# Get User Account Info

Returns the end-user Cyphlens account information, including the account status.

```ts
async getUserAccountInfo(username: string): Promise<UserInfo>
```

## Parameters

| Parameter  | Type     | Description                                                           |
|------------|----------|-----------------------------------------------------------------------|
| `username` | `string` | The username of the Cyphlens user account requesting information for. |
## Response Type

[`UserInfo`](../../doc/models/user-info-response.md)

## Example Usage

```ts
try {
  const result = await userApi.getUserAccountInfo();
  // use response
} catch (error) {
  // handle error
}
```

# Enable User Account Info

Enables Cyphlens services for an end-user.

```ts
async enableUserAccountInfo(username: string): Promise<UserInfo>
```

## Parameters

| Parameter  | Type     | Description                                                           |
|------------|----------|-----------------------------------------------------------------------|
| `username` | `string` | The username of the Cyphlens user account requesting information for. |
## Response Type

[`UserInfo`](../../doc/models/user-info-response.md)

## Example Usage

```ts
try {
  const result = await userApi.enableUserAccountInfo();
  // use response
} catch (error) {
  // handle error
}
```

# Delete User Account Info

Disables a specific end-user's Cyphlens account

`Note:Once an end-user account is disabled, the user won't be able to use any of the Cyphlens services, including 2FA, for the business.`

```ts
async deleteUserAccountInfo(username: string): Promise<UserInfo>
```

## Parameters

| Parameter  | Type     | Description                                                           |
|------------|----------|-----------------------------------------------------------------------|
| `username` | `string` | The username of the Cyphlens user account requesting information for. |
## Response Type

[`UserInfo`](../../doc/models/user-info-response.md)

## Example Usage

```ts
try {
  const result = await userApi.deleteUserAccountInfo();
  // use response
} catch (error) {
  // handle error
}
```

