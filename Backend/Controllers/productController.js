const Product = require('../Models/productModel');

// GET products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log('Erreur lors de la récupération des produits :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des produits' });
  }
};

// GETbyID product 
exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    
    if (!product) {
      res.status(404).json({ error: 'Produit non trouvé' });
      return;
    }
    
    res.json(product);
  } catch (error) {
    console.log('Erreur lors de la récupération du produit :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération du produit' });
  }
};

// POST new product
exports.createProduct = async (req, res) => {
  try {
    const { name, type, price, rating, warranty_years, available } = req.body;
    
    const product = new Product({
      name,
      type,
      price,
      rating,
      warranty_years,
      available,
    });
    
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log('Erreur lors de la création du produit :', error);
    res.status(500).json({ error: 'Erreur lors de la création du produit' });
  }
};

// PUT/ update product
exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, type, price, rating, warranty_years, available } = req.body;
    
    const product = await Product.findByIdAndUpdate(
      productId,
      { name, type, price, rating, warranty_years, available },
      { new: true }
    );

    if (!product) {
      res.status(404).json({ error: 'Produit non trouvé' });
      return;
    }

    res.json(product);
  } catch (error) {
    console.log('Erreur lors de la mise à jour du produit :', error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour du produit' });
  }
};

// DELETE product
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndRemove(productId);
    
    if (!deletedProduct) {
      res.status(404).json({ error: 'Produit non trouvé' });
      return;
    }
    
    res.json({ message: 'Produit supprimé avec succès' });
  } catch (error) {
    console.log('Erreur lors de la suppression du produit :', error);
    res.status(500).json({ error: 'Erreur lors de la suppression du produit' });
  }
};