const { saveImgToFile, getRandomProductImageCount, zeroPadded } = require('./libs');

const { PRODUCT_COUNT } = require('./config');

let currentId = 0;

for (let productId = 0; productId < PRODUCT_COUNT; productId += 1) {
  const productImageCount = getRandomProductImageCount();

  for (let imageId = 0; imageId < productImageCount; imageId += 1) {
    const paddedProductId = zeroPadded(productId, 3);
    const paddedImageId = zeroPadded(imageId, 2);
    const filenameBody = `product_${paddedProductId}-img_${paddedImageId}`;
    saveImgToFile(currentId, filenameBody);
    currentId += 1;
  }
}
