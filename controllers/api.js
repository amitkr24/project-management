const User  = require('../models/user');
let session = require('express-session'); 


module.exports.index = async function(req,res){
    try{
        let user= await User.find({}).sort("createdAt");
        //return res.render('../view/user/index',{data:user});
        //console.log(user);
        return res.status(405).json({
            message: 'All user data',
            data:{
                userdata:user
            }
        })
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
        let user = await User.findOne({email: req.body.email});
        let email = user.email;
        let phone = user.email; 
        if(!user){
            let userAdded = await User.create(req.body);
            //return res.redirect('/list');
            return res.status(405).json({
                message: 'User Created Successfully',
                data:{
                    userdata:userAdded
                }
            })
        }else {
            if(email == req.body.email){
                return res.status(405).json({
                    message: 'Email Already Exist',
                })
            }else if(phone == req.body.phone){
                return res.status(405).json({
                    message: 'Phone number Already Exist',
                })
            }
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
        console.log(req.params.id);
        let id = await req.params.id;
        let data = await req.body;
        let updated = await User.findByIdAndUpdate(id,data);
        //return res.redirect('/list');
        return res.status(405).json({
            message: 'User Updated Successfully',
            data:{
                userdata:data
            }
        })
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
        //return res.redirect('/list');
        return res.status(405).json({
            message: 'User Deleted Successfully',
            data:{
                userdata:destroy
            }
        })

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

