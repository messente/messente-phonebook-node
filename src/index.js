/**
 * Phonebook API
 * RESTful API for Messente phonebook
 *
 * OpenAPI spec version: 0.0.3
 * Contact: messente@messente.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorItem', 'model/ErrorResponse', 'model/FetchBlacklistSuccess', 'model/NumberToBlacklist', 'model/ResponseErrorCode', 'model/ResponseErrorTitle', 'api/BlacklistApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ErrorItem'), require('./model/ErrorResponse'), require('./model/FetchBlacklistSuccess'), require('./model/NumberToBlacklist'), require('./model/ResponseErrorCode'), require('./model/ResponseErrorTitle'), require('./api/BlacklistApi'));
  }
}(function(ApiClient, ErrorItem, ErrorResponse, FetchBlacklistSuccess, NumberToBlacklist, ResponseErrorCode, ResponseErrorTitle, BlacklistApi) {
  'use strict';

  /**
   * RESTful_API_for_Messente_phonebook.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var PhonebookApi = require('index'); // See note below*.
   * var xxxSvc = new PhonebookApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new PhonebookApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new PhonebookApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new PhonebookApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.3
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ErrorItem model constructor.
     * @property {module:model/ErrorItem}
     */
    ErrorItem: ErrorItem,
    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse: ErrorResponse,
    /**
     * The FetchBlacklistSuccess model constructor.
     * @property {module:model/FetchBlacklistSuccess}
     */
    FetchBlacklistSuccess: FetchBlacklistSuccess,
    /**
     * The NumberToBlacklist model constructor.
     * @property {module:model/NumberToBlacklist}
     */
    NumberToBlacklist: NumberToBlacklist,
    /**
     * The ResponseErrorCode model constructor.
     * @property {module:model/ResponseErrorCode}
     */
    ResponseErrorCode: ResponseErrorCode,
    /**
     * The ResponseErrorTitle model constructor.
     * @property {module:model/ResponseErrorTitle}
     */
    ResponseErrorTitle: ResponseErrorTitle,
    /**
     * The BlacklistApi service constructor.
     * @property {module:api/BlacklistApi}
     */
    BlacklistApi: BlacklistApi
  };

  return exports;
}));
