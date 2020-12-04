const db1 = require("./1");
const db2 = require("./2");

module.exports = {
  db1: db1,
  db2: db2,
};


// takeaway

/*
- start with a file named app.js, server.js, main.js or index.js
- look at require() and module.exports first
- find one peice of functionality locate a function and exmaine 
  the praramters and return value
    -repeat until satisfed
- module.exports exports a value not a var
- require() is a function callm meaning it is replaced 
  with the exported value.
  */