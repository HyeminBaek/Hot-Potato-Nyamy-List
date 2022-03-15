import { config } from '../config/config.js';
import mongoose from "mongoose";
import food from "./food.js";

const db = {};
db.mongoose = mongoose; 
db.url = config.url; 
db.food = food;

export default {db};