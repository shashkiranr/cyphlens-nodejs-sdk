
# Image Info

Defines the response returned by
* [Get Login Cyphlens Image](../../doc/api/image.md#get-login-cyphlens-image).

## Structure

`ImageInfo`

## Fields

| Name        | Type                                           | Description                                                                                        |
|-------------|------------------------------------------------|----------------------------------------------------------------------------------------------------|
| `sessionId` | `string`                                       | The end-user session ID associated with this login Cyphlens Image and passcode.                    |
| `image`     | `string`                                       | The actual login Cyphlens Image encoded as per imageType parameter.                                |
| `imageType` | [`ImageType` ](../../doc/models/image-type.md) | The image format of the returned Cyphlens Image.                                                   |
| `username`  | `string`                                       | The username of the Cyphlens end-user account for which a login Cyphlens Image has been requested. |

## Example (as JSON)

```json
{
  "username": "user@business.com",
  "imageType": "SVG",
  "image": "PHN2ZyBiYXNlUHJvZmlsZT0idGlu...",
  "sessionId": "xcRTH3567%thASFDASvcQW"
}
```