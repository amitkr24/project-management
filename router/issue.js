const express  = require('express');
const router   = express.Router();

//controller
const issueController = require('../controllers/issue_controller'); // issue controller added
console.log('router loaded2');

//issue router
router.all('/:id',issueController.index);                   // listing of issue route
router.get('/create/:id',issueController.issueCreate);      // creating route for issue
router.post('/issue/add_issue', issueController.addIssue);  // add data to db route after form submit

module.exports = router;