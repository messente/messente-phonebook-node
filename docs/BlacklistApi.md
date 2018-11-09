# PhonebookApi.BlacklistApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addToBlacklist**](BlacklistApi.md#addToBlacklist) | **POST** /phonebook/blacklist | 
[**fetchBlacklist**](BlacklistApi.md#fetchBlacklist) | **GET** /phonebook/blacklist | 
[**removeFromBlacklist**](BlacklistApi.md#removeFromBlacklist) | **DELETE** /phonebook/blacklist/{phone_number} | 


<a name="addToBlacklist"></a>
# **addToBlacklist**
> addToBlacklist(numberToBlacklist)



Adds a phone number to the blacklist.

### Example
```javascript
var PhonebookApi = require('phonebook_api');
var defaultClient = PhonebookApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new PhonebookApi.BlacklistApi();
var numberToBlacklist = new PhonebookApi.NumberToBlacklist(); // NumberToBlacklist | Phone number to be blacklisted
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addToBlacklist(numberToBlacklist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numberToBlacklist** | [**NumberToBlacklist**](NumberToBlacklist.md)| Phone number to be blacklisted | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fetchBlacklist"></a>
# **fetchBlacklist**
> FetchBlacklistSuccess fetchBlacklist()



Returns all blacklisted phone numbers.

### Example
```javascript
var PhonebookApi = require('phonebook_api');
var defaultClient = PhonebookApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new PhonebookApi.BlacklistApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fetchBlacklist(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**FetchBlacklistSuccess**](FetchBlacklistSuccess.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeFromBlacklist"></a>
# **removeFromBlacklist**
> removeFromBlacklist(phoneNumber)



Removes a phone number from the blacklist.

### Example
```javascript
var PhonebookApi = require('phonebook_api');
var defaultClient = PhonebookApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new PhonebookApi.BlacklistApi();
var phoneNumber = "phoneNumber_example"; // String | The phone number to be deleted
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeFromBlacklist(phoneNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumber** | **String**| The phone number to be deleted | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

