/* eslint-disable no-console */
const express = require('express');
const { exec } = require('child_process');
const uploadBundle = require('./s3');

const app = express();
const PORT = 3000;

app.post('/hooks/github', (req, res) => {
  res.send();
  exec('sh rebuild.sh', (err) => {
    if (err) {
      console.log(err);
    } else {
      uploadBundle();
    }
  });
});

app.listen(PORT, () => {
  console.log('Hooks server listening on port', PORT);
});
