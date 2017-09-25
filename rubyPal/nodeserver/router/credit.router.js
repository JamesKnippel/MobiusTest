const router = require('express').Router()
const userController = require ('../controllers/credit.controllers.js');

router.route('/users/:email')
  .get(userController.findUser)
  .post(userController.subtractCredits)
  .post(userController.addCredits)

router.route('/users')
  .post(userController.addUser)
  .get(userController.getAllUsers)

module.exports = router;