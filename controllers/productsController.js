const ProductsRepository = require('../repository/productsRepository')
const Product = require('../models/Product')

class ProductsController {
  getProducts(req, res) {
    res.json(ProductsRepository.products);
  }
  createProduct(req, res) {
    const { title, description, price } = req.body
    const product = new Product(title, description, price)
    ProductsRepository.products.push(product)
    res.json(product)
  }
  getProductsByTitle(req, res) {
    const { title } = req.query
    res.json(ProductsRepository.products.filter(product => {
      return product.title === title
    }))

  }
}

module.exports = new ProductsController()