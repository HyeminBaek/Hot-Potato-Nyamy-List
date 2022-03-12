const dbConfig = require('../config/config.js'); 
const mongoose = require('mongoose'); 

// Use Node.js native promise 
mongoose.Promise = global.Promise; 

const db = {}; 
db.mongoose = mongoose; 
db.url = dbConfig.url; 
db.food = require('./model.js')(mongoose); 

module.exports = db;
