const express = require('express');
const router = express.Router();

// The request sending in method GET
router.get('/', (req, res) => {

    // Building an array with two objects that represent the developers
    const developers = [
        { "firstname": "Kfir", "lastname": "Tayar", "id": 208991430, "email": "kfirtayar145@gmail.com" },
        { "firstname": "Karin", "lastname": "Moskovich", "id": 6000000000, "email": "" }
    ];
    // The response gets as a JSON object
    res.json(developers);
});
module.exports = router;