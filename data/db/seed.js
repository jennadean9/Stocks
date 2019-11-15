const Index = require("../models/company.js");
const data = require("./stocks.json");

Index.remove({}).then(() => {
  Index.create(data)
    .then(index => {
      console.log(index);
      process.exit();
    })
    .catch(err => {
      console.log(err);
      //   process.exit();
    });
});
