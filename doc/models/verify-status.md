
# Verify Status

Defines the current status of the end-user Cyphlens account. Used in [Verify Info](../models/user-info-response.md)

## Structure

`VerifyStatus`

## Values

- `SUCCESS`: The passcode provided by the end-user has been successfully verified.
- `FAILURE`: The passcode provided by the end-user is wrong.
- `400`: The passcode is missing.
- `401`: Either the access token or the IP address is invalid.
- `404`: End-user not found.

