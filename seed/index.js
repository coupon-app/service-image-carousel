const { getImageObject, saveImgUrlToFile } = require('./libs');

const { IMAGESET_COUNT } = require('./config');

for (let i = 0; i < IMAGESET_COUNT; i += 1) {
  const { imgUrl, thumbnailUrl } = getImageObject(i);
  saveImgUrlToFile(imgUrl, i);
  saveImgUrlToFile(thumbnailUrl, i, true);
}
