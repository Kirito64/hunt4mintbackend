const authController = require('../controllers/auth');
const Router = require("express").Router();
const isAuthenticated  = require('../middleware/auth').isAuthenticated

Router.post("/signup", authController.signUp);
Router.post("/localsignin", authController.signIn);
Router.get("/getUser", isAuthenticated, (req, res)=>{

	if(req.user){
		res.status(200).send(req.user)
	}
	else{
		res.status(403).send({message: "user not found"})
	}
});

module.exports = Router;