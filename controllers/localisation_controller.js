const {Localisation} = require('../models/localisation_model');

exports.create=async (req,res,next)=>{
   
    const locaObject=new Localisation({
      ...req.body,
    });
  
    await locaObject.save()
    .then(
      (obj)=> res.status(201).json({
        "message":"Localisation créée !",
        "objet":obj,
        "value":true,
        
      })
    )
    .catch(
      error => res.status(400).json(error)
    )}
  
exports.getOne=async (req,res,next) => {
    await Localisation.findOne({_id:req.params.id})
    .then(object=> res.status(200).json(object))
    .catch( () => res.status(400).json({"message":"Not found"}))
}

exports.modify=(req,res,next) => {
    const locaObject = { ...req.body };

    Localisation.findOne({_id: req.params.id})
        .then((obj) => {
            Localisation.updateOne({ _id: req.params.id}, { ...locaObject, _id: req.params.id})
            .then(()=> res.status(200).json({
                "message":"Objet modifié !",
                "Localisation":locaObject
            }))
            .catch( error => res.status(400).json({"error :":error}))
        })
        .catch((error) => {
            res.status(400).json({ "message":"Cette spécialité n'existe pas."});
        });
}

exports.delete=async (req,res,next)=>{
    await Localisation.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ "message":"Localisation supprimé."}))
    .catch(() => res.status(400).json({ "message":"Echec de la suppression."}));
}

exports.getAll=(req,res,next)=>{
  Localisation.find()
  .then(objects=> res.status(200).json(objects))
  
  .catch(
    () => res.status(400).json({"message":"Pas de localisation"})
  )
}
