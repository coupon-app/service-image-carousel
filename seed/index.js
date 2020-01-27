/* eslint-disable no-console */
const { saveImages, onConnect } = require('../database');
const imageArray = require('./seedData.json');

onConnect.then(() => saveImages(imageArray));
