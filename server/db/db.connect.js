require('dotenv').config();
const mongoose = require('mongoose');

const connectToMongoDb = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@task-manager.bv3cijd.mongodb.net/?retryWrites=true&w=majority`,
      { useNewUrlParser: true }
    )
    .then(() => console.log('mongodb connected successfully'))
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { connectToMongoDb };
