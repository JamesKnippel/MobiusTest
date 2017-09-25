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
  },

  subtractCredits: function (req, res) {
    db.User.findOne({
      where : {
        email: req.params.email,
      }
    })
    .then((user) => {
      user.decrement('num_credits', {by: req.body.num_credits})
      user.reload();
      res.status(201).send(user);
    })
    .catch((err) => {
      return console.log(err);
    })
  },

  addCredits: function (req, res) {
    db.User.findOne({
      where : {
        email: req.params.email,
      }
    })
    .then((user) => {
      user.increment('num_credits', {by: req.body.num_credits})
      user.reload();
      res.status(201).send(user);
    })
    .catch((err) => {
      return console.log(err);
    })
  },

  getAllUsers: function (req, res) {
    db.User.findAll({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      return console.log(err);
    })
  }
  
}