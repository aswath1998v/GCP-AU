require("dotenv").config();
// Import express and create a new express app
const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(helmet());
const cors = require("cors");
const http = require("http");
// Import our new books route file
const api = require("./router");

// Define the port we're going to listen for requests on
const hostname = "localhost";
const port = 8080;

app.use(cors());

// Add body-parser middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Register the books routes with /api
// app.use('/api/avgPressureSensorData', api);
api(app);

// // Define a basic GET request. The request & response object are passed in
app.get("/", async (req, res) => {
  // Use the request object to send back 'Hello world!'
  res.send("Hello world!");
});

// Tell the app to listen on that port, and log out to the console once its listening.
// const httpServer = http.createServer(app);

// httpServer.listen(8080);

// console.log('API server started on: ' + 8080);

app.listen(port, () => {
  console.log("Listening on port " + port);
});

module.exports = app;
