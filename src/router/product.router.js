const router = require("express-promise-router")();
const productController = require('../controller/product.controller')

router.get('/', productController.getProducts)

module.exports = router;