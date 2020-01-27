/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const db = require('../database');

const app = express();
const PORT = process.env.PORT || 3000;

const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'public');

app.use('/', express.static(PUBLIC_DIR));

app.use('/api/:productId', (req, res) => {
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
