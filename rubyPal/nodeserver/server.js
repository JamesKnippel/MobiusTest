const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan')
const router = require('../nodeserver/router/credit.router')
const path = require('path');
const fallback = require('express-history-api-fallback');

const app = express();
const port = 1337
const ip = 'localhost'

app
  .use(bodyparser.json())
  .use(bodyparser.urlencoded({ extended: false }))
  .use(morgan('dev'))
  .use('/api/v1', router)
  app.use(express.static(path.join(__dirname, '/../dist')));
  app.use(fallback(__dirname + '../src/app/app-routing.module.ts'));



app.listen(port, ip, () => {
  console.log(`succesful connection to ${port}`)
})