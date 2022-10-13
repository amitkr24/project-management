const User  = require('../models/user');
let session = require('express-session'); 
module.exports.login = function(req,res){
    if(req.cookies.user_id){
        return res.redirect('/project');
    }else{
        res.render('../view/login')
    }
    
};
module.exports.register = function(req,res){
    res.render('../view/user/add-user')
};
module.exports.create = function(req,res){
    if(req.body.password  != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err,user){
        if(err){ console.log('error in finding user in signing up'); return }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){ console.log('error in creating user in signing up'); return }
                return res.redirect('/');
            })
        }else {
            return res.redirect('back');
        }
    });
};

module.exports.check_user = function(req,res){
    
    User.findOne({email: req.body.email}, function(err,user){
        
        if(err){
            console.log('error in fetching contact from db');
            return ;
        }
        if(user.password!=req.body.password){
            return res.redirect('back');
        }else {
            res.cookie('user_id', user.id);
            return res.redirect('/project',);
        }
    });
};

module.exports.logout = function(req,res){
    res.clearCookie("user_id");
    res.redirect('./login');
    res.end()
    
};

