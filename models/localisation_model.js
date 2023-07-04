const mongoose = require('mongoose');

const localisationSchema=mongoose.Schema({
    pays: { type: String, required: true },
    ville: { type: String, required: true },
    departement: { type: String, required: true },
    code_postal: { type: String, required:false },
})

const Localisation=mongoose.model("Localisation",localisationSchema)

module.exports={Localisation,localisationSchema}

