import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, makeStyles } from '@material-ui/core';
import { createProduct } from '../service/api';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const Add = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [warrantyYears, setWarrantyYears] = useState(0);
  const [available, setAvailable] = useState(false);

  const handleCreateProduct = async () => {
    try {
      await createProduct({
        name,
        type,
        price: parseFloat(price),
        rating: parseFloat(rating),
        warranty_years: warrantyYears,
        available,
      });
      setName('');
      setType('');
      setPrice('');
      setRating('');
      setWarrantyYears(0);
      setAvailable(false);
    } catch (error) {
      console.log('Erreur lors de la création du produit :', error);
    }
  };

  const handlePriceChange = (event) => {
    const { value } = event.target;
    if (value >= 0 || value === '') {
      setPrice(value);
    }
  };

  const handleRatingChange = (event) => {
    const { value } = event.target;
    if (value >= 0 || value === '') {
      setRating(value);
    }
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" align="center" gutterBottom>
        Let's go
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            fullWidth
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Price"
            type="number"
            value={price}
            onChange={handlePriceChange}
            fullWidth
            className={classes.textField}
            inputProps={{ min: '0', step: '0.01' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Rating"
            type="number"
            value={rating}
            onChange={handleRatingChange}
            fullWidth
            className={classes.textField}
            inputProps={{ min: '0', step: '0.1' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Warranty (years)"
            type="number"
            value={warrantyYears}
            onChange={(e) => setWarrantyYears(parseInt(e.target.value, 10))}
            fullWidth
            className={classes.textField}
            inputProps={{ min: '0' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Available"
            select
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
            fullWidth
            className={classes.textField}
          >
            <option value={false}>Non</option>
            <option value={true}>Oui</option>
          </TextField>
        </Grid>
        <Grid item xs={12}>
        <Button
          variant="contained"
          style={{ backgroundColor: '#80cbc4', color: 'white' }}
          onClick={handleCreateProduct}
        >
          Add
        </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Add;
