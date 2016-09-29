# soda-ingest
Utility to pull data from a Socrata Open Data API (SODA) publisher a nd populate a local SQL database

#Config and Environment Variables

BASH:

    export PSQL_HOST=yourpostgres.hostname.or.ip PSQL_PORT=5432 PSQL_DBNAME=soda_ingest PSQL_USERNAME=master_soda PSQL_PASSWORD=yourpassword 
    export SODA_HOST='https://data.cms.gov' SODA_RESOURCE='ehrv-m9r6.json' SODA_TOKEN=yourtoken

Create account and register app https://opendata.socrata.com
