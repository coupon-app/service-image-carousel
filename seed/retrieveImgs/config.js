const path = require('path');

const PRODUCT_COUNT = 100;
const PRODUCT_IMAGE_COUNT_RANGE = [3, 12];
const IMG_SIZE = [700, 420];
const THUMBNAIL_SIZE = [57, 57];

const IMG_PATH = path.resolve(__dirname, 'img');


module.exports = {
  PRODUCT_COUNT,
  PRODUCT_IMAGE_COUNT_RANGE,
  IMG_SIZE,
  THUMBNAIL_SIZE,
  IMG_PATH,
};
