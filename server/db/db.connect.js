require('dotenv').config();
const mongoose = require('mongoose');

const connectToMongoDb = () => {
  mongoose
    .connect(process.env.MONGOURI, { useNewUrlParser: true })
    .then(() => console.log('mongodb connected successfully'))
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { connectToMongoDb };
