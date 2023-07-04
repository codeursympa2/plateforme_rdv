const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const specialiteSchema=mongoose.Schema({
    nom: { type: String, required: true,unique:true },
    taxe_plateforme: {
        type: mongoose.Decimal128,
        default: 0,
        required:true
    },
})

specialiteSchema.plugin(uniqueValidator);


const Specialite=mongoose.model("Specialite",specialiteSchema)
module.exports={Specialite,specialiteSchema};
