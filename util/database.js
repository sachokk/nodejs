const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-udemy', 'root', 'admin', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
