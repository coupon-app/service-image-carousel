/* eslint-disable no-console */
const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

app.post('/hooks/github', (req, res) => {
  res.send();
  const rebuildScript = exec('sh rebuild.sh');
  rebuildScript.stdout.on('data', (data) => {
    console.log(data);
  });

  rebuildScript.stderr.on('data', (data) => {
    console.error(data);
  });
});

app.listen(PORT, () => {
  console.log('Hooks server listening on port', PORT);
});
