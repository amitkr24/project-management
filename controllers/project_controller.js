const Project  = require('../models/project'); // include project model
const Issue  = require('../models/issue'); // include project model

//get all project
module.exports.project = function(req,res){
    if(req.cookies.user_id){
        return res.render('../view/project/index');
    }else{
        return res.redirect('/');
    }
}

//view create form
module.exports.create = function(req,res){
    res.render('../view/project/create_project');
}

//create project
module.exports.add_project = function(req,res){
    Project.create({ 
        name         : req.body.project_name,
        author       : req.body.author,
        description  : req.body.description
    }, function(err, newTask){
        console.log(newTask);
        if(err){
            console.log('error in creating a contact');
            return;
        }
        console.log('*******', newTask);
        return res.redirect('/');
    });
 }
 
 //edit record
 module.exports.editProject = function(req,res){
    var id = new require('mongodb').ObjectID(req.params.id);
    Project.findOne({'_id':id},function(err,projects){
        console.log(projects);
        if(err){
            console.log('error in fetching contact from db');
            return ;
        }
        return res.render('../view/project/edit_project',{project:projects,id:id});
    })
 }

 //update project
 module.exports.updateProject = function(req,res){
    let id = req.body.projectId;
    let data = req.body;
    Project.findByIdAndUpdate(id,data, function(err,updated_data){
       console.log(updated_data);
        return res.redirect('/');
    })
 }

 // delete project
 module.exports.deleteProject = function(req,res){
    let tid = req.params.id;
    Project.findByIdAndDelete(tid, function(err){
        if(err){
            console.log('error in deleting in object from database');
            return;
        }
    });
    return res.redirect('/');
 }

 