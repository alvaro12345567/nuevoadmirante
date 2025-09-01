const mongoose = require('mongoose');
const DB= 'mongodb+srv://amgarciav:ZTOxc8vvnSxfPTtJ@prueba3.okrwid5.mongodb.net/almirante?retryWrites=true&w=majority&appName=prueba3';
mongoose.connect(DB)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));

    module.exports = mongoose;
