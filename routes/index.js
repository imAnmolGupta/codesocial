const express=require('express');

const router= express.Router();

const homeController=require('../controllers/home_controller');

console.log('router loaded');

//to access homecontroller.js if there is nothing after /
router.get('/',homeController.home);

//if there is users after / then go to the neighbour 
router.use('/users',require('./users'));

// for any further routes access from here (router.use('/', ___))

module.exports=router; 
 