/* eslint-disable no-console */
require('dotenv').config();
const AWS = require('aws-sdk');
const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

const uploadBundle = (options = { dev: false }) => new Promise((resolve, reject) => {
  const { dev } = options;
  let script;
  let uploadFilename;

  if (dev) {
    script = 'build-dev';
    uploadFilename = 'bundle-dev.js';
  } else {
    script = 'build';
    uploadFilename = 'bundle.js';
  }

  execSync(`npm run ${script}`);

  const bundlePath = path.resolve(__dirname, '..', 'client', 'public', 'bundle.js');
  const bundleContent = fs.readFileSync(bundlePath);
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: uploadFilename,
    Body: bundleContent,
    ContentType: 'application/javascript',
  };

  s3.upload(params, (err) => {
    if (err) {
      console.log(err);
      reject(err);
    } else {
      const bundleType = dev ? 'Developement' : 'Production';
      console.log(`${bundleType} bundle uploaded successfully`);
      resolve();
    }
  });
});

module.exports = uploadBundle;
