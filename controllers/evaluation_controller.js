const Evaluation = require('../models/evaluation_model');

exports.create=async (req,res,next)=>{
   
    const evaObject=new Evaluation({
      ...req.body,
    });
  
    await evaObject.save()
    .then(
      (obj)=> res.status(201).json({
        "message":"Evaluation créée !",
        "objet":obj
      })
    )
    .catch(
      error => res.status(400).json(error)
    )}
  
exports.getOne=async (req,res,next) => {
    await Evaluation.findOne({_id:req.params.id})
    .then(object=> res.status(200).json(object))
    .catch( () => res.status(400).json({"message":"Not found"}))
}

exports.modify=(req,res,next) => {
    const evaObject = { ...req.body };

    Evaluation.findOne({_id: req.params.id})
        .then((obj) => {
            Evaluation.updateOne({ _id: req.params.id}, { ...evaObject, _id: req.params.id})
            .then(()=> res.status(200).json({
                "message":"Objet modifié !",
                "Evaluation":evaObject
            }))
            .catch( error => res.status(400).json({"error :":error}))
        })
        .catch((error) => {
            res.status(400).json({ "message":"Cette spécialité n'existe pas."});
        });
}

exports.delete=async (req,res,next)=>{
    await Evaluation.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ "message":"Evaluation supprimé."}))
    .catch(() => res.status(400).json({ "message":"Echec de la suppression."}));
}

exports.getAll=(req,res,next)=>{
  Evaluation.find()
  .then(objects=> res.status(200).json(objects))
  
  .catch(
    () => res.status(400).json({"message":"Pas de d'evaluation"})
  )
}
