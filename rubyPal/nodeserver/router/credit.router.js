const router = require('express').Router()
const userController = require ('../controllers/credit.controllers.js');

router.route('/users/:email')
  .get(userController.findUser)

// router.route('/users')
//   .post(userController)

module.exports = router;