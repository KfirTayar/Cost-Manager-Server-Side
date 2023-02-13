// Kfir Tayar 208991430
// Karin Mashkovich 313512428

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
