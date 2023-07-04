const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/evaluation_controller');

router.get('/', ctrl.getAll);
router.post('/', ctrl.create);
router.get('/:id', ctrl.getOne);
router.put('/:id', ctrl.modify);
router.delete('/:id',ctrl.delete);
 

module.exports = router;