/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const {
  IMG_SIZE,
  THUMBNAIL_SIZE,
  IMG_PATH,
  THUMBNAIL_PATH,
} = require('./config');


const saveImgToFile = (id, isThumbnail = false) => {
  const size = isThumbnail
    ? THUMBNAIL_SIZE
    : IMG_SIZE;

  const imageUrl = `https://i.picsum.photos/id/${id}/${size.join('/')}.jpg`;

  const filename = `${id}.jpg`;

  const filePath = isThumbnail
    ? path.resolve(THUMBNAIL_PATH, filename)
    : path.resolve(IMG_PATH, filename);


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

module.exports = { saveImgToFile };
