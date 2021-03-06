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
    define(['ApiClient', 'model/ResponseErrorCode', 'model/ResponseErrorTitle'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResponseErrorCode'), require('./ResponseErrorTitle'));
  } else {
    // Browser globals (root is window)
    if (!root.PhonebookApi) {
      root.PhonebookApi = {};
    }
    root.PhonebookApi.ErrorItem = factory(root.PhonebookApi.ApiClient, root.PhonebookApi.ResponseErrorCode, root.PhonebookApi.ResponseErrorTitle);
  }
}(this, function(ApiClient, ResponseErrorCode, ResponseErrorTitle) {
  'use strict';



  /**
   * The ErrorItem model module.
   * @module model/ErrorItem
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>ErrorItem</code>.
   * @alias module:model/ErrorItem
   * @class
   * @param title {module:model/ResponseErrorTitle} 
   * @param detail {String} Free form more detailed description of the error.
   * @param code {module:model/ResponseErrorCode} 
   */
  var exports = function(title, detail, code) {
    var _this = this;

    _this['title'] = title;
    _this['detail'] = detail;
    _this['code'] = code;
  };

  /**
   * Constructs a <code>ErrorItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorItem} obj Optional instance to populate.
   * @return {module:model/ErrorItem} The populated <code>ErrorItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('title')) {
        obj['title'] = ResponseErrorTitle.constructFromObject(data['title']);
      }
      if (data.hasOwnProperty('detail')) {
        obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ResponseErrorCode.constructFromObject(data['code']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ResponseErrorTitle} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Free form more detailed description of the error.
   * @member {String} detail
   */
  exports.prototype['detail'] = undefined;
  /**
   * @member {module:model/ResponseErrorCode} code
   */
  exports.prototype['code'] = undefined;



  return exports;
}));


