const mongoose = require("mongoose");

const { ServerApiVersion } = require("mongodb");
const dbURI = "Data base address";
mongoose.connect(dbURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

require("./book-model");

mongoose.set("strictQuery", false);
mongoose.connect(dbURI);

mongoose.connection.on("connected", function () {
  console.log("Mongoose connected -" + dbURI);
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error -" + err);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose disconnected");
});
