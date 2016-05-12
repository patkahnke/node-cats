var express = require('express');
var router = express.Router();
var path = require('path');

// Data
var felines = ['Kris', 'Luna', 'Rubio'];

router.get('/', function(req, res) {
  res.send(felines);
});

router.post('/', function(req, res)  {
  var duplicate = false;
  for (var i = 0; i < felines.length; i++) {
    if (req.body.catName == felines[i]) {
      duplicate = true;
    }
  };
    if (duplicate == true) {
      res.send('duplicate');
    } else {
  felines.push(req.body.catName);
  res.send(true);
    }
});

module.exports = router;
