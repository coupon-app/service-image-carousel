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


const saveImgToFile = (imageId, name, isThumbnail = false) => {
  const size = isThumbnail
    ? THUMBNAIL_SIZE
    : IMG_SIZE;

  const imageUrl = `https://i.picsum.photos/id/${imageId}/${size.join('/')}.jpg`;

  const filename = `${name}.jpg`;

  const filePath = path.resolve(IMG_PATH, filename);


  axios(imageUrl, {
    responseType: 'arraybuffer',
  })
    .then((response) => Buffer.from(response.data, 'binary'))
    .then((imageBuffer) => {
      fs.writeFile(filePath, imageBuffer, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Saved seed image to:', filePath);
        }
      });
    });
};


const getRandomProductImageCount = () => {
  const [min, max] = PRODUCT_IMAGE_COUNT_RANGE;
  const difference = max - min;

  return Math.floor(
    min + (Math.random() * difference),
  );
};

module.exports = { saveImgToFile, getRandomProductImageCount };
