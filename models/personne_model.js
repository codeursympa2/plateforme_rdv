const mongoose = require('mongoose');


const  {localisationSchema}=require('./localisation_model');

const personneSchema=mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    date_naissance: { type: Date, required: true },
    genre: {
        type: String,
        enum : ['Masculin','Féminin',],
        required:true
    },
    telephone:{type: Number,required:true},
    localisation:{
        type: localisationSchema,
        ref:'Localisation',
        required:true
      },
},
    {
        timestamps: {
            createdAt: 'created_at', 
            updatedAt: 'updated_at' 
          }
    }
    
    )

    const personneAdminSchema=mongoose.Schema({
        nom: { type: String, required: true },
        prenom: { type: String, required: true },
        genre: {
            type: String,
            enum : ['Masculin','Féminin',],
            required:true
        },
        localisation:{
            type: localisationSchema,
            ref:'Localisation',
            required:true
          },
    },
        {
            timestamps: {
                createdAt: 'created_at', 
                updatedAt: 'updated_at' 
              }
        }
        
        )

module.exports={personneSchema,personneAdminSchema}