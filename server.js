const express = require('express');

// ==============================================================================================

require('dotenv').config();

// Setting up mongoDB / mongoose
const mongoose = require('mongoose');
const dbURL = process.env.DB_URL;

// Connecting to mongoDB
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => process.exit());

// ==============================================================================================

const gatewayService = require("./gateway/service")

const server = express();
server.use(gatewayService);

// ==============================================================================================

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`\n=== Server listening on port ${port} ===\n`);
});