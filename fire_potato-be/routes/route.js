const router = require('express').Router(); 
import {create,findAll,findOne,clear,unclear,deleteObj} from '../controller/controller.js';

// Create
router.post('/bacccine', create); 

// Get all list
router.get('/bacccine', findAll); 

// Get one component by id 
router.get('/bacccine/:id', findOne); 

// Update
router.put('/bacccine/clear/:id', clear); 
router.put('/bacccine/unclear/:id', unclear); 

// Delete
router.delete('/bacccine/:id', deleteObj); 

module.exports = router;
