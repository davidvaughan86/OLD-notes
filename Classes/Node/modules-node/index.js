// const user = require("./user");
// console.log(`User: ${user.getName()}`);

const user = require("./user"); // ./user for importing modules and also using that name.variable after a cashcurly($)
console.log(
  `User: ${user.getName()} lives in ${user.getLocation()} and was born on ${
    user.dob
  } `
);
