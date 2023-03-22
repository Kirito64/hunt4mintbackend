const User = require("../config/db").user;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport  = require("../config/passport");
const jwtSecret = "agkjaslhdgaelghjwds9ighasdg";

const signUp = async(req, res)=>{
	const usertemp = await User.findOne({email: req.body.email})

	if(usertemp){
		return res.status(400).json({
			message: "User with that email already exists",
		});
	}

	console.log(req.body)
	const hashPassword = bcrypt.hashSync(req.body.password, 10);
	
	const data = {
		email: req.body.email,
		password: hashPassword,
	}

	const result = await User.create(data);

	if(result){
		return res.status(200).json({message: "User successfully registered"})
	}
	else{
		return res.status(500).json({message: "Internal Server Error"})
	}
}


const signIn = async (req, res, next)=>{
	passport.authenticate("local", (err, user)=>{
		if(err){
			console.log(err);
			res.send({error: "something went wrong"});
		}        
		else{
			req.login(user,{session: false}, async err =>{
				if(err){
					res.status(502).send({error:"Something went wrong"});
				}
				const _user = await User.findOne({where: {
					email : user.email,
				}})
				const token = jwt.sign({email: _user.email, id: _user.id}, jwtSecret);
				return res.json({
					token: token,
					message: "user found and logged in",
				});
			});
		}
	})(req, res, next);
};


module.exports = {
	signUp,
	signIn,
}