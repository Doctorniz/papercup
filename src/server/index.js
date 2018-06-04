// LOAD DEFAULT MODULES

const http = require('http');
const path = require('path');
require('dotenv').config({ path: 'src/server/variables.env' });

// INITIATE EXPRESS
// Start new instance of express app

const express = require('express');
const app = express();

const server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    console.log("Server listening at", process.env.IP + ":" + process.env.PORT + " at " + new Date());
  });

