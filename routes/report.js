// Kfir Tayar 208991430
// Karin Mashkovich 313512428

const express = require('express');
const router = express.Router();
const Report = require('../models/computedreports');

// The request sending in method GET
router.get('/', (req, res) => {
    const {year, month, user_id} = req.query; // Getting the parameters from the query string

    // Checks if user_id is empty
    if ( !year || !month || !user_id ) {
        return res.status(400).json({error: 'One or more of the required properties do not exist'});
    }

    // Create a name for the computed report
    const reportName = '' + year + month + user_id;

    // Checks if there is a computed report for this date
    Report.findOne({'name': reportName}, (error, report) => {
        if (error) {
            res.status(500).json({error: error});
        }
        else {
            if (report) {
                return res.json(report.computedreports);
            }
            res.status(400).json({error: 'There is no costs in this date'});
        }
    });
});
module.exports = router;