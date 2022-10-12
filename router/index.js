const express         = require('express');
const router          = express.Router();
const db              = require('../config/mongoose'); // included mongooose for 

console.log('router loaded');


router.use('/',require('./user'));    // route added for label
router.use('/project',require('./project'));    // route added for label

module.exports = router;