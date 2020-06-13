var express = require('express');
var router = express.Router();
const { getProducts,getProductsDetail } = require('../controller')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node js projects' });
});

router.get('/products', getProducts)
router.get('/products/:id', getProductsDetail)
module.exports = router;
