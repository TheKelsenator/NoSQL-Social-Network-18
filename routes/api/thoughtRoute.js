const express = require('express');
const router = express.Router();
const thoughtController = require('../../controllers/thought');

router.post('/', thoughtController.createThought);

router.get('/', thoughtController.getThoughts);

router.get('/:id', thoughtController.getThoughtId);

router.put('/:id', thoughtController.updateThought);

router.delete('/:id', thoughtController.deleteThought);


module.exports = router;