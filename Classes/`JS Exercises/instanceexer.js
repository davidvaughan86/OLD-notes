// typeof - in javascript typeof is an operator to
// output what data type an item is.

// 1. Instance an object of any name of your choice.
// 2. Using the mdn documents about Array, check to
// see if that instance is an array.
//     - create an array and check to see if it is an
//     array as well.
// 3. Using the documents join the array together and
// console.log the results.
function Attack() {}
let power_blast = Attack();

power_blast = new Attack();

power_blast instanceof Attack;

power_blast = {
  finger: "shot",
  palm: "beam",
  eyes: "lasers",
};
console.log(power_blast);
console.log(Attack);
