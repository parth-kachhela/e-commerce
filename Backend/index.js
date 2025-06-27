const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const cors = require('cors')
const path = require('path')
const multer = require('multer')
const Product = require('./models/Product')
const categoryRoutes = require("./routes/category");

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"))


mongoose.connect()
  .then(() => console.log("MongoDB connection is done"))
  .catch(() => console.log("Connection fail"))


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname))
})

const upload = multer({ storage })

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/add/product', upload.single("image"), async (req, res) => {

  const { name, price, des } = req.body;

  const product = new Product({
    name,
    price,
    description: des,
    image: req.file?.filename
  })
  await product.save()
  console.log("req.body ====>", req.body)
  res.json(product)
})

app.get('/api/add/product',async(req,res)=>{
  const product = await Product.find();

  res.json(product);
})


app.use('/api/categories',categoryRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
