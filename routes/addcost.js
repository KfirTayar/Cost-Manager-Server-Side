// Kfir Tayar

const express = require('express');
const router = express.Router();
const Cost = require('../models/costs');
const Report = require('../models/computedreports');

// The request sending in method POST
router.post('/', (req, res, next) =>{

    // Preparing the parameters to create a  new cost
    const user_id = 123123; // Permanent user_id
    const year = req.body.year;
    const month = req.body.month;
    const day = req.body.day;
    const id = 'id' + Math.random().toString(16).slice(2); // Generates a unique id for every cost item
    const description = req.body.description;
    const category = req.body.category;
    const sum = req.body.sum;

    // Checks if there is an empty property that is necessary
    if ( !description || !category || !sum ){
        return res.status(400).json({ error : 'One or more of the required properties do not exist'});
    }

    // Validates the input of the sum property
    if (sum < 0){
        return res.status(400).json({error: 'The sum property has invalid input'});
    }

    // Validates the input of the category property
    const categoryOptions = ['food', 'health', 'housing', 'sport', 'education', 'transportation', 'other'];

    if (!(categoryOptions.includes(category))){
        return res.status(400).json({ error: 'The category property has invalid input' });
    }

    // Validates the input of the month property
    if (month != null && (month > 12 || month < 1)){
        return res.status(400).json({error: 'The month property has invalid input'});
    }

    // Validates the input of the day property
    if (day != null && (day > 31 || day < 1)){
        return res.status(400).json({error: 'The day property has invalid input'});
    }

    // Validates the input of the year property
    if (year != null && year < 0){
        return res.status(400).json({error: 'The year property has invalid input'});
    }

    // Building a new cost item
    const currentCost = new Cost({
        user_id: user_id,
        year: year,
        month: month,
        day: day,
        id: id,
        description: description,
        category: category,
        sum: sum
    });

    // Creating a new cost document
    Cost.create(currentCost).then( (currentCost) => {
        res.send(`New cost created: ${currentCost}`);
    }).catch(next);

    // Add the currentCost to a new report or an existing report
    // Create a name for the computed report
    const reportName = '' + year + month + user_id;

    Report.findOne({'name':reportName} , (error, report) => {
        if (error) {
            res.status(500).json({error: error});
        }
        else {
            // If the report exists in the computed reports' schema, we update the report
            if (report) {
                // Prepares the updated report
                report.computedReport[currentCost.category].push({
                    day: currentCost.day,
                    description: currentCost.description,
                    sum: currentCost.sum
                });
                // Updated report
                const updatedReport = (report.computedReport);
                // Update the current report in the computed reports schema
                Report.updateOne({ name: reportName }, { $set: { computedReport: updatedReport } },
                    function(err) {
                    if (err) throw err;
                    console.log('1 document updated');
                });
            }
            else {
                // If there is no computed report for the current date, we will create him
                const newReport = {};
                const categories = ['food','health','housing','sport','education','transportation','other'];
                newReport[categories[0]] = [];
                newReport[categories[1]] = [];
                newReport[categories[2]] = [];
                newReport[categories[3]] = [];
                newReport[categories[4]] = [];
                newReport[categories[5]] = [];
                newReport[categories[6]] = [];

                newReport[currentCost.category].push({
                    day: currentCost.day,
                    description: currentCost.description,
                    sum: currentCost.sum
                });

                const currentReport = new Report ({
                    name: reportName,
                    computedReport: newReport
                });

                Report.create(currentReport).then().catch(next);
            }
        }
    });
});

module.exports = router;
