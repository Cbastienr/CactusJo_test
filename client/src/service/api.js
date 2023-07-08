import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

// GET tous les produits
const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.log('Erreur lors de la récupération des produits :', error);
    throw error;
  }
};

// Get produits byID
const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.log('Erreur lors de la récupération du produit :', error);
    throw error;
  }
};

// POST nouveau produit
const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/products`, productData);
    return response.data;
  } catch (error) {
    console.log('Erreur lors de la création du produit :', error);
    throw error;
  }
};

// Va update un produit
const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(`${API_URL}/products/${productId}`, productData);
    return response.data;
  } catch (error) {
    console.log('Erreur lors de la mise à jour du produit :', error);
    throw error;
  }
};

// Delete un produit
const deleteProduct = async (productId) => {
  try {
    await axios.delete(`${API_URL}/products/${productId}`);
  } catch (error) {
    console.log('Erreur lors de la suppression du produit :', error);
    throw error;
  }
};

export { getProducts, getProductById, createProduct, updateProduct, deleteProduct };