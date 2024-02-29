// Add Express
const express = require("express");
const { query, validationResult  } = require('express-validator');

// Initialize Express
const app = express();
app.use(express.json());

// Create GET request
app.get("/api/ping", (req, res) => {
  res.send("PONG");
});

app.get('/api/hello', query('person').notEmpty(), (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(`Hello, ${req.query.person}!`);
  }

  res.send({ errors: result.array() });
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;
