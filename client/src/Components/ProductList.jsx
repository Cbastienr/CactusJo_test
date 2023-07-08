import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/products');
      const data = await response.json();
      const mappedData = data.map((product) => ({ ...product, id: product._id }));
      setProducts(mappedData);
    } catch (error) {
      console.log('Erreur lors de la récupération des produits :', error);
    }
  };

  const handleEditProduct = (productId) => {
    setEditingProductId(productId);
  };

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      const response = await fetch(`http://localhost:8000/api/products/${updatedProduct._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });

      if (response.ok) {
        console.log('Le produit a été mis à jour avec succès');
        setProducts((prevProducts) =>
          prevProducts.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
        );
        setEditingProductId(null);
      } else {
        console.log('Erreur lors de la mise à jour du produit');
      }
    } catch (error) {
      console.log('Erreur lors de la mise à jour du produit :', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    console.log('Supprimer le produit avec l\'ID :', productId);
    try {
      const response = await fetch(`http://localhost:8000/api/products/${productId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Le produit a été supprimé avec succès');
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
        if (editingProductId === productId) {
          setEditingProductId(null);
        }
      } else {
        console.log('Erreur lors de la suppression du produit');
      }
    } catch (error) {
      console.log('Erreur lors de la suppression du produit :', error);
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200, editable: true },
    { field: 'type', headerName: 'Type', width: 150, editable: true },
    { field: 'price', headerName: 'Price', type: 'number', width: 120, editable: true },
    { field: 'rating', headerName: 'Rating', type: 'number', width: 120, editable: true },
    { field: 'warranty_years', headerName: 'Warranty (Years)', type: 'number', width: 180, editable: true },
    { field: 'available', headerName: 'Available', type: 'boolean', width: 120, editable: true },
      {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        width: 120,
        renderCell: (params) => (
          <div>
            {editingProductId === params.row.id ? (
              <IconButton
                color="primary"
                onClick={() => handleUpdateProduct(params.row)}
                size="small"
              >
                <SaveIcon />
              </IconButton>
            ) : (
              <IconButton
                color="primary"
                onClick={() => handleEditProduct(params.row.id)}
                size="small"
              >
                <EditIcon />
              </IconButton>
            )}
            <IconButton
              color="secondary"
              onClick={() => handleDeleteProduct(params.row.id)}
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ),
      },
    ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        editMode="row"
      />
    </div>
  );
};

export default ProductList;
