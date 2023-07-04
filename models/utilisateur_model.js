const mongoose = require('mongoose');

const {personneSchema}=require('./personne_model')
const uniqueValidator = require('mongoose-unique-validator');

const utilisateurSchema=mongoose.Schema({
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    nationalite:{type: String},
    groupe_sanguin:{
        type: String,
        enum:['A+',' A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        default:'O-',
    },
    role:{
        type: String,
        enum : ['user','admin',],
        default: 'user',
        required:true
    },
    last_connection:{type:Date,default:Date.now},
    online:{type:Boolean,default:false},
    status:{type:Boolean,default:true}
});

const utilisateurMedSchema=mongoose.Schema({
    nationalite:{type: String,required:true},
    groupe_sanguin:{
        type: String,
        enum:['A+',' A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        default:'O-',
        required:true
    },
    role:{
        type: String,
        enum : ['user','admin',],
        default: 'user',
        required:true
    },
    
});
//mongoose.Schema.Types.ObjectId

utilisateurSchema.add(personneSchema)
utilisateurMedSchema.add(personneSchema)

utilisateurSchema.plugin(uniqueValidator);

const Utilisateur=mongoose.model("Utilisateur",utilisateurSchema)

module.exports={Utilisateur,utilisateurSchema,utilisateurMedSchema}