const express = require('express');

//Pour rendre notre dossier image statique
const path = require('path');


//Création de lapplication express;
const app=express();
//
const mongodb=require('./database/database');

//
app.set('view engine', 'ejs');

//On peut aussi utiliser body parser
app.use(express.json());

//Pour debloquer le systeme de sécurité Cross Origin Resource Sharing (CROSS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Declaration des images en tant que fichiers statiques
app.use('/images', express.static(path.join(__dirname, 'images')));
//
const medecinRoutes = require('./routes/medecin_routes');
const specialisationRoutes = require('./routes/specialisation_routes');
const evaluationRoutes = require('./routes/evaluation_routes');
const localisationRoutes = require('./routes/localisation_routes');
const userRoutes = require('./routes/utilisateur_routes');
const rdvRoutes = require('./routes/rdv_routes');

//
app.use('/medecin', medecinRoutes);
app.use('/specialite', specialisationRoutes);
app.use('/evaluation', evaluationRoutes);
app.use('/localisation', localisationRoutes);
app.use('/auth', userRoutes);
app.use('/rdv', rdvRoutes);


//On l'exporte pour qu'il soit accessible
module.exports=app;