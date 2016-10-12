# soda-ingest
Utility to pull data from a Socrata Open Data API (SODA) publisher and populate a PostgreSQL database.

## Operating Instructions

1. Set configuration by editing config.js or environment variables.
2. Run 'node schema.js' to create table structure on Postgres.
3. Run 'node index.js'.

## Config and Environment Variables

- PSQL_HOST: Your PostgreSQL server hostname or ip address 
- PSQL_PORT: Your PostgreSQL server port number
- PSQL_DBNAME: Your PostgreSQL database name
- PSQL_USERNAME: Your PostgreSQL username
- PSQL_PASSWORD: Your PostgreSQL password
- PSQL_TABLE: The table you want to import data to (careful: choose an empty table)
- SODA_URL: URL of the target SODA endpoint, not including the query
- SODA_TOKEN: Your SODA application token
- SODA_QUERY: Your SODA query string

## Configuration examples

### BASH:
Note: in bash, remember to escape the '$' char using the backslash '\'.  If you create a script, make sure to source it instead of executing it.

    export PSQL_HOST='ahh.hmmhumhrm.us-west-2.rds.amazonaws.com'
    export PSQL_DBNAME='soda_ingest' 
    export PSQL_USERNAME='master_user'
    export PSQL_PASSWORD='password' 
    export PSQL_TABLE='medicare_ipps' 
    export SODA_TOKEN='1234567890abcdefghijk'   
    export SODA_URL='https://data.cms.gov/resource/ehrv-m9r6.json'
    export SODA_QUERY="?\$where=provider_state='AZ'&\$limit=3&\$select=drg_definition,provider_name,provider_id,average_medicare_payments_2,average_medicare_payments"

### Windows command line
Note: you need to escape the '$' and '&' characters with '^'.  The variables only last as long as the command window is open.  Use 'xset' instead of 'set' if you want
them to persist.  Take care, trailing spaces will break things.

    set PSQL_HOST=ahh.hmmhumhrm.us-west-2.rds.amazonaws.com
    set PSQL_DBNAME=soda_ingest
    set PSQL_USERNAME=master_user
    set PSQL_PASSWORD=password
    set PSQL_TABLE=medicare_ipps
    set SODA_TOKEN=1234567890abcdefghijk
    set SODA_URL=https://data.cms.gov/resource/ehrv-m9r6.json
    set SODA_QUERY=?^$where=provider_state='AZ'^&^$limit=3^&^$select=drg_definition,provider_name,provider_id,average_medicare_payments_2,average_medicare_payments

## Getting an application token
Create account and register app https://opendata.socrata.com

## Open data websites
- https://dev.socrata.com/
- https://www.opendatanetwork.com/
- https://data.cms.gov

## TODO:

- Fix schema.js
    - no more manual operation
    - dynamically add table if it doesn't exist
    - add an option to nuke table on import
    - dynamically generate schema based on incoming data 