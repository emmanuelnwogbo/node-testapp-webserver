var express = require('express');
var router = express.Router();

/* GET land page. */
router.get('/ford', function(req, res, next) {
  res.render('ford', {
      para: `i'm still working on it`
   });
});

module.exports = router;
