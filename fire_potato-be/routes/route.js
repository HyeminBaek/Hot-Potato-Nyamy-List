import express from 'express';
import {create,findAll,findOne,clear,unclear,deleteObj} from '../controller/controller.js';

//라우터 객체 참조
const router = express.Router();

// Create
router.route('/bacccine').post(create); 

// Get all list
router.route('/bacccine').get(findAll); 

// Get one component by id 
router.route('/bacccine/:id').get(findOne); 

// Update
router.route('/bacccine/clear/:id').put(clear); 
router.route('/bacccine/unclear/:id').put(unclear); 

// Delete
router.route('/bacccine/:id').delete(deleteObj); 

export {router};