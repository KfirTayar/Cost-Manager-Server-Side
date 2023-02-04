const express = require('express');
const router = express.Router();
const Cost = require('../models/costs');

// The request sending in method GET
router.get('/', (req, res) => {
    const { year, month, user_id } = req.query; // Getting the parameters from the query string

    // Checks if there is an empty property
    if ( !year || !month || !user_id ){
        return res.status(400).json({ error : 'One or more of the properties do not exist'});
    }
    // Finding the costs according to the sending parameters
    Cost.find({ year, month, user_id }, (error, costs) => {
        if (error) {
            res.status(500).json({ error: error });
        }
        else {

            // Creates an empty object for the final report
            const report = {};

            // Creates empty arrays for each category
            var i=0;
            const categories = ['food','health','housing','sport','education','transportation','other'];
            report[categories[0]] = [];
            report[categories[1]] = [];
            report[categories[2]] = [];
            report[categories[3]] = [];
            report[categories[4]] = [];
            report[categories[5]] = [];
            report[categories[6]] = [];

            // Using while loop to iterate each cost
            while (costs[i] != null)  {
                // Validates the input of the category property
                if (categories.includes(costs[i].category)) {
                    // Pushing the cost to the correct category
                    report[costs[i].category].push({
                        day: costs[i].day,
                        description: costs[i].description,
                        sum: costs[i].sum
                    });
                }
                i += 1;
            }
            // Export the JSON report
            res.json(report);
        }
    });
});

module.exports = router;