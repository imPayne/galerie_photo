const mongoose = require('mongoose');

mongoose.set('strictQuery', false); // avoid warning message

mongoose.connect('mongodb://admin:password@localhost:27017', {dbName: 'Pictures'})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

// déclaration d'un schema
let picturesSchema = mongoose.Schema({
    originaleFileName: { type: String, required: true, index: true},
    path: { type: String, required: true},
    fileName: { type: String, required: true}
},
{ collection : 'pictures' });

// déclaration du modèle
let Pictures = mongoose.model('Pictures', picturesSchema);

// export du modèle pour utilisation ailleurs dans l'application
module.exports = Pictures;