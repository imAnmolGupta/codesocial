// const { use } = require('passport');
const User=require('../models/user');

module.exports.profile = function(req, res){
    User.findById(req.params.id,function(err,user){
        return res.render('user_profile', {
            title: 'User Profile',
            profile_user:user
        });
    });
}

module.exports.update = async function(req, res){
    // if(req.user.id == req.params.id){
    //     User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
    //         return res.redirect('back');
    //     });
    // }else{
    //     return res.status(401).send('Unauthorized');
    // }
    if(req.user.id == req.params.id){
        try{

            let user=await User.findByIdAndUpdate(req.params.id);
            User.uploadedAvatar(req,res,function(err){
                if(err){console.log('*****Multer Error: ',err)}
                console.log(req.file);

                user.name=req.body.name;
                user.email=req.body.email;

                if(req.file){ 
                    //this is saving the path of the uploaded file into the avatar field in the user
                    user.avatar = User.avatarPath + '/' + req.file.filename;
                    
                }
                user.save();
                return res.redirect('back');
                
            });

        }catch(err){
            req.flash('error', err);
            return res.redirect('back');
        }
    }else{
        return res.status(401).send('Unauthorized');
    }
}

// to render sign up ejs page
module.exports.signUp=function(req,res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up',{
        title:"Codesocial || Sign Up"
    });
}

module.exports.signIn=function(req,res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in',{
        title:"Codesocial || Sign In"
    });
}

//to get the sign-up data
module.exports.create=function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('Error in finding user while signing up'); return}

        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('Error in finding user while signing up'); return}
                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    })
}
//for sign in data
module.exports.createSession=function(req,res){
    req.flash('success','Logged in successfullly');
    return res.redirect('/');    
}  
// module.exports.destroySession = function(req, res){
//     req.logout();
//     req.flash('success','Logged out successfullly');
//     return res.redirect('/');
// }
module.exports.destroySession=function(req,res){
    req.logout(function(err) {
        if (err) { return next(err); }
        else{
            req.flash('success','Logged out successfullly');
            res.redirect('/');
        }
    });
}
