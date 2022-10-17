const User  = require('../models/user');
let session = require('express-session'); 


module.exports.index = async function(req,res){
    try{
        let user= await User.find({}).sort("createdAt");
        return res.render('../view/user/index',{data:user});
        //console.log(user);
    }
    catch(err){
        return res.status(500).json({
        message:'Internal Server Error'
      })
    }
};

module.exports.register = function(req,res){
    res.render('../view/user/add-user')
};

module.exports.create = async function(req,res){
    try {
        let user = await User.findOne({email:req.body.email}); 
        console.log(user);
        console.log(user.email);
        console.log(req.body.email);
        if(user.email == req.body.email){
            console.log('test');
            req.flash('error','Email Should be unique !');
            return res.redirect('/list');
        }
        if(!user){
            req.body.avatar = req.file.filename;
            let userAdded = await User.create(req.body);
            req.flash('success','User Created Successfully !');
            return res.redirect('/list');
        }
    } catch {
        return res.json(500, {
            message: 'Internal Server Error'
        })
    }
}

// module.exports.check_user = function(req,res){
//     User.findOne({email: req.body.email}, function(err,user){
//         if(err){
//             console.log('error in fetching contact from db');
//             return ;
//         }
//         if(user.password!=req.body.password){
//             return res.redirect('back');
//         }else {
//             res.cookie('user_id', user.id);
//             return res.redirect('/project',);
//         }
//     });
// };

module.exports.show = async function(req,res){
    try {
        var id = await new require('mongodb').ObjectID(req.params.id);
        let user = await User.findOne({'_id':id});
        if(user){
            return res.render('../view/user/edit-user',{user:user,id:id});
        }
    } catch {
        return res.json(500, {
            message: 'Internal Server Error'
        })
    }
    
};

 //update project
 module.exports.updateUser = async function(req,res){
    try {
        let id = await req.params.id;
        let data = await req.body;
        if(req.file){
            data.avatar = req.file.filename;
        }
        let updated = await User.findByIdAndUpdate(id,data);
        req.flash('success','User Updated Successfully !');
        return res.redirect('/list');
    } catch {
        return res.json(500, {
            message: 'Internal Server Error'
        })
    }
 }

 module.exports.destroy = async function(req,res){
    try {
        let uid = await req.params.id;
        let destroy = await User.findByIdAndDelete(uid);
        return res.redirect('/list');
    } catch {
        return res.json(500, {
            message: 'Internal Server Error'
        })
    }
 }
// module.exports.logout = function(req,res){
//     res.clearCookie("user_id");
//     res.redirect('./login');
//     res.end()
// };

