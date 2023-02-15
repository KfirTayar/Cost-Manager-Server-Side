// Kfir Tayar 208991430
// Karin Mashkovich 313512428

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

const Report = mongoose.model('computedReports', ComputedReportsSchema);

module.exports = Report;
