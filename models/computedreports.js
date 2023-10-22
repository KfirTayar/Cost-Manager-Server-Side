// Kfir Tayar

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a schema for computed reports in mongoDB
const ComputedReportsSchema = new Schema({

    name : {
        type: String
    },

    computedReport : {
        type: JSON
    }

});

const Report = mongoose.model('computedreports', ComputedReportsSchema);

module.exports = Report;
