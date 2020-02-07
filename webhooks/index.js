/* eslint-disable no-console */
const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const uploadBundle = require('./s3');

const app = express();
const PORT = 3000;

app.post('/hooks/github', (req, res) => {
  res.send();
  console.log('Updating git and rebuilding docker image...');
  const scriptPath = path.resolve(__dirname, 'rebuild.sh');
  exec(`sh ${scriptPath}`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully rebuilt and restarted');
      console.log('Building and uploading new bundle...');
      uploadBundle({ dev: false }).then(uploadBundle({ dev: true }));
    }
  });
});

app.listen(PORT, () => {
  console.log('Hooks server listening on port', PORT);
});
