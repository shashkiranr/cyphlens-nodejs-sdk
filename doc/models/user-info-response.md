
# User Info

Defines the response returned by
* [Get User Account Info](../../doc/api/user.md#get-user-account-info).
* [Enable User Account Info](../../doc/api/user.md#enable-user-account-info).
* [Delete User Account Info](../../doc/api/user.md#delete-user-account-info).

## Structure

`UserInfo`

## Fields

| Name         | Type                                             | Description                                                    |
|--------------|--------------------------------------------------|----------------------------------------------------------------|
| `id`         | `string`                                         | A unique user ID associated to the Cyphlens end-user account.  |
| `businessId` | `string`                                         | The business ID associated with the Cyphlens end-user account. |
| `status`     | [`UserStatus` ](../../doc/models/user-status.md) | The current status of the end-user Cyphlens account.           |
| `username`   | `string`                                         | The username associated with the Cyphlens end-user account.    |

## Example (as JSON)

```json
{
  "id": "3891926237655860884",
  "businessId": "8871918765655860884",
  "status": "PENDING",
  "username": "user@business.com"
}
```

