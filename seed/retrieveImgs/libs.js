/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const {
  IMG_SIZE,
  THUMBNAIL_SIZE,
  IMG_PATH,
  PRODUCT_IMAGE_COUNT_RANGE,
} = require('./config');


const saveImgToFile = (imageId, name, isThumbnail = false) => new Promise((resolve, reject) => {
  let size;
  let thumbnailPostfix = '';

  if (isThumbnail) {
    size = THUMBNAIL_SIZE;
    thumbnailPostfix = '-thumbnail';
  } else {
    size = IMG_SIZE;
  }

  const imageUrl = `https://i.picsum.photos/id/${imageId}/${size.join('/')}${thumbnailPostfix}.jpg`;

  const filename = `${name}${thumbnailPostfix}.jpg`;

  const filePath = path.resolve(IMG_PATH, filename);


  axios(imageUrl, {
    responseType: 'arraybuffer',
    timeout: 20000,
  })
    .then((response) => Buffer.from(response.data, 'binary'))
    .then((imageBuffer) => {
      fs.writeFile(filePath, imageBuffer, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('✔️  ', filePath);
          // TODO: write filename to file
          fs.appendFile(path.resolve(__dirname, 'images.txt'), `${filename}\n`, (fileErr) => {
            if (fileErr) console.log(fileErr);
          });
          resolve(filePath);
        }
      });
    })
    .catch((err) => {
      console.log('✖️  ', filePath);
      reject(err);
    });

  if (!isThumbnail) {
    saveImgToFile(imageId, name, true);
  }
});


const getRandomProductImageCount = () => {
  const [min, max] = PRODUCT_IMAGE_COUNT_RANGE;
  const difference = max - min;

  return Math.floor(
    min + (Math.random() * difference),
  );
};


const zeroPadded = (num, length) => {
  const numString = String(num);
  const numLength = numString.length;

  return '0'.repeat(length - numLength) + numString;
};

module.exports = { saveImgToFile, getRandomProductImageCount, zeroPadded };
