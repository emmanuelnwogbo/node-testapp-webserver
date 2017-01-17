var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
      title: 'about page',
      para: 'this is a paragraph'
    });
});

module.exports = router;
