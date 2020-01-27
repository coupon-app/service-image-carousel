/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const imageNameString = fs.readFileSync(path.resolve(__dirname, '..', 'retrieveImgs', 'images.txt')).toString();

const imageNames = imageNameString.split('\n');

const seedJson = [];

imageNames.forEach((imageName) => {
  const isThumnail = imageName.includes('thumbnail');
  if (!isThumnail) {
    seedJson.push({
      imgUrl: imageName,
      thumbnailUrl: imageName.replace('.jpg', '-thumbnail.jpg'),
    });
  }
});

fs.writeFileSync(path.resolve(__dirname, '..', 'seedData.json'), JSON.stringify(seedJson), (err) => {
  console.log(err);
});
