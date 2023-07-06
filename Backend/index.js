const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const router = require("./router");

const productController = require('./Controllers/productController');

dotenv.config();

const app = express();
app.use(express.json());

// Connection à la DB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error(err);
  process.exit(1);
});

// Routes app.use(router);
app.get('/products', productController.getProducts);
app.get('/products/:id', productController.getProductById);
app.post('/products', productController.createProduct);
app.put('/products/:id', productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);

// Démarrage du serveur
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
