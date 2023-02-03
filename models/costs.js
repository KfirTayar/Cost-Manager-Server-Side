const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CostsSchema = new Schema({

    user_id : {
        type: Number
    },

    year : {
        type : Number
    },

    month : {
        type : String
    },

    day : {
        type : Number
    },

    description : {
        type : String
    },

    category : {
        type : String
    },

    sum:{
        type: Number
    }
});

const Costs = mongoose.model('costs', CostsSchema);

module.exports = Costs;