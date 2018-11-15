/**
 * Phonebook API
 * RESTful API for Messente phonebook
 *
 * OpenAPI spec version: 0.0.1
 * Contact: messente@messente.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorResponse', 'model/FetchBlacklistSuccess', 'model/NumberToBlacklist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/FetchBlacklistSuccess'), require('../model/NumberToBlacklist'));
  } else {
    // Browser globals (root is window)
    if (!root.PhonebookApi) {
      root.PhonebookApi = {};
    }
    root.PhonebookApi.BlacklistApi = factory(root.PhonebookApi.ApiClient, root.PhonebookApi.ErrorResponse, root.PhonebookApi.FetchBlacklistSuccess, root.PhonebookApi.NumberToBlacklist);
  }
}(this, function(ApiClient, ErrorResponse, FetchBlacklistSuccess, NumberToBlacklist) {
  'use strict';

  /**
   * Blacklist service.
   * @module api/BlacklistApi
   * @version 0.0.1
   */

  /**
   * Constructs a new BlacklistApi. 
   * @alias module:api/BlacklistApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addToBlacklist operation.
     * @callback module:api/BlacklistApi~addToBlacklistCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a phone number to the blacklist.
     * @param {module:model/NumberToBlacklist} numberToBlacklist Phone number to be blacklisted
     * @param {module:api/BlacklistApi~addToBlacklistCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addToBlacklist = function(numberToBlacklist, callback) {
      var postBody = numberToBlacklist;

      // verify the required parameter 'numberToBlacklist' is set
      if (numberToBlacklist === undefined || numberToBlacklist === null) {
        throw new Error("Missing the required parameter 'numberToBlacklist' when calling addToBlacklist");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/phonebook/blacklist', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fetchBlacklist operation.
     * @callback module:api/BlacklistApi~fetchBlacklistCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FetchBlacklistSuccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all blacklisted phone numbers.
     * @param {module:api/BlacklistApi~fetchBlacklistCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FetchBlacklistSuccess}
     */
    this.fetchBlacklist = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FetchBlacklistSuccess;

      return this.apiClient.callApi(
        '/phonebook/blacklist', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeFromBlacklist operation.
     * @callback module:api/BlacklistApi~removeFromBlacklistCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a phone number from the blacklist.
     * @param {String} phoneNumber The phone number to be deleted
     * @param {module:api/BlacklistApi~removeFromBlacklistCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeFromBlacklist = function(phoneNumber, callback) {
      var postBody = null;

      // verify the required parameter 'phoneNumber' is set
      if (phoneNumber === undefined || phoneNumber === null) {
        throw new Error("Missing the required parameter 'phoneNumber' when calling removeFromBlacklist");
      }


      var pathParams = {
        'phone_number': phoneNumber
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/phonebook/blacklist/{phone_number}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
