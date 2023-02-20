const Sequelize = require("sequelize");
const user = require("../models/user");
const sequelize = require("./sequelize")

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = user


module.exports = db