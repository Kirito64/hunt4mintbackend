const JWTPassport = require("passport-jwt")
const User = require("./db").user;
const ExtractJWT = JWTPassport.ExtractJwt;
const JWTStratergy = JWTPassport.Strategy;
const jwtSecret = "agkjaslhdgaelghjwds9ighasdg";

let jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = jwtSecret;

const stratergy =new JWTStratergy(jwtOptions, async(jwt_payload, done)=>{
	try{
		const user = await User.findOne({
			email: jwt_payload.email,
		});
		if(user){
			console.log("user Found")
			done(null, user)
		}
		else{
			console.log("User not found")
			done(null, false)
		}
	}
	catch(err){
		console.log(err);
		done(err, false)
	}
})

module.exports = stratergy;