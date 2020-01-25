const path = require('path');

const IMAGESET_COUNT = 10;
const IMAGESET_SIZE_RANGE = [3, 10];
const IMG_SIZE = [700, 420];
const THUMBNAIL_SIZE = [57, 57];

const IMG_PATH = path.resolve(__dirname, 'img');
const THUMBNAIL_PATH = path.resolve(IMG_PATH, 'thumbnails');


module.exports = {
  IMAGESET_COUNT,
  IMAGESET_SIZE_RANGE,
  IMG_SIZE,
  THUMBNAIL_SIZE,
  IMG_PATH,
  THUMBNAIL_PATH,
};
