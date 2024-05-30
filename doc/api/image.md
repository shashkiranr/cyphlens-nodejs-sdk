# User

```ts
const imageApi = testClient.imageApi;
```

## Class Name

`ImageApi`

## Methods

* [Get Login Cyphlens Image](../../doc/api/image.md#get-login-cyphlens-image)
* [Verify Login Cyphlens Image](../../doc/api/image.md#verify-login-cyphlens-image)


# Get Login Cyphlens Image

Generates a login Cyphlens Image for a specific end-user.

```ts
async getLoginCyphlensImage(username: string, imageType: ImageType): Promise<ImageInfo>
```

## Parameters

| Parameter   | Type                                           | Description                                                      |
|-------------|------------------------------------------------|------------------------------------------------------------------|
| `username`  | `string`                                       | The end-user for whom a login Cyphlens Image is being requested. |
| `imageType` | [`ImageType` ](../../doc/models/image-type.md) | The image format of the returned Cyphlens Image.                 |

## Response Type

[`ImageInfo`](../../doc/models/image-info-response.md)

## Example Usage

```ts
try {
  const result = await imageApi.getLoginCyphlensImage(userName,imageType);
  // use response
} catch (error) {
  // handle error
}
```

# Verify Login Cyphlens Image

Verifies the passcode of a login Cyphlens Image for a specific end-user.

```ts
async verifyLoginCyphlensImage(username: string, passcode: string, sessionId: string,): Promise<VerifyInfo>
```

## Parameters

| Parameter   | Type     | Description                                                                     |
|-------------|----------|---------------------------------------------------------------------------------|
| `username`  | `string` | The end-user for whom a login Cyphlens Image is being verified.                 |
| `passcode`  | `string` | The passcode to verify sent by the end-user.                                    |
| `sessionId` | `string` | The end-user session ID associated with this login Cyphlens Image and passcode. |

## Response Type

[`VerifyInfo`](../../doc/models/verify-info-response.md)

## Example Usage

```ts
try {
  const result = await imageApi.verifyLoginCyphlensImage(userName,passcode,sessionId);
  // use response
} catch (error) {
  // handle error
}
```