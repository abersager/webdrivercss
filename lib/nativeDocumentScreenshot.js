'use strict';

/* global document,window */

var async = require('async'),
    fs = require('fs'),
    gm = require('gm'),
    path = require('path');

module.exports = function nativeDocumentScreenshot(fileName) {

    var ErrorHandler = this.instance.ErrorHandler;

    /*!
     * make sure that callback contains chainit callback
     */
    var callback = arguments[arguments.length - 1];

    /*!
     * parameter check
     */
    if (typeof fileName !== 'string') {
        return callback(new ErrorHandler.CommandError('number or type of arguments don\'t agree with saveScreenshot command'));
    }

    var self = this.instance,
        response = {
            execute: [],
            screenshot: []
        };

    async.waterfall([
        function(cb) {
            self.saveScreenshot(fileName, cb);
        }
    ], function(err) {
        callback(err, null, response);
    });

};
