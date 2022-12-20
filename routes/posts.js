const express=require('express');
const router= express.Router();

const postsController=require('../controllers/posts_controller');

//form is going to be submitted
router.post('/create',postsController.create);

module.exports=router;
