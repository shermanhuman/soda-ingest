// insertrow.js
var config = require('./config');
var Promise = require('bluebird');
var pgp = require('pg-promise')({ promiseLib: Promise });

var pg_config = {
    user: config.psql_username,
    database: config.psql_dbname,
    password: config.psql_password,
    host: config.psql_host,
    port: config.psql_port
}

var db = pgp(pg_config);

module.exports = function (record) {
    return new Promise(function (resolve, reject) {

        var keys = [];
        for (var prop in record) {
            keys.push(prop);
            if (Number(record[prop]) === parseFloat(record[prop])) {  // isNaN and typeof suck, but if Number() and parseFloat()   
                record[prop] = Number(record[prop]);                  // agree then it can be safely coerced to a number.
            }
        }
        var insertstatement = pgp.helpers.insert(record, keys, config.psql_table);
        console.log(insertstatement);


        db.none(insertstatement)
            .then(function () {
                resolve();
            })
            .catch(function (err) {
                reject(err);
            });
    });
}