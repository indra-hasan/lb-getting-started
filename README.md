# Loopback getting started 
Just trying loopback 

## How to Install
- open your terminal
- clone this repository
- go to root directory (default will be lb-getting-started)
- run npm install
- copy file .env.example to .env
- setting .env file
- create mysql database
- run lb-migration migrate to migration model to your database  

## Using loopback migration
- lb-migration migrate => to migrate all model in all datasource
- lb-migration migrate --ds=datasource1 datasource2 => migrate some datasource
See more function at [loopback-migration-tool](https://www.npmjs.com/package/loopback-migration-tool).

## Using Loopback seed
See more function at [loopback-seed](https://www.npmjs.com/package/loopback-seed).