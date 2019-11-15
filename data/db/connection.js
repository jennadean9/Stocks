const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/stocks", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose;

// let mongoURI = "";

// if (process.env.NODE_ENV === "production") {
//   mongoURI = process.env.DB_URL;
// } else {
//   mongoURI = "mongodb://localhost/stocks";
// }
