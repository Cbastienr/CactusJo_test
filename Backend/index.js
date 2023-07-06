const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Démarrage du serveur
const port = 8000;
app.listen(port, () => {
  console.log(`api running on ${port}`);
});