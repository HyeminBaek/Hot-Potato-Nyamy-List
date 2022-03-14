const router = require('express').Router(); 
import {create,} from '../controller/controller.js';

// Create
router.post('/bacccine', create); 

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
