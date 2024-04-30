const express = require('express')
const app = express()
const router = express.Router()
const Product = require('../Models/Products')

router.post('/add',async (req, res) => {
    // const { product_name, image_url, price, description, available_stock } = res.body

    const product = await (new Product(req.body).save())

    res.json({data:"Done"})
})

router.get('/', async(req,res)=>{
    const products = await Product.find()

    res.json({products})
})
module.exports = router