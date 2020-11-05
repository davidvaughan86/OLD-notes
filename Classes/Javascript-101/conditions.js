let a = 2,
  b = 20,
  c = 30;

if (a === 10) {
  // the comparassion needs to be inside the ()
  console.log(`a is actually 10`);
} else if (a < 20) {
  console.log(`a is less  than 20`);
} else {
  console.log(`onw of these are not true`);
} // if and else uses the { through its argument}

let a = 10;

a == 10 ? "yes!" : "no"; //yes!

//assign from the expression
let b = a == 20 ? "yes!" : "no";
console.log(b); //no

if (a < b) console.log(print); // using : to make the order statement and also using one line for the console command

let a = 10;

switch (a) {
  case 20:
    console.log("a is 20");
    break;
  case 15:
    console.log("a is 15");
    break;
  case 10:
    console.log("a is 10");
    break;
  default:
    console.log("I really don't know");
// this is used for a user to input multiple choices
// it goes down the line until it finds the true
// it makes a case against the values, changing the case will result in it running until i finds a case or BREAK
// without break it will continue until it finds a break

let a = 10;
let b = 20;

if (a >= 30) {
  console.log("this is not true");
} else if (a == 15) {
  console.log("this is  not true either");
} else {
  console.log("a is les than b");
}
