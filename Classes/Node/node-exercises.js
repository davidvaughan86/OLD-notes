// ## Exercises
// 1. Console log from 1 to 100 using node.
// 2. Create a function that accepts a string as an argument.
//     - Have the program write to the terminal "The cow says ... {the value supplied}"
//     - Call that function 3 times with 3 different strings as the argument.
// 3. Using the array below, create a new array of just the names using mape in node.js.
// - ```js
let people = [
  { name: "batman", powers: "none" },
  { name: "iron man", power: "rich" },
  { name: "The Hulk", powers: "being green" },
  { name: "Superman", powers: "Being an Alien" },
];

// 1. Create a node program that requires the os module.
//    - Look through the os module documentation and print the
//    following 3 pieces of information:
//      - The amount of free memeory in the system.
//      - The network interfaces information.
//      - The user information for the system.
//    - Make a function that will retrieve all of the above pieces
//    of information and return that information in an array.
//    - Call that function and set the returned value to an variable
//    and console.log the variable.

const os = require("os");

const getInfo = () => {
  let platform = os.totalmem();
  console.log(platform);
};

getInfo();
const osArrayFunc = () => [os.freemem(), os.networkInterfaces(), os.userInfo()];

// Create a node app that will read the contents of a text file
// and console.log the content.
// Create a json file called "data.json" with the following content.
//   [{"name":"Clint", "age":29}, {"name":"Anna", "age":27},
//   {"name":"Olivia", "age":11}]
// For each name person console.log("{name} is {age} years old!"
// where name and age are the keys name and age respectivly.
const fs = require("fs");
fs.readFile("test.docx", (err, data) => {
  if (err) throw err;
  console.log(data);
});
