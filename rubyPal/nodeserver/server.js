const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/db');
const morgan = require('morgan');
const path = require('path');

// server setup
const app = express();
const port = '1337';

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded)({ extended: true});
app.use(morgan('dev'));

// static serve
app.use(express.static(path.join(__dirname, '/../dist')));

// routing
app.use( 'api/v1', router);

app.listen(port, 'localhost', () => {
  console.log(`successful connection to ${port}`)
})




