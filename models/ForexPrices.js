const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ForexPricesSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  gold_price: {
    type: Number,
    required: true
  },
  silver_price: {
    type: Number,
    required: true
  }
});

// Export the model to be able to import it in other files
module.exports = ForexPrices = mongoose.model("forexPrices", ForexPricesSchema);
