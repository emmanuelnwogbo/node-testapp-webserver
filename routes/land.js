var express = require('express');
var router = express.Router();

/* GET land page. */
router.get('/land', function(req, res, next) {
  res.render('land', {
      para: `i'm still working on it`
   });
});

module.exports = router;
