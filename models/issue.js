const mongoose      = require('mongoose') // mongoose require
const issueSchema   = new mongoose.Schema({
    // name of issue
    name: {
        type: String,
        requied: true,
      },
    
    // author who create issue
    author: {
        type: String,
        requied: true,
    },
    
    //description of issue
    description: {
        type: String,
    },

    // project id which related to issue
    project_id: {
        type: String,
    },

   // labels for issue
    label:[{
        type:mongoose.Schema.Types.ObjectId,
        ref :'label'
    }],
    //project related to issue
    projects: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }
    
},
// creadted and updated date added
{
    timestamps: true
})
const Issue = mongoose.model("Issue", issueSchema);
module.exports = Issue;
