const db = require('../../db/db');

module.exports = {
  addUser: function (req, res) {
    db.User.findOrCreate({
      where : {
        email: req.body.email,
        num_credits: 100
      }
    })
    .spread((data) => {
      res.status(201).send(data);
    })
  },

  findUser: function (req, res) {
    db.User.findOne({
      where: {
        email: req.params.email
      }
    }).then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      return console.log(err);
    })
  }
}