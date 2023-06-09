const LocalStrategy = require("passport-local").Strategy;
const User = require("./db").user;
const bcrypt = require("bcrypt");


const localStrategy = new LocalStrategy({
	usernameField: "email",
	passwordField: "password"
},async (email, password,done)=>{
	const user = await User.findOne({where: {email: email}});
	if(!user){
		return done(null, false, {message: "User not found"});
	}
	if(bcrypt.compareSync(password, user.password)){
		return done(null, user);
	}
	else{
		return done(null, false, {message:"Incorrect password"});
	}
});

module.exports = localStrategy;