
const express = require('express');
const router  = express.Router();

//controller for listing
const userController  = require('../controllers/user_controller'); // project controller added

//router
router.get('/',userController.login);        
router.get('/register',userController.register);        
router.post('/create',userController.create);
router.post('/check_user',userController.check_user);
router.get('/logout',userController.logout);

module.exports = router;