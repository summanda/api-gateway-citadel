# api-gateway-citadel

This is in private branch now, once reviewed, will place in gridx

.gitignore only ignores node_modules, for study reference, all files are included for now

Run Locally
---------------------------------

npm i
npm start

How to test API
---------------------------------

curl --location --request POST 'localhost:8005/bill' \
--header 'Content-Type: application/json' \
--data-raw '{
    "billName": "NewBill",
    "billDetails": "New bill details",
    "billYear": 2023,
    "billCreatedBy": "suman.mandal@gridx.com"
}'

curl --location --request GET 'localhost:8005/bill/1'

etc.

Improvement for future
---------------------------------

Will add build and run app from build after 'tsc'

Will add testing (JEST) in future

Features
---------------------------------

Middleware router for different modules

Separate controllers for separate modules

From the controller we can call actull backend API using 'axios'

Logger -    Winston Logger - Putting logs in 'AppLogs/Logger' for now

            PM2 Logger - Error and Out logs in 'AppLogs/PM2' for now

PM2 Instance - different ENVs

Validator - JOI Validator used for validation request payloads

CORS - Cross origin filtration

signalTraps - incase app closed. Though in dev/qa/stage/prod, we will use PM2 monitoring tool, so will be always up in case of unwanted shutdowns

Review Comments
---------------------------------

Q: <Add your review / question>

A: