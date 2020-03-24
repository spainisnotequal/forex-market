const express = require("express");

// create the Express app
const app = express();

// Express JSON parser
app.use(express.json());

// create a GET route to check if the backend is connected
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// configure the port
const PORT = process.env.PORT || 5000;

// start the server and console.log that the server is up and running
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
