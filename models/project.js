const mongoose      = require('mongoose')
const projectSchema = new mongoose.Schema({

    //name of the project
    name: {
        type: String,
        requied: true,
      },

    //author name of project
    author: {
        type: String,
        requied: true,
    },

    //description name
    description: {
        type: String,
    }
},
// creadted and updated date added

{
    timestamps: true
})
const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
