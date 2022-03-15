import mongoose from "mongoose"; // for mongoDB

const Schema = mongoose.Schema;
 
const food = new Schema({
    name: String,
    order: {
        type: Number,
        unique: true
    },
    is_clear: {
        type: Boolean,
        default: false
    },
    created_data: {
        type: Date,
        default: Date.now
    },
    created_by: {
        type: String,
        default: "bacccine"
    }
});

food.set('collection', 'food'); // collection 이름 정하기
mongoose.model('food', food);

export default { food };