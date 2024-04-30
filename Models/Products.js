const mongoose = require('mongoose')

// Product
// 1. Product Name
// 2. Image
// 3. Price
// 4. Description
// 5. Available stock
const productSchema = new mongoose.Schema({
    product_name : {
        type : String,
        require : true
    },
    image_url :{
        type : String,
        require : true
    },
    price :{
        type : String,
        require : true
    },
    description :{
        type : String,
        require : true
    },
    available_stock : {
        type : String,
        require : true
    }
})

const productModel = mongoose.model('Product', productSchema)

module.exports = productModel