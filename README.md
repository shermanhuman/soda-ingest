# soda-ingest
Utility to pull data from a Socrata Open Data API (SODA) publisher and populate a PostgreSQL database.

# Operating Instructions

1. Set configuration by editing config.js or environment variables.
2. Run 'node schema.js' to create table structure on Postgres.
3. Run 'node index.js'.

#Config and Environment Variables

PSQL_HOST: Your PostgreSQL server hostname or ip address 
PSQL_PORT: Your PostgreSQL server port number
PSQL_DBNAME: Your PostgreSQL database name
PSQL_USERNAME: Your PostgreSQL username
PSQL_PASSWORD: Your PostgreSQL password
PSQL_TABLE: The table you want to import data to (careful: choose an empty table)
SODA_URL: URL of the target SODA endpoint, not including the query
SODA_TOKEN: Your SODA application token
SODA_QUERY: Your SODA query string

#Configuration examples
##BASH:

    export PSQL_HOST=yourpostgres.hostname.or.ip PSQL_PORT=5432 PSQL_DBNAME=yourdbname PSQL_USERNAME=master_soda PSQL_PASSWORD=yourpassword PSQL_TABLE=my_table
    export SODA_HOST='https://data.cms.gov' SODA_RESOURCE='ehrv-m9r6.json' SODA_TOKEN=yourtoken

#Getting an application token
Create account and register app https://opendata.socrata.com
