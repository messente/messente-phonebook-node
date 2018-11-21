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
 * OpenAPI Generator version: 3.3.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PhonebookApi) {
      root.PhonebookApi = {};
    }
    root.PhonebookApi.FetchBlacklistSuccess = factory(root.PhonebookApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FetchBlacklistSuccess model module.
   * @module model/FetchBlacklistSuccess
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>FetchBlacklistSuccess</code>.
   * @alias module:model/FetchBlacklistSuccess
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FetchBlacklistSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FetchBlacklistSuccess} obj Optional instance to populate.
   * @return {module:model/FetchBlacklistSuccess} The populated <code>FetchBlacklistSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('phoneNumbers')) {
        obj['phoneNumbers'] = ApiClient.convertToType(data['phoneNumbers'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} phoneNumbers
   */
  exports.prototype['phoneNumbers'] = undefined;



  return exports;
}));


