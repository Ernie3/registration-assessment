# registration-assessment
registration assessment

## Running the app using Docker
`docker build -t registration-app .`
`docker run -dp 8080:8080 registration-app`
Visit localhost:8080 to view the app.

To stop the app, run `docker ps` then find the Container ID for registration-app.
Once you find the Container ID, run `docker stop <CONTAINER ID>`.

## Running the app without Docker
`npm install`
`npm start`
Visit localhost:8080 to view the app.

## Routes
`/` - Register page
`/registered` - View all registered users
