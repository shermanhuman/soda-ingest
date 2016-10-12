// index.js
var config = require('./config');
var getsoda = require('./getsoda');
var insertrow = require('./insertrow');
var Promise = require("bluebird");


getsoda()
.each(function(record){
    insertrow(record);
    return 0;
})
.catch(function(e) {
    console.log('Error: ' + e)
});