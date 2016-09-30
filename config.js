// config.js
// Set configuration here or preferably override with environment variables:

var config = {};

// Postgres Config
config.psql_host = process.env.PSQL_HOST || 'localhost';
config.psql_port = process.env.PSQL_PORT || 5432;
config.psql_dbname = process.env.PSQL_DBNAME || 'REQUIRED_NOT_SET';
config.psql_username = process.env.PSQL_USERNAME || 'REQUIRED_NOT_SET';
config.psql_password = process.env.PSQL_PASSWORD || 'REQUIRED_NOT_SET';
config.psql_table = process.env.PSQL_TABLE || 'REQUIRED_NOT_SET';

// SODA config
config.soda_url = process.env.SODA_URL || 'REQUIRED_NOT_SET';  
config.soda_token = process.env.SODA_TOKEN || '';
config.soda_query = process.env.SODA_QUERY || 'REQUIRED_NOT_SET';

module.exports = config;