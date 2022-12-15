const { use } = require('passport');
const passport=require('passport');

const LocalStrategy=require('passport-local').Strategy;

const User=require('../models/user');

//authentication using passport
passport.use(new LocalStrategy({
    usernameField:'email'
    },
    function(email,password,done){
        //done is callback function returning to passport.js
        //find user and establish identity
        User.findOne({email:email},function(err,user){
            if(err){
                console.log('Error in finding user --> passport');
                return done(err);
            }

            if(!user || user.password!=password){
                console.log('Invalid username/password');
                return done(null,false);
            }

            return done(null,user);
        });
    }

));


//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
});



//deserializing the user from key in the cookie
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in finding user --> passport');
            return done(err);
        }

        return done(null,user);
    });
});



//check if the user is authenticated
passport.checkAuthentication=function(req,res,next){
    //if the user is signed in then pass on request to next function(controllers's action)
    if(req.isAuthenticated()){
        return next();
    }
    //if user is not signed in
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser=function(req,res,next){
    if (req.isAuthenticated()){
        //req.user contain the current signed in ser from the session cookie and we are just sending in to the locals for views
        res.locals.user=req.user
    }
    next();
}

module.exports=passport;
