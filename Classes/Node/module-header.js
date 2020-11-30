// gives info to the browser about what it can access and type of content that is sent to the browser.

// const http = require("http")
// const { getMaxListeners } = require("process")
//   const server = http.createServer((req,res)=>{
//       res.writeHead(200, {
//           "Content-Type":"text/html" // use text/html to see the HTML or you will jsut see the litteral textg
//       })
//       //You can write to the response before sending/ending
//       res.write("<div>This is a div</div>")
//       res.end()

//conent headers send the browser what to render

// cheadertype called access control allow origin. known as key value pair - which cpus are allowed to acess the end point. prevents the site from sending data to users who are not permitted with information
const http = require("http"); // exists on my server and sets a policy about which people are able to access specific endpoints.

let myPeeps = [
  { name: "David", last: "Vaughan", email: "dvon@gmail.com" },
  { name: "Diana", last: "Vaughan", email: "divon@gmail.com" },
  {
    name: "Jim",
    last: "Vaughan",
    email: "Jvon@gmail.com",
  },
];

const server = http.createServer((req, res) => {
  // listens for a req and sends a res(object) to pass into the paramters

  res.writeHead(200, {
    // this is where we edit the res headers
    "Content-Type": "application/json", // you might send an image or just some http text
    "Access-Control-Allow-Origin": "*", // this is for CORS. this is to allow users to access from their computers, * is used to give everyone access, place IP of site to limit access
  });
  res.write(JSON.stringify(myPeeps)); // res.write puts data on the res (JASON.stringify will urn your JS into a JSON string)
  res.end(); // the res is done being modified
});
server.listen(5566, () => {
  console.log(`Running on Port ${5566}`);
});
