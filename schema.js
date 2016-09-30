// schema.js
// Create table and schema

//TODO use pgp and make this dynamic, get schema from incoming data

var config = require('./config');
var pg = require('pg');


var pg_config = {
  user: config.psql_username, 
  database: config.psql_dbname, 
  password: config.psql_password,
  host: config.psql_host, 
  port: config.psql_port, 
};

console.log(pg_config);

var client = new pg.Client(pg_config);

client.connect(function (err){
    if (err) throw err;
    client.query('CREATE TABLE ' + config.psql_table + ' ( ID SERIAL PRIMARY KEY NOT NULL, drg_definition VARCHAR NOT NULL, provider_id VARCHAR NOT NULL, provider_name VARCHAR NOT NULL, average_medicare_payments_2 INTEGER NOT NULL, average_medicare_payments INTEGER NOT NULL);', function (err, result){
        if (err) throw err;
        console.log(result);
        
        client.end(function (err){
            if (err) throw err;
        });
    });
});