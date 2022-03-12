const router = require('express').Router(); 
const food = require('../controller/controller.js'); 

// Create
router.post('/bacccine', food.create); 

// Get all list
router.get('/bacccine', food.findAll); 

// Get one component by id 
router.get('/bacccine/:id', food.findOne); 

// Update
router.put('/bacccine/clear/:id', food.clear); 
router.put('/bacccine/unclear/:id', food.unclear); 

// Delete
router.delete('/bacccine/:id', food.delete); 

module.exports = router;
