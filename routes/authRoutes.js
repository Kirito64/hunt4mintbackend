const authController = require('../controllers/auth');
const Router = require("express").Router();



Router.post("/signup", authController.signUp);

Router.post("/localsignin", authController.signIn)



module.exports = Router;