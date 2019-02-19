/**
 * Phonebook API
 * RESTful API for Messente phonebook
 *
 * OpenAPI spec version: 0.0.4
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
    root.PhonebookApi.EmptyObject = factory(root.PhonebookApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The EmptyObject model module.
   * @module model/EmptyObject
   * @version 0.0.4
   */

  /**
   * Constructs a new <code>EmptyObject</code>.
   * @alias module:model/EmptyObject
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>EmptyObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmptyObject} obj Optional instance to populate.
   * @return {module:model/EmptyObject} The populated <code>EmptyObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
    }
    return obj;
  }




  return exports;
}));


