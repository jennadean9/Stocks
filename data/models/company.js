const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Symbol: {
    type: String,
    required: true,
    unique: true
  },
  Sector: {
    type: String,
    enum: [
      "Industrials",
      "Health Care",
      "Information Technology",
      "Utilities",
      "Consumer Discretionary",
      "Financials",
      "Materials",
      "Real Estate",
      "Energy",
      "Consumer Staples",
      "Telecommunication Services"
    ]
  }
});

module.exports = mongoose.model("Index", stockSchema);
