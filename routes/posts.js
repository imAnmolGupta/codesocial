const express=require('express');
const router= express.Router();
const passport=require('passport');

const postsController=require('../controllers/posts_controller');

//form is going to be submitted
//passport.checkAuthentication is to make sure that only signed in user can post
router.post('/create',passport.checkAuthentication,postsController.create);
router.get('/destroy/:id',passport.checkAuthentication,postsController.destroy);

module.exports=router;

