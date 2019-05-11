//Express
const express = require('express');
const app = express();
const port = 3000;

//Dependencies
const morgan = require('morgan');
const fs = require('fs');

//Allows access to enviroment variables
require('dotenv').config({ path: __dirname + '/.env' });

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Generate HTTP logs
app.use(morgan('dev'));

// Create file for Morgan to write API access logs to
const accessLogStream = fs.createWriteStream(__dirname + '/access.log', {
  flags: 'a'
});
//Use Morgan and write API access logs to access.log
app.use(morgan('combined', { stream: accessLogStream }));

//API Routes
const { email_routes } = require('./api/index');
//Use Routes
app.use('/', email_routes);

//Initialize Express server with a log to the console confirming
app.listen(port, err => {
  !err
    ? console.info(`****** Node server is running on ${port} ******`)
    : console.info(`Error: The server failed to start on ${port}`);
});
