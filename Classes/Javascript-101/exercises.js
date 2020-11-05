// ## Exercise
// 1. Write a program that will declare a variable named "value".
//     - Have an if, if else, else statement that compares that value.
// 2. using ternary.
//     - compare if one number is greater than another.
//     - set the value of a variable named 'result' to 'higher' if the first number is higher and lower if the first number is lower.
// 3. Using switch.
//     - set a variable named = 'temp' and give it a value between -20 & 110.
//     - Have cases for sub 0, 30, 50, 75, 80, 90, and above.
//     - Have a hex color for each level going from blue to red.
//     - print out the color that represents the range.

// let a = 100;
// let b = 20;

// if (a >= 30) {
//   console.log("this is not true");
// } else if (a == 15) {
//   console.log("this is  not true either");
// } else {
//   console.log("a is les than b");
// }

let output = null; // the null value returns the something
let a = 100;

switch (true) {
  case a < 5:
    output = "higher";
    break;
  case a > 500:
    output = "lower";
    break;
  case a > 15:
    output = "higher";
    break;
  default:
    console.log("not working");
}
console.log(output);
