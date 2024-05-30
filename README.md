# Cyphlens Node.js SDK

Use this JavaScript library to manage Cyphlens resources (such as Users, Login Images).

* [Requirements](#requirements)
* [Installation](#installation)
* [Quickstart](#quickstart)
* [Usage](#usage)
* [Tests](#tests)
* [SDK Reference](#sdk-reference)

## Requirements

Use of the Cyphlens Node.js SDK requires:

* Node.js 16 or higher

This SDK supports Node.js versions that are either current, or that are in long-term support status (LTS).  The SDK does not support Node.js versions that have reached their end-of-life (EOL).  For more information on Node.js versioning, see <https://nodejs.org/en/about/releases/>.

This SDK is for use with Node.js only. It does not support other usages, such as for web browsers or frontend applications.

## Installation

For more information, see [Set Up Your Cyphlens SDK for a Node.js Project](https://cyphlens.com/docs/sdk-reference.html).

## Quickstart

For more information, see [Cyphlens Node.js SDK Quickstart](https://cyphlens.com/docs/sdk-reference.html#configuration).

## Usage
For more information, see [Using the Cyphlens Node.js SDK](https://cyphlens.com/docs/sdk-reference.htm).

## Tests

First, clone the repo locally and `cd` into the directory.

```sh
git clone https://github.com/shashkiranr/cyphlens-nodejs-sdk.git
cd cyphlens-nodejs-sdk
```

Next, install dependencies and build.

```sh
npm install
npm run build
```

to Locally Run using nodemon

```sh
npm run startLocal
```

Before running the tests, get a sandbox client id and client secret from your [Developer Dashboard] and use it to set a `CLIENT_ID` and `CLIENT_SECRET` environment variable.

```sh
export CLIENT_ID="YOUR Client ID"
export CLIENT_SECRET="YOUR Client Secret"
```

And run the tests.

```sh
npm test
```

## SDK Reference

### User
* [User]

### Image
* [Image]

[User]: doc/api/user.md
[Image]: doc/api/image.md
