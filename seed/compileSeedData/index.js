/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const S3PATH = 'https://product-carousel-images.s3-us-west-2.amazonaws.com/';

const imageNameString = fs
  .readFileSync(path.resolve(__dirname, '..', 'retrieveImgs', 'images.txt'))
  .toString();

const imageNames = imageNameString.split('\n');

const seedJson = [];

imageNames.forEach((imageName) => {
  const isThumnail = imageName.includes('thumbnail');
  const productId = Number(imageName.replace('product_', '').split('-')[0]);
  const imgId = Number(imageName.split('-')[1].replace('img_', '').replace('.jpg', ''));


  const productObj = {
    productId,
    imgId,
    imgUrl: S3PATH + imageName,
    thumbnailUrl: S3PATH + imageName.replace('.jpg', '-thumbnail.jpg'),
  };

  console.log(productObj);

  if (!isThumnail) {
    seedJson.push(productObj);
  }
});

fs.writeFileSync(
  path.resolve(__dirname, '..', 'seedData.json'),
  JSON.stringify(seedJson),
  (err) => {
    console.log(err);
  },
);
