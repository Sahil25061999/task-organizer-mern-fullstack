require('dotenv').config();
const { connectToMongoDb } = require('./db/db.connect.js');
const express = require('express');
const cors = require('cors');
const tasks = require('./routes/task.routes.js');

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectToMongoDb();
app.use(cors());

app.use('/tasks', tasks);

app.listen(PORT, () => {
  console.log('server started');
});
