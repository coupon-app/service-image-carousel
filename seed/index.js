/* eslint-disable no-console */
const { saveImages, connect, close } = require('../database');
const imageArray = require('./seedData.json');

connect.then(() => saveImages(imageArray))
  .then(() => {
    console.log('Finished');
    close();
  })
  .catch((err) => console.log(err));
