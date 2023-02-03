const express = require('express');
const router = express.Router();
const Costs = require('../models/costs');

// POST method for adding cost using Curl
// REQ => curl -X POST http://localhost:3000/addcost -H "Content-Type: application/json" -d "{\"user_id\":123123,\"year\":1990,\"month\":5,\"day\":10,\"description\":\"pizza\",\"sum\":50,\"category\":\"food\"}"
router.post('/', (req, res, next) =>{

    const user_id = 123123;
    const year = req.body.year;
    const month = req.body.month;
    const day = req.body.day;
    const description = req.body.description;
    const category = req.body.category;
    const sum = req.body.sum;

    const currentCost = new Costs({
        user_id:user_id,
        year:year,
        month:month,
        day:day,
        description:description,
        category:category,
        sum:sum,
        });

    if ( !year || !month || !day || !description || !category || !sum){
        return res.status(400).json({ error : 'Missing required parms'});
    }

    if (month > 31){
        return res.status(400).json({error: 'Invalid input for month'});
    }

    if (day > 31){
        return res.status(400).json({error: 'Invalid input for day'});
    }

    const categoryOptions = ["food", "health", "housing", "sport", "education", "transportation", "other"];
    if (!(categoryOptions.includes(category))){
        return res.status(400).json({ error: "Invalid input for category" });
    }

    Costs.create(currentCost).then( (currentCost) => {
        res.send(`New cost created: ${currentCost}`);
    }).catch(next);
});

module.exports = router;