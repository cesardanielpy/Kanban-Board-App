const ProjectController = require('../controllers/projects.controller');
module.exports = function(app){
    app.post('/api/projects', ProjectController.create);
    app.put('/api/projects/:id', ProjectController.update);
    app.get('/api/projects', ProjectController.getAll);
    app.delete('/api/projects/:id', ProjectController.delete);


}
