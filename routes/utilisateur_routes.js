const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/utilisateur_controller');

router.get('/', ctrl.getAll);
router.post('/signup', ctrl.signup);
router.post('/login', ctrl.login);
router.get('/:id', ctrl.getOne);
router.put('/:id', ctrl.modify);
router.delete('/:id',ctrl.delete);

module.exports = router;