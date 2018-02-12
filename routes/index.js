var express = require('express');
var router = express.Router();

const templateTypes = [
  { name: "Jade", usefulness: "sucky" },
  { name: "EJS", usefulness: "a little better" },
  { name: "Handlebars", usefulness: "awesome" }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    message : "I like EJS",
    template: templateTypes
  });
});

module.exports = router;
