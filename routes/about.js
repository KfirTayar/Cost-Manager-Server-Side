// Kfir Tayar

const express = require('express');
const router = express.Router();

// Building an array with two objects that represent the developers
const developers = [
    { 'firstname': 'Kfir', 'lastname': 'Tayar', 'id': 000000000, 'email': 'kfirtayar145@gmail.com' }
];

// The request sending in method GET
router.get('/', (req, res) => {

    // The response gets as a JSON object
    res.json(developers);
});
module.exports = router;
