const { Project } = require("../models/project.model");

module.exports.create = async (request, response) => {
    try {
        const { description, dueDate } = request.body;
        const project = await Project.create({
            description,
            dueDate,
            status: 'todo'
        });
        response.status(200);
        response.json(project);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.update = async (request, response) => {
    try {
        console.log(request.params.id)
        const project = await Project.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true });
        response.status(200);
        response.json(project);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

//este es el delete
module.exports.delete = async (request, response) => {
    try {
        const project = await Project.deleteOne({ _id: request.params.id});
        response.status(200);
        response.json(project);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAll = async (request, response) => {
    try {
        const toDoProjects = await Project.find({
            $where: function () {
                return this.status === 'todo';
            }
        }).sort({dueDate: +1});
        const inProgressProjects = await Project.find({
            $where: function () {
                return this.status === 'inprogress';
            }
        }).sort({dueDate: +1});
        const completedProjects = await Project.find({
            $where: function () {
                return this.status === 'completed';
            }
        }).sort({dueDate: +1});
        const projects = {
            todo: toDoProjects,
            inProgress: inProgressProjects,
            completed: completedProjects
        }
        response.status(200);
        response.json(projects);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

