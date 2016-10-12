// getsoda.js
var config = require('./config');
var rp = require('request-promise');
var Promise = require('bluebird');

        var options = {
            uri: config.soda_url + config.soda_query,
            headers: { 'X-App-Token': config.soda_token },
            json: true 
        };


module.exports = function () {
    return new Promise(function (resolve, reject) {
      

        rp(options)
            .then(function (responsedata) {
                console.log('Returned %d records.', responsedata.length);
                resolve(responsedata);
            })
            .catch(function (err) {
                reject(err);
            });
    });
};