
const express = require('express');
const router  = express.Router();

//controller for listing
const userController  = require('../controllers/user_controller'); // project controller added

//router
//router.get('/',userController.login); 
//router.get('/logout',userController.logout); 
//router.post('/check_user',userController.check_user);   
router.get('/list',userController.index);     
router.get('/:id/edit',userController.show);     
router.get('/register',userController.register);        
router.post('/create',userController.create);
router.post('/update',userController.updateUser);
router.get('/destroy/:id',userController.destroy);

module.exports = router;