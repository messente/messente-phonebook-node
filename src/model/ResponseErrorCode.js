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
    root.PhonebookApi.ResponseErrorCode = factory(root.PhonebookApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class ResponseErrorCode.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "201"
     * @const
     */
    "201": "201",
    /**
     * value: "202"
     * @const
     */
    "202": "202",
    /**
     * value: "203"
     * @const
     */
    "203": "203",
    /**
     * value: "204"
     * @const
     */
    "204": "204",
    /**
     * value: "244"
     * @const
     */
    "244": "244",
    /**
     * value: "205"
     * @const
     */
    "205": "205"  };

  /**
   * Returns a <code>ResponseErrorCode</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/ResponseErrorCode} The enum <code>ResponseErrorCode</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


