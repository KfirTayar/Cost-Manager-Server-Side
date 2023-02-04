const express = require('express');
const router = express.Router();
const Cost = require('../models/costs');

// The request sending in method POST
router.post('/', (req, res, next) =>{

    // Preparing the parameters to create a  new cost
    const user_id = 123123; // Permanent user_id
    const year = req.body.year;
    const month = req.body.month;
    const day = req.body.day;
    const id = "id" + Math.random().toString(16).slice(2); // Generates a unique id for every cost item
    const description = req.body.description;
    const category = req.body.category;
    const sum = req.body.sum;

    // Checks if there is an empty property
    if ( !year || !month || !day || !description || !category || !sum){
        return res.status(400).json({ error : 'One or more of the properties do not exist'});
    }
    // Validates the input of the month property
    if (month > 31){
        return res.status(400).json({error: 'The month property has invalid input'});
    }
    // Validates the input of the day property
    if (day > 31){
        return res.status(400).json({error: 'The day property has invalid input'});
    }
    // Validates the input of the category property
    const categoryOptions = ["food", "health", "housing", "sport", "education", "transportation", "other"];
    if (!(categoryOptions.includes(category))){
        return res.status(400).json({ error: "The category property has invalid input" });
    }

    // Building a new cost item
    const currentCost = new Cost({
        user_id:user_id,
        year:year,
        month:month,
        day:day,
        id:id,
        description:description,
        category:category,
        sum:sum
    });

    // Creating a new cost document
    Cost.create(currentCost).then( (currentCost) => {
        res.send(`New cost created: ${currentCost}`);
    }).catch(next);
});

module.exports = router;