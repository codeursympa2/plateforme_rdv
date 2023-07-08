const express = require('express');

//Pour rendre notre dossier image statique
const path = require('path');


//Création de lapplication express; 
const app=express();
//
const mongodb=require('./database/database');


 



//
//app.set('view engine', 'ejs');
//
//app.use('/css',express.static(path.join('./routes/specialisation_routes','node_modules','bootstrap','dist','css'))) 

//On peut aussi utiliser body parser
app.use(express.json());


//Pour debloquer le systeme de sécurité Cross Origin Resource Sharing (CROSS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Declaration des images en tant que fichiers statiques
//app.use('/images', express.static(path.join(__dirname, 'images')));
//
const medecinRoutes = require('./routes/medecin_routes');
const specialisationRoutes = require('./routes/specialisation_routes');
const evaluationRoutes = require('./routes/evaluation_routes');
const localisationRoutes = require('./routes/localisation_routes');
const userRoutes = require('./routes/utilisateur_routes');
const rdvRoutes = require('./routes/rdv_routes');

//  
app.use('/api/medecin', medecinRoutes);
app.use('/api/specialite', specialisationRoutes);
app.use('/api/evaluation', evaluationRoutes);
app.use('/api/localisation', localisationRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/rdv', rdvRoutes);


//On l'exporte pour qu'il soit accessible
module.exports=app;