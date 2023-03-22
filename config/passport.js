const passport = require("passport");
const LocalStrategy = require("./localStratergy")
const JWTStrategy = require("./jwtStratergy")
const db = require("./db")

passport.serializeUser((user, done) =>{
	done(null, user.id);
})

passport.deserializeUser(async (userId, done)=>{
	const user = await db.user.findOne({where:{id: userId}});
	delete user.password;
	done(null, user);
})


passport.use(LocalStrategy);
passport.use("jwt", JWTStrategy);

module.exports = passport;