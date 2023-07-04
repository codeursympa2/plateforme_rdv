const Rdv = require('../models/rdv_model');

exports.create=async (req,res,next)=>{
   
    const rdvObject=new Rdv({
      ...req.body,
    });
  
    await rdvObject.save()
    .then(
      (obj)=> res.status(201).json({
        "message":"Rdv créé !",
        "objet":obj
      })
    )
    .catch(
      error => res.status(400).json(error)
    )}
  
exports.getOne=async (req,res,next) => {
    await Rdv.findOne({_id:req.params.id})
    .then(object=> res.status(200).json(object))
    .catch( () => res.status(400).json({"message":"Not found"}))
}

exports.modify=(req,res,next) => {
    const rdvObject = { ...req.body };

    Rdv.findOne({_id: req.params.id})
        .then((obj) => {
            Rdv.updateOne({ _id: req.params.id}, { ...rdvObject, _id: req.params.id})
            .then(()=> res.status(200).json({
                "message":"Objet modifié !",
                "Rdv":rdvObject
            }))
            .catch( error => res.status(400).json({"error :":error}))
        })
        .catch((error) => {
            res.status(400).json({ "message":"Cette spécialité n'existe pas."});
        });
}

exports.delete=async (req,res,next)=>{
    await Rdv.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ "message":"Rdv supprimé."}))
    .catch(() => res.status(400).json({ "message":"Echec de la suppression."}));
}

exports.getAll=(req,res,next)=>{
  Rdv.find()
  .then(objects=> res.status(200).json(objects))
  
  .catch(
    () => res.status(400).json({"message":"Pas de d'Rdv"})
  )
}
