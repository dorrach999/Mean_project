const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./routes/UserRoutes");
require('dotenv').config(); 

//middleware
app.use(express.json());

app.use("/api/users", userRouter);


mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected');
});

app.listen(3600, () => {
  console.log("Server is running on port 3600");
});

module.exports = app;
