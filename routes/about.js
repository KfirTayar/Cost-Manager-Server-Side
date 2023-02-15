// Kfir Tayar 208991430
// Karin Mashkovich 313512428

const express = require('express');
const router = express.Router();

// Building an array with two objects that represent the developers
const developers = [
    { 'firstname': 'Kfir', 'lastname': 'Tayar', 'id': 208991430, 'email': 'kfirtayar145@gmail.com' },
    { 'firstname': 'Karin', 'lastname': 'Mashkovich', 'id': 313512428, 'email': 'karinmashkovich95@gmail.com' }
];

// The request sending in method GET
router.get('/', (req, res) => {

    // The response gets as a JSON object
    res.json(developers);
});
module.exports = router;