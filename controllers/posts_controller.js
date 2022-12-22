const Post = require('../models/post');
const comment=require('../models/comment');

module.exports.create = function(req, res){
    Post.create({
        content: req.body.content,
        user: req.user._id
    
    }, function(err, post){
        if(err){console.log('error in creating a post'); return;}

        return res.redirect('back');
    });
}  

module.exports.destroy=function(req,res){
    //(err,post) is for if we het a post
    Post.findById(req.params.id,function(err,post){
        //.id means converting the object id to strings
        if(post.user==req.user.id){
            post.remove();
            comment.deleteMany({post:req.params.id},function(err){
                return res.redirect('back');
            });
        }else{
            return res.redirect('back');
        }
    });
}