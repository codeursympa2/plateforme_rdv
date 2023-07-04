const {Utilisateur,} = require('../models/utilisateur_model');
//
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new Utilisateur({
        email: req.body.email,
        password: hash,
        nom: req.body.nom,
        prenom: req.body.prenom,
        date_naissance: req.body.date_naissance,
        genre: req.body.genre,
        telephone:req.body.telephone,
        nationalite:req.body.nationalite,
        localisation:req.body.localisation,
        groupe_sanguin:req.body.groupe_sanguin,
        role:req.body.role,
        last_connection:req.body.last_connection,
        online:req.body.online,
        status:req.body.status,
       
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé avec succès !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ "message":"erreur du hashage: "+error}));
};

exports.login = (req, res, next) => {
    Utilisateur.findOne({ email: req.body.email })
       .then(user => {
           if (!user) {
               return res.status(401).json({ message: 'Email ou mot de passe incorrecte'});
           }
           bcrypt.compare(req.body.password, user.password)
               .then(valid => {
                   if (!valid) {
                       return res.status(401).json({ message: 'Email ou mot de passe incorrecte' });
                   }
                   res.status(200).json({
                       userId: user._id,
                       token: jwt.sign(
                        { userId: user._id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                    )
                   });
               })
               .catch(error => res.status(500).json({ error }));
       })
       .catch(error => res.status(500).json({ error }));
};

exports.getOne=async (req,res,next) => {
    await Utilisateur.findOne({_id:req.params.id})
    .then(object=> res.status(200).json(object))
    .catch( () => res.status(400).json({"message":"Not found"}))
}


exports.modify=(req,res,next) => {

    //Recherche de l'utilisateur
    Utilisateur.findOne({_id: req.params.id})
        .then(obj => {
            //Comparaison des mots de passe
            bcrypt.compare(req.body.password, obj.password)
            .then(value=>{
                //Si les deux mot de passes correspondent on hash le nouveau mot de passe
                if (value) {
                    //On hash 
                    bcrypt.hash(req.body.new_password, 10)
                        .then(
                            //On fait la mis à jour
                            hash=>Utilisateur.updateOne({ _id: req.params.id}, 
                                { 
                                    email: req.body.email,
                                    password: hash,
                                    nom: req.body.nom,
                                    prenom: req.body.prenom,
                                    date_naissance: req.body.date_naissance,
                                    genre: req.body.genre,
                                    telephone:req.body.telephone,
                                    nationalite:req.body.nationalite,
                                    localisation:req.body.localisation,
                                    groupe_sanguin:req.body.groupe_sanguin,
                                    role:req.body.role,
                                    last_connection:req.body.last_connection,
                                    online:req.body.online,
                                    status:req.body.status})
                                .then(obj=> res.status(200).json({
                                    "message":"Objet modifié !",
                                    "obj":obj
                                }))
                                .catch( error => res.status(400).json({"message":"Echec de la modification"}))
                        )
                        .catch(()=> res.status(400).json({"message":"Echec du hashage"}))
                 } else{
                     res.status(400).json({"message":"Les deux mots de passe ne correspondent pas "})
                 }
                })

           
        })
        .catch((error) => {
            res.status(400).json({ "message":"Cet utilisateur n'existe pas: "+error});
        });
}

exports.delete=async (req,res,next)=>{
    await Utilisateur.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ "message":"Utilisateur supprimé."}))
    .catch(() => res.status(400).json({ "message":"Echec de la suppression."}));
}

exports.getAll=(req,res,next)=>{
  Utilisateur.find()
  .then(objects=> res.status(200).json(objects))
  
  .catch(
    () => res.status(400).json({"message":"Pas d'utilisateur"})
  )
}