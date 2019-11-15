const Index = require("../models/stockIndex.js");

const stockInfoController = {
  index: (req, res) => {
    Index.find({}).then(indexes => {
      res.json(indexes);
    });
  },
  showId: (req, res) => {
    Index.findOne({ _id: req.params.id }).then(index => {
      res.json(index);
    });
  },
  showSymbol: (req, res) => {
    let regex = `^${req.params.symbol}$`;
    re = new RegExp(regex, "i");
    Index.findOne({ Symbol: re }).then(index => {
      res.json(index);
    });
  },
  showName: (req, res) => {
    let regex = `^${req.params.name}$`;
    re = new RegExp(regex, "i");
    Index.findOne({ Name: re }).then(index => {
      res.json(index);
    });
  },
  showSector: (req, res) => {
    let regex = `^${req.params.sector}$`;
    re = new RegExp(regex, "i");
    Index.find({ Sector: re }).then(index => {
      res.json(index);
    });
  },
  create: (req, res) => {
    Index.create(req.body).then(index => {
      res.json(index);
    });
  },
  edit: (req, res) => {
    Index.findOneAndUpdate({ Symbol: req.params.symbol }, req.body, {
      new: true
    }).then(index => {
      res.json(index);
    });
  },
  delete: (req, res) => {
    Index.findOneAndDelete({ Symbol: req.params.symbol }).then(index => {
      res.json(index);
    });
  }
};

module.exports = stockInfoController;
