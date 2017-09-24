const db = require('../../db/db');

module.exports = {
  updateCredits: function (req, res) {
    db.User.create({
      email: req.body.email,
      num_credits: 100
    })
  },

  findUser: function (req, res) {
    db.User.findOne({
      where: {
        email: req.query.email
      }
    }).then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      return console.log(err);
    })
  }
}