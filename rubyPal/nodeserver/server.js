const express =  require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan')
const router = require('../nodeserver/router/credit.router')
const path = require('path');

const app = express();
const port = 1337
const ip = 'localhost'

app.use(express.static(path.join(__dirname, '../dist')))
    .use(bodyparser.json())
    .use(bodyparser.urlencoded({extended: true}))
    .use(morgan('dev'))
    .use('/api/v1', router)

app.listen(port, ip, ()=>{
    console.log(`succesful connection to ${port}`)
})