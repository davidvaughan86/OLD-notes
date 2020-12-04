const http = require('http');
const db = require('./db');
const express = require("express");
const app = express();
const server = http.createServer(app);




function main() {

    const statesWithAnAtlanta = db.statesWithCity('atlanta');
    console.log('\n\nThere is an Atlanta in these states:')
    for (let st of statesWithAnAtlanta) {
        console.log(st);
    }
    
    console.log('\n\n============================');
    
    const statesWithAHouston = db.statesWithCity('houston');
    console.log('\n\nThere is a Houston in these states:')
    for (let st of statesWithAHouston) {
        console.log(st);
    }
    
    console.log('\n\n============================');

    const statesWithATampa = db.statesWithCity('tampa');
    console.log('\n\nThere is a Tampa in these states:')
    for (let st of statesWithATampa) {
        console.log(st);
    }

    

}   
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomCity = abbrev => { 

    const state = db.getByAbbreviation(abbrev);
    const randomState = Object.keys(state.cities)
    console.log(randomState[getRandomInt(0, randomState.length)])
    

}
randomCity("CA");
// main();

server.listen(8002, 'localhost', () => {
    console.log('running on port 8002')
});