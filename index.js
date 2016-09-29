var config = require('./config');
var https = require('https');
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

var soda_options = {
    host: config.soda_host,
    port: config.soda_port,
    path: "/resource/ehrv-m9r6.json?$where=provider_state='AZ'&$limit=100&$select=drg_definition,provider_name,average_medicare_payments_2,average_medicare_payments",
    headers: { 'X-App-Token': config.soda_token },
    method: 'GET'
};

https.request(soda_options, function(res) {
  console.log('REQUEST: ', soda_options);
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end(function(){
    
});


