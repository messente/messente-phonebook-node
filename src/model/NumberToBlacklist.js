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
    root.PhonebookApi.NumberToBlacklist = factory(root.PhonebookApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The NumberToBlacklist model module.
   * @module model/NumberToBlacklist
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>NumberToBlacklist</code>.
   * @alias module:model/NumberToBlacklist
   * @class
   * @param phoneNumber {String} Phone number in e.164 format
   */
  var exports = function(phoneNumber) {
    var _this = this;

    _this['phoneNumber'] = phoneNumber;
  };

  /**
   * Constructs a <code>NumberToBlacklist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NumberToBlacklist} obj Optional instance to populate.
   * @return {module:model/NumberToBlacklist} The populated <code>NumberToBlacklist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * Phone number in e.164 format
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;



  return exports;
}));


