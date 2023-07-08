const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/utilisateur_controller');
const auth = require('../middleware/auth');

router.get('/',auth, ctrl.getAll);
router.post('/signup',auth, ctrl.signup);
router.post('/login',auth, ctrl.login);
router.get('/:id',auth, ctrl.getOne);
router.put('/:id',auth, ctrl.modify);
router.delete('/:id',auth,ctrl.delete);

module.exports = router;