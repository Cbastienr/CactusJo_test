const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./router');

dotenv.config();

const app = express();
app.use(express.json());

// Connection DB
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

app.use(router);

// START server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
