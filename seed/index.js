const { saveImgToFile, getRandomProductImageCount } = require('./libs');

const { PRODUCT_COUNT } = require('./config');

let currentId = 0;

for (let productId = 0; productId < PRODUCT_COUNT; productId += 1) {
  const productImageCount = getRandomProductImageCount();

  for (let imageId = 0; imageId < productImageCount; imageId += 1) {
    const filenameBody = `product_${productId}-img_${imageId}`;
    saveImgToFile(currentId, filenameBody);
    saveImgToFile(currentId, `${filenameBody}-thumbnail`, true);
    currentId += 1;
  }
}
