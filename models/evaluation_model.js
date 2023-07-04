const mongoose = require('mongoose');

const evaluationSchema=mongoose.Schema({
    message: { type: String},
    rating: { type:  Number, required: true },
   },
   {
    timestamps: {
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
      }
    })
const Evaluation=mongoose.model("Evaluation",evaluationSchema)    
module.exports={Evaluation,evaluationSchema}
