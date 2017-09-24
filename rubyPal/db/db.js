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

User.sync()
.then(() => console.log('user mounted'));

module.exports = {
  User
}