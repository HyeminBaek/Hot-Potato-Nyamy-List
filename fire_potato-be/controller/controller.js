const db = require('../models/index.js'); 
const Food = db.food; 

// Create
export const create = async (req, res) => { //req,res가 왜 매개변수로 들어갈까?
    const food = new Food({ 
        name: req.body.name, 
        created_by: req.body.created_by
    }); 
    
    Food.save(food) 
    .then(data => { 
        res.send(data); 
    }) 
    .catch(err => { 
        res.status(500).send({  message: err.message  }); 
    }); 
}; 

// Get all list
export const findAll = (req, res) => { 
    Food.find() 
    .then(data => { 
        res.send(data); 
    }) 
    .catch(err => { 
        res.status(500).send({ message: err.message }); 
    }); 
}; 

// Get one component by id 
export const findOne = (req, res) => { 
    const id = req.params.id; 
    
    Food.findById(id) .then(data => { 
        if (!data) { 
            res.status(404).send({ message: 'Not find' }); 
        } else { 
            res.send(data); 
        } }) 
        .catch(err => { 
            res.status(500).send({ message: err.message }); 
    }); 
}; 

// Update
export const clear = (req, res) => { 
    const id = req.params.id; 
    
    Food.findByIdAndUpdate(id, req.body, { is_clear: true }) 
    .then(data => { 
        if (!data) { 
            res.status(404).send({ message: 'Update Fail' }); 
        } else { 
            res.send({ message: 'Success' }); 
        } 
    }) 
    .catch(err => { 
        res.status(500).send({ message: err.message }); 
    }); 
}; 
export const unclear = (req, res) => { 
    const id = req.params.id; 
    
    Food.findByIdAndUpdate(id, req.body, { is_clear: false }) 
    .then(data => { 
        if (!data) { 
            res.status(404).send({ message: 'Update Fail' }); 
        } else { 
            res.send({ message: 'Success' }); 
        } 
    }) 
    .catch(err => { 
        res.status(500).send({ message: err.message }); 
    }); 
}; 
// Delete
export const deleteObj = (req, res) => {
    const id = req.params.id; 

    Food.findByIdAndRemove(id) 
    .then(data => { 
        if (!data) { 
            res.status(404).send({ message: 'Delete Fail' }); 
        } else { 
            res.send({ message: 'Delete success'}); 
        } 
    }) 
    .catch(err => { 
        res.status(500).send({ message: err.message }); 
    }); 
};
