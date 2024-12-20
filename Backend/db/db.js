const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(function () {
      console.log("Connected to DB 👋");
    })
    .catch(function (err) {
      console.log(err);
    });
}

module.exports = connectToDb;
