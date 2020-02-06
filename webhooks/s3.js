/* eslint-disable no-console */
const AWS = require('aws-sdk');
const fs = require('fs');
const { execSync } = require('child_process');
require('dotenv').config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

const uploadBundle = () => {
  execSync('docker cp service-image-carousel_carousel_1:/src/app/client/public/bundle.js .');

  const bundleContent = fs.readFileSync('./bundle.js');

  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: 'bundle.js',
    Body: bundleContent,
  };

  s3.upload(params, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Bundle uploaded successfully');
    }
  });
};

module.exports = uploadBundle;
