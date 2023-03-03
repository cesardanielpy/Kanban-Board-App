const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    description: {
        type: String,
        required: 'Required',
        minlength:[3, 'Too short!.']
    },
    dueDate:{
        type: Date,
        required: 'Required',
    },
    status:{
        type: String,
        required: 'Required',
    }
}, { timestamps: true });
module.exports.Project = mongoose.model('Project', ProjectSchema);


