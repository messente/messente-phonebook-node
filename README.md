# Messente Phonebook API

PhonebookApi - JavaScript client for Messente Phonebook API

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install phonebook_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your Messente Phonebook API from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('phonebook_api')` in javascript files from the directory you ran the last
command above from.

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const PhonebookApi = require('phonebook_api');

const defaultClient = PhonebookApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
const basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR_MESSENTE_API_USERNAME';
basicAuth.password = 'YOUR_MESSENTE_API_PASSWORD';

const api = new PhonebookApi.BlacklistApi();

const callback = function(error, data, response) {
    if (error) {
      console.error(error['response']['body']);
    } else {
      console.log('API called successfully. \n', response.body);
    }
  };

api.fetchBlacklist(callback);
// api.addToBlacklist({phoneNumber: '+37255555555'}, callback);
// api.isBlacklisted('+37255555555', callback)
// api.removeFromBlacklist('+37255555555', callback);
```

## Documentation for API Endpoints

All URIs are relative to *<https://api.messente.com/v1>*

Class | Method | HTTP request |
------------ | ------------- | ------------- |
*PhonebookApi.BlacklistApi* | [**addToBlacklist**](docs/BlacklistApi.md#addToBlacklist) | **POST** /phonebook/blacklist |
*PhonebookApi.BlacklistApi* | [**fetchBlacklist**](docs/BlacklistApi.md#fetchBlacklist) | **GET** /phonebook/blacklist |
*PhonebookApi.BlacklistApi* | [**isBlacklisted**](docs/BlacklistApi.md#isBlacklisted) | **GET** /phonebook/blacklist/{phone_number} |
*PhonebookApi.BlacklistApi* | [**removeFromBlacklist**](docs/BlacklistApi.md#removeFromBlacklist) | **DELETE** /phonebook/blacklist/{phone_number} |

## Documentation for Models

- [PhonebookApi.ErrorItem](docs/ErrorItem.md)
- [PhonebookApi.ErrorResponse](docs/ErrorResponse.md)
- [PhonebookApi.FetchBlacklistSuccess](docs/FetchBlacklistSuccess.md)
- [PhonebookApi.NumberToBlacklist](docs/NumberToBlacklist.md)
- [PhonebookApi.ResponseErrorCode](docs/ResponseErrorCode.md)
- [PhonebookApi.ResponseErrorTitle](docs/ResponseErrorTitle.md)

## Documentation for Authorization

### basicAuth

- **Type**: HTTP basic authentication
