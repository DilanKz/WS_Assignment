var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('All Users Retrieved : Take 4');
});

module.exports = router;
