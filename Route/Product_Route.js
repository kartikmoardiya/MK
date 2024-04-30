const express = require('express')
const app = express()
const router = express.Router()
const Product = require('../Models/Products')

router.post('/',async (req, res) => {
    // const { product_name, image_url, price, description, available_stock } = res.body

    const product = await (new Product(req.body).save())

    res.json({data:"Done"})
})

module.exports = router