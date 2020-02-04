/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('../database');

const app = express();
const PORT = process.env.PORT || 3002;

const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'public');

app.use(cors());

app.use('/', express.static(PUBLIC_DIR));

app.get('/api/products/:productId', (req, res) => {
  const { productId } = req.params;
  db.getProductImages(productId)
    .then((results) => {
      if (results.length === 0) {
        res.status(404).send('No images match the provided product ID');
      } else {
        res.status(200).send(results);
      }
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
});
