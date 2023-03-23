const authController = require('../controllers/auth');
const Router = require("express").Router();
const isAuthenticated  = require('../middleware/auth').isAuthenticated

Router.post("/signup", authController.signUp);
Router.post("/localsignin", authController.signIn);


module.exports = Router;