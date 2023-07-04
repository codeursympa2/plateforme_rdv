const mongoose= require('mongoose'); 
const url="mongodb://127.0.0.1:27017/plateforme_rdv";

try {
    mongoose.connect(url, {serverSelectionTimeoutMS: 5000});
    console.log("Connecté à la base de données.")
} catch (error) {
    console.log("Erreur deconnexion au BD: "+error);
}