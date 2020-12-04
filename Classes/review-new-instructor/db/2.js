// as a web dev your data will amost always be an array of objects

const users = [
  {
    name: "alice",
    isActive: true,
  },
  {
    name: "bob",
    isActive: false,
  },
  {
    name: "carl",
    isActive: true,
  },
];
//specific to node.js
module.exports = users; // users is the variable
