// Configuration file
// Set configuration here or preferably override with environment variables:

var config = {};

// Postgres Config
config.psql_host = process.env.PSQL_HOST || 'localhost';
config.psql_port = process.env.PSQL_PORT || 5432;
config.psql_dbname = process.env.PSQL_DBNAME;
config.psql_username = process.env.PSQL_USERNAME;
config.psql_password = process.env.PSQL_PASSWORD;

// SODA config
config.soda_host = process.env.SODA_HOST || ''; 
config.soda_port = process.env.SODA_PORT || 443;
config.soda_resource = process.env.SODA_RESOURCE || ''; 
config.soda_token = process.env.SODA_TOKEN || '';
config.soda_secret = process.env.SODA_SECRET || '';

module.exports = config;