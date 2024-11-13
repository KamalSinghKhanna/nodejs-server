var express = require('express');
const Category = require('../model/category');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/kamal', async function(req, res, next) {
  let categoryname = "kamal";
  const category = new Category({categoryname})
  await category.save()

});

module.exports = router;
