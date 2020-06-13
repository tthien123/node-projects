const productJson = require('../json.datas/products.json')

module.exports.getProducts = (request, response, next) => {
 console.log(productJson.body);
  response.render('products', {
    products: productJson.body
  })
}

module.exports.getProductsDetail = (request, response, next) => {
  const productdetail = productJson.body.find((p) => p.id === request.params.id)

  response.render('products', {
    title: request.params.categoryId,
    productsDetail: productdetail
  })
}


