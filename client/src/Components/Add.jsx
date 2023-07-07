import React, { useState, } from 'react';
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
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [warrantyYears, setWarrantyYears] = useState(0);
  const [available, setAvailable] = useState(false);

  const handleCreateProduct = async () => {
    try {
      await createProduct({
        name,
        type,
        price,
        rating,
        warranty_years: warrantyYears,
        available,
      });
      setName('');
      setType('');
      setPrice(0);
      setRating(0);
      setWarrantyYears(0);
      setAvailable(false);
    } catch (error) {
      console.log('Erreur lors de la création du produit :', error);
    }
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" align="center" gutterBottom>
        Ajouter un nouveau produit
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nom"
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
            label="Prix"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            fullWidth
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Note"
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            fullWidth
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Garantie (années)"
            type="number"
            value={warrantyYears}
            onChange={(e) => setWarrantyYears(Number(e.target.value))}
            fullWidth
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Disponible"
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
          <Button variant="contained" color="primary" onClick={handleCreateProduct}>
            Ajouter
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Add;