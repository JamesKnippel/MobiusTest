const sequelize = require('sequelize');
const credentials = require('../env/dbcredentials.js');

// Postgres Elesql connxn.
const db = new sequelize(credentials.DB_PATH);

// mount and auth
db
  .authenticate()
  .then(() => {
    console.log('Database has connected.');
  })
  .catch(err => {
    console.error('Error while attempting to connect.', err);
  });

const User = db.define('user', {
  num_credits: sequelize.INTEGER,
  email: sequelize.STRING
});

const Transactions = db.define('transactions', {
  sender: sequelize.STRING,
  receiver: sequelize.STRING,
  value: sequelize.INTEGER
})

User.sync()
.then(() => console.log('user table mounted'));

Transactions.sync()
.then(() => console.log('transaction table mounted'));

module.exports = {
  User,
  Transactions
}