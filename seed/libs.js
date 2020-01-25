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


const getImageObject = (id) => {
  const imageUrl = (sizeTuple) => (
    `https://i.picsum.photos/id/${id}/${sizeTuple.join('/')}.jpg`
  );

  return {
    imgUrl: imageUrl(IMG_SIZE),
    thumbnailUrl: imageUrl(THUMBNAIL_SIZE),
  };
};

const saveImgUrlToFile = (url, id, isThumbnail = false) => {
  const filename = `${id}.jpg`;
  const filePath = isThumbnail
    ? path.resolve(THUMBNAIL_PATH, filename)
    : path.resolve(IMG_PATH, filename);

  axios(url, {
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

module.exports = { getImageObject, saveImgUrlToFile };
