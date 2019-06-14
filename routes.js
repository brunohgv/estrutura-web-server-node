const express = require('express')
const router = express.Router()

const ProductsController = require('./controllers/productsController')

router.get('/products', ProductsController.getProducts)
router.get('/productByTitle', ProductsController.getProductsByTitle)
router.post('/products', ProductsController.createProduct);

module.exports = router