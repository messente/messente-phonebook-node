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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PhonebookApi);
  }
}(this, function(expect, PhonebookApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PhonebookApi.BlacklistApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BlacklistApi', function() {
    describe('addToBlacklist', function() {
      it('should call addToBlacklist successfully', function(done) {
        //uncomment below and update the code to test addToBlacklist
        //instance.addToBlacklist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchBlacklist', function() {
      it('should call fetchBlacklist successfully', function(done) {
        //uncomment below and update the code to test fetchBlacklist
        //instance.fetchBlacklist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeFromBlacklist', function() {
      it('should call removeFromBlacklist successfully', function(done) {
        //uncomment below and update the code to test removeFromBlacklist
        //instance.removeFromBlacklist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
