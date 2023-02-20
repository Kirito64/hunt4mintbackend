const sequelize = require("sequelize");


const Sequelize = new sequelize("postgres://postgres:postgrespw@localhost:32768/hunt4mint");

module.exports = Sequelize;