const express = require('express');
const router = express.Router();
const Costs = require('../models/costs');

router.get('/:user_id/:year/:month', (req, res) => {
    const {user_id, year, month} = req.params;
    // console.log(req.params);

    const result = {};

    Costs.find({user_id, year, month}, (err, costs) => {
        if(err) console.log(`this is err : ${err}`);
        else{
            const categories = ["food", "health", "housing", "sport", "education", "transportation", "other"];
            const index = Costs.prototype.getPropertiesList();

            // const result = {};

            categories.forEach(c => {
                result[c] = [];
            });

            Object.entries(costs).forEach(([key, value]) => {

                let category = value.category;

                if (categories.includes(category)){
                    let costDetails = {};

                    for (let val in value){
                        if (index.includes(val))
                        {
                            if (val != "category")
                            {
                                costDetails[val] = value[val];
                            }
                        }
                    }
                    result[category].push(costDetails);
                }
            });
            console.log(result);
        }
        res.json(result);

    });
});

module.exports = router;