const http = require("http")
const express = require("express")

const app = require("app")
const server = http.createServer(app);

app.get(`/` , (req, res) => {
    res.send(`
    <h1>"favorite animes"</h1> 
    `)
});



server.listen(8001, `locallost`, () => {
console.log(`running on server 8001`)
});