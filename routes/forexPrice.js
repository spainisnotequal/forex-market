const express = require("express");

// create the router
const router = express.Router();

// import the ForexPrice model
const ForexPrice = require("../models/ForexPrice");

// @route        GET api/forexPrices
// @description  Get all the forex data
// @acces        Public
router.get("/", (req, res) => {
  ForexPrice.find()
    .sort({ date: -1 })
    .then(data => res.json(data));
});

// @route        GET api/forexPrices/gold
// @description  Get gold prices
// @acces        Public
router.get("/gold", (req, res) => {
  ForexPrice.find()
    .select("date gold_price")
    .sort({ date: -1 })
    .then(data => res.json(data));
});

// @route        GET api/forexPrices/silver
// @description  Get silver prices
// @acces        Public
router.get("/silver", (req, res) => {
  ForexPrice.find()
    .select("date silver_price")
    .sort({ date: -1 })
    .then(data => res.json(data));
});

// @route        POST api/forexPrices
// @description  Create a register (date, gold_price, silver_price)
// @acces        Public
router.post("/", (req, res) => {
  const { date, gold_price, silver_price } = req.body;

  const newForexPrice = new ForexPrice({ date, gold_price, silver_price });

  newForexPrice.save().then(forexPrice => res.json(forexPrice));
});

// @route        DELETE api/forexPrices/:id
// @description  Delete a register (date, gold_price, silver_price)
// @acces        Public
router.delete("/:id", (req, res) => {
  ForexPrice.findById(req.params.id)
    .then(data => data.remove().then(() => res.json({ sucess: true })))
    .catch(error => res.status(404).json({ sucess: false }));
});

// export the router
module.exports = router;
