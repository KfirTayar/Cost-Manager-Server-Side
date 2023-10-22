// Kfir Tayar

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a schema for costs in mongoDB
const CostsSchema = new Schema({

    user_id : {
        type: Number
    },

    year : {
        type : Number
    },

    month : {
        type : Number
    },

    day : {
        type : Number
    },

    id:{
        type: String
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

const Cost = mongoose.model('costs', CostsSchema);

module.exports = Cost;
