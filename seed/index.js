const { saveImgToFile } = require('./libs');

const { PRODUCT_COUNT } = require('./config');

for (let i = 0; i < PRODUCT_COUNT; i += 1) {
  saveImgToFile(i);
  saveImgToFile(i, true);
}
