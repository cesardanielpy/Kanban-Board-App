const mongoose = require('mongoose');
mongoose.set('strictQuery',false)
mongoose.connect("mongodb://127.0.0.1:27017/Kanban-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Estableció una conexión a la base de datos"))
    .catch(err => console.log("Algo salió mal al conectarse a la base de datos", err));
