/* eslint-disable no-console */
const mongoose = require('mongoose');

const URI = 'mongodb://database/carousel';

const connect = new Promise((resolve, reject) => {
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
      console.log(err);
      reject(err);
    } else {
      console.log('Connected to mongodb');
      resolve();
    }
  });
});

const close = () => mongoose.connection.close();

const ImageSchema = new mongoose.Schema({
  productId: Number,
  imgId: Number,
  imgUrl: String,
  thumbnailUrl: String,
});


const Image = mongoose.model('Image', ImageSchema);


const saveImages = (imageArray) => {
  const imageStoragePromises = imageArray.map((img) => new Promise((resolve, reject) => {
    Image.findOneAndUpdate(
      { productId: img.productId, imgId: img.imdId },
      img,
      { upsert: true, useFindAndModify: true },
      (err) => {
        if (err) {
          reject(err);
        } else {
          console.log('Added product', img.productId, 'image', img.imgId);
          resolve();
        }
      },
    );
  }));

  return Promise.all(imageStoragePromises);
};


const getProductImages = (productId) => new Promise((resolve, reject) => {
  Image.find({ productId })
    .sort({ imgId: 1 })
    .then((results) => {
      resolve(results);
    })
    .catch((err) => {
      reject(err);
    });
});


module.exports = {
  saveImages, getProductImages, connect, close,
};
