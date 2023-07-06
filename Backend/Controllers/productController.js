const Product = require('../Models/productModel');

// Récupérer tous les produits
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log('Erreur lors de la récupération des produits :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des produits' });
  }
};

// Récupérer un produit par son ID
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

// Créer un nouveau produit
exports.createProduct = async (req, res) => {
  try {
    const { name, price, rating, warranty_years, available } = req.body;
    
    const product = new Product({
      name,
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

// Mettre à jour un produit
exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, price, rating, warranty_years, available } = req.body;
    
    const product = await Product.findByIdAndUpdate(
      productId,
      { name, price, rating, warranty_years, available },
      { new: true }
    );

    if (!product) {
      res.status(404).json({ error: 'Produit non trouvé' });
      return;
    }

    // Émettre un événement de modification de produit
    io.emit('productUpdated', productId);

    res.json(product);
  } catch (error) {
    console.log('Erreur lors de la mise à jour du produit :', error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour du produit' });
  }
};

// Supprimer un produit
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