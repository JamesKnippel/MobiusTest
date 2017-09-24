const router = require('express').Router()
const userController = require ('../controllers/credit.controllers.js');

router.route('/users/:email')
  .get(userController)

router.route('/users')
  .post(userController)
