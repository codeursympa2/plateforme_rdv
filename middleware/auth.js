const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
// sourcery skip: use-object-destructuring
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
       res.status(401).json({ "erreur": error });
   }
};