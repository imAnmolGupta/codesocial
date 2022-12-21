const mongoose=require('mongoose');
// const { use } = require('passport');

const postSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
  
    },
    //include arrays of ids of all comments in this post Schema itself
    //array makes comment fetch fast on posts
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
},{
        timestamps:true
});

const Post=mongoose.model('Post',postSchema);

module.exports=Post;

  