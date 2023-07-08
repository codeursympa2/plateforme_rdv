const {Specialite }= require('../models/specialite_model');

exports.create=(req,res,next)=>{
     
    const specialite=new Specialite({
      ...req.body,
    });
   
    specialite.save()
    .then(
      (obj)=> res.status(201).json({
        "message":"Specialite créée !",
        "value":true,
        "objet":obj
      })
    )
    .catch(
      error => res.status(400).json({
        "message":"Cette spécialité existe dejà.",
        "value":false
      })
    )
      
  }
  
exports.getOne=(req,res,next) => {
    Specialite.findOne({_id:req.params.id})
    .then(object=> res.status(200).json(object))
    .catch( error => res.status(400).json(error))
}

exports.modify=(req,res,next) => {
    const specObject = { ...req.body };

    Specialite.findOne({_id: req.params.id})
        .then((obj) => {
            Specialite.updateOne({ _id: req.params.id}, { ...specObject, _id: req.params.id})
            .then(()=> res.status(200).json({
                "message":"Objet modifié !",
                "Specialite":specObject
            }))
            .catch( (error) => res.status(400).json({"message":"Cette spécialité existe dejà."}))
        })
        .catch((error) => {
            res.status(400).json({ "message":"Cette spécialité n'existe pas."});
        });
}

exports.delete=(req,res,next)=>{
    Specialite.deleteOne({_id:req.params.id})
    .then(()=> res.status(200).json({"message":"Specialité supprimé !"}))
    .catch( (error) => res.status(400).json(error))
}

exports.getAll=(req,res,next)=>{
  Specialite.find()
  .then(objects=> res.status(200).json(objects))
  .catch(
    error => res.status(400).json(error)
  )
  
}
