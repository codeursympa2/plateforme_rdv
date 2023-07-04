const mongoose = require('mongoose');

const  {specialiteSchemaMed}=require('./specialite_model');
const  {personneSchema}=require('./personne_model');

const medecinSchema=mongoose.Schema({
    tarif_service:{type: mongoose.Decimal128,required:true},
    specialite:{
        type: specialiteSchemaMed,
        required:true
      } 
})

medecinSchema.add(personneSchema)

const Medecin=mongoose.model("Medecin",medecinSchema);
module.exports={Medecin,medecinSchema}