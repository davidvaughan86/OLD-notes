# Where's DigitalCrafts?

This program displays the states which have cities named "Atlanta", "Houston", "Tampa".

# Bugs to fix

- [ ] After lots of debugging, code stopped running. `node index.js` does nothing
/* const http = require('http');
const db = require('./db');
const express = require("express");
const app = express();
const server = http.createServer(app);

added const http, const express, const app, const server and uncommented calling main function


- [ ] Started crashing after adding "tampa" search
/* const statesWithATampa = statesWithCity('tampa');
    console.log('\n\nThere is a Tampa in these states:')
    for (st of statesWithATampa) {
        console.log(st);
    }

    = db.statesWithCity... db is needed to access the right file
    for (let st of statesWithTampa)... st needs to be defined by let for 'for' statement

- [ ] Prints "Atlanta" locations twice (instead of Houston)
/* const statesWithAHouston = db.statesWithCity('houston');
    console.log('\n\nThere is a Houston in these states:')
    for (let st of statesWithAnAtlanta) {
        console.log(st);
    }
   changing variable to match statesWithAHouston
*/
For each bug you fix, add documentation to this README about how you fixed it (include before/after code samples).

# For the more curious:

`db.js` includes more functions that you can try out. In `index.js`, try to `console.log()` the results of the following function calls:

- `getByAbbreviation('ak')`
- `searchByName('dakota')`
  - Why does this only return results for North Dakota (and not South Dakota)?
