const express = require('express');
const router  = express.Router();

//controller for listing
const projectController  = require('../controllers/project_controller'); // project controller added

//router
router.get('/',projectController.project);         // fetch project route
// router.get('/create',homeController.create);    // create project route
// router.post('/add_project', homeController.add_project); // add project to db after form submit
// router.get('/:id/edit',homeController.editProject);  // edit project 
// router.post('/:id/update_project',homeController.updateProject); // update project
// router.get('/destroy/:id',homeController.deleteProject);  // destroy project route

module.exports = router;