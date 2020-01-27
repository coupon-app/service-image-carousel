/* eslint-disable no-console */
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/carousel', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to mongodb');
  }
});


const ImageSchema = new mongoose.Schema({
  productId: Number,
  imageId: Number,
  imgUrl: String,
  thumbnailUrl: String,
});


const Image = mongoose.model('Image', ImageSchema);


const saveImages = (imageArray) => {
  imageArray.forEach((img) => {
    Image.findOneAndUpdate(
      { productId: img.productId, imgId: img.imdId },
      img,
      { upsert: true, useFindAndModify: true },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Added product', img.productId, 'image', img.imgId);
        }
      },
    );
  });
};


module.exports = { saveImages };
