const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// in development, load environment variables (for instance, MONGODB_DEV)
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// import routes
const forexPrice = require("./routes/forexPrice");

// create the Express app
const app = express();

// Express JSON parser
app.use(express.json());

// MongoDB configuration
const mongoDB = process.env.MONGODB_URI || process.env.MONGODB_DEV;

// connect to the database
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(error => console.log("MongoDB connection error: ", error));

// use Routes
app.use("/api/forexPrices", forexPrice);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// configure the port
const PORT = process.env.PORT || 5000;

// start the server and console.log that the server is up and running
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
