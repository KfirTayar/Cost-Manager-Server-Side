const express = require('express');
const router = express.Router();

// Using GET method to sending the JSON file
router.get('/', (req, res) => {

    // Create array in JSON format
    const developers = [
        { "firstname": "Kfir", "lastname": "Tayar", "id": 208991430, "email": "kfirtayar145@gmail.com" },
        { "firstname": "Karin", "lastname": "Moskovich", "id": 6000000000, "email": "" }
    ];

    res.json.parse(developers);
});
module.exports = router;