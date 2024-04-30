const express = require('express')
const app = express();
const db = require('./Database/db');
const router = express.Router();
const product_route = require('./Route/Product_Route')
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// app.use('/product',product_route)
app.get('/', async (req, res) => {
    res.json({ msg: "Hello world" })
})
app.listen(3000, ()=>{
    console.log("Listening on Port...")
});