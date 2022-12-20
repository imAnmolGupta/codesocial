const Post = require('../models/post');

module.exports.home=function(req,res){
    // console.log(req.cookies);
    // res.cookie('user_id',333888);
    //{} will return all the posts
    // Post.find({},function(err,posts){
    //     return res.render('home',{
    //         title:"CodeSocial || home",
    //         posts:posts
    //     });
    // });

    //populate user of each post
    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home',{
                    title:"CodeSocial || home",
                    posts:posts
                });
    })
} 