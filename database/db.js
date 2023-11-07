const mongoose = require("mongoose");

const dbURL = process.env.DB_URL;

const connectToDb = () => {
  mongoose
    .connect(dbURL)
    .then(() => {
      console.log("MongoDB Atlas CONNECTED!");
    })
    .catch((error) => console.log(error));
};

module.exports = connectToDb;