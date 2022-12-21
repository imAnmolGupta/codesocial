const { request } = require('express');
const express=require('express');

const router= express.Router();

const homeController=require('../controllers/home_controller');

console.log('router loaded');

//to access homecontroller.js if there is nothing after /
router.get('/',homeController.home);

//if there is users after / then go to the neighbour 
//first create required .ejs view. Then setup the controller action. In the last set the route and render. 
router.use('/users',require('./users'));

// for any further routes access from here (router.use('/', ___))

router.use('/posts',require('./posts'));
router.use('/comments',require('./comments'));

module.exports=router; 
  