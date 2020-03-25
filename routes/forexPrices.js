const express = require("express");

// create the router
const router = express.Router();

// import the ForexPrices model
const ForexPrices = require("../models/ForexPrices");

// @route        GET api/forexPrices
// @description  Get all the forex data
// @acces        Public
router.get("/", (req, res) => {
  ForexPrices.find()
    .sort({ date: -1 })
    .then(data => res.json(data));
});

// @route        GET api/forexPrices/gold
// @description  Get gold prices
// @acces        Public
router.get("/gold", (req, res) => {
  ForexPrices.find()
    //.select(date gold_price)
    .sort({ date: -1 })
    .then(data => res.json(data));
});

// @route        GET api/forexPrices/silver
// @description  Get silver prices
// @acces        Public
router.get("/silver", (req, res) => {
  ForexPrices.find()
    //.select(date silver_price)
    .sort({ date: -1 })
    .then(data => res.json(data));
});

// export the router
module.exports = router;
