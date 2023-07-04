const mongoose = require('mongoose');

const  {medecinSchema}=require('./medecin_model');
const {utilisateurMedSchema}=require('./utilisateur_model');
const {evaluationSchema}=require('./evaluation_model');


const rdvSchema=mongoose.Schema({
    date_rdv: { type: Date, default:Date.now},
    etat: { type: String, required:true},
    medecin: { type: medecinSchema, required:true},
    patient:{ type:utilisateurMedSchema, required:true},
    evaluation:{ type: evaluationSchema},
    },
    {
        timestamps: {
            createdAt: 'created_at', 
            updatedAt: 'updated_at' 
          }
    }
    
)

module.exports=mongoose.model("Rdv",rdvSchema)