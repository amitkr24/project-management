
const express = require('express');
const router  = express.Router();

var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  }
})
var upload = multer({ storage: storage});

//controller for listing
const userController  = require('../controllers/user_controller'); // project controller added

//router
//router.get('/',userController.login); 
//router.get('/logout',userController.logout); 
//router.post('/check_user',userController.check_user);   
router.get('/list',userController.index);     
router.get('/:id/edit',userController.show);     
router.get('/register',userController.register);        
router.post('/create',upload.single('avatar'),userController.create);
router.post('/:id/update', upload.single('avatar'), userController.updateUser);
router.get('/destroy/:id',userController.destroy);

module.exports = router;