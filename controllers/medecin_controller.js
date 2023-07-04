
/* exports.getAll=(req,res,next)=>{
     res.status(200).render("home")
} */

const Medecin = require('../models/medecin_model');

exports.create=async (req,res,next)=>{
   
    const medObject=new Medecin({
      ...req.body,
    });
  
    await medObject.save()
    .then(
      (obj)=> res.status(201).json({
        "message":"Medecin créée !",
        "objet":obj
      })
    )
    .catch(
      error => res.status(400).json(error)
    )}
  
exports.getOne=async (req,res,next) => {
    await Medecin.findOne({_id:req.params.id})
    .then(object=> res.status(200).json(object))
    .catch( () => res.status(400).json({"message":"Not found"}))
}

exports.modify=(req,res,next) => {
    const medObject = { ...req.body };

    Medecin.findOne({_id: req.params.id})
        .then((obj) => {
            Medecin.updateOne({ _id: req.params.id}, { ...medObject, _id: req.params.id})
            .then(()=> res.status(200).json({
                "message":"Objet modifié !",
                "Medecin":medObject
            }))
            .catch( error => res.status(400).json({"error :":error}))
        })
        .catch((error) => {
            res.status(400).json({ "message":"Cette spécialité n'existe pas."});
        });
}

exports.delete=async (req,res,next)=>{
    await Medecin.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ "message":"Medecin supprimé."}))
    .catch(() => res.status(400).json({ "message":"Echec de la suppression."}));
}

exports.getAll=(req,res,next)=>{
  Medecin.find()
  .then(objects=> res.status(200).json(objects))
  
  .catch(
    () => res.status(400).json({"message":"Pas de Medecin"})
  )
}
