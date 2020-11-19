// // Write an arrow function that accepts a number as an argument and multiplys
// // that number by itself and returns the value.
// // Write an arrow function that has 2 arguments. Add the two arguments and
// // console.log the results.
// // Write an array of makes.
// // using forEach loop through the array and have the callbakc function be an arrow function that prints will print the index +1 and
// // then the make.

// let square = (value) => {
//   // square is the function and value is the parameter. what the function needs to know to perform its task
//   return value * value;
// };
// square(6);
// console.log(square(6));
// // console.log(result);

// let square = (value, result) => {
//   // square is the function and value is the parameter. what the function needs to know to perform its task
//   return value * result;
// };
// square(6, 5);
// console.log(square(6, 5));

// //   Create an array of vehicle objects.

// // each vehicle object needs to have keys of make, speed, passangers.
// // using map, create a list of makes of the vehicles.
// // Create an array of at least 6 todo items with each todo having keys, id,
// // todo, status.

// // Limit the status to "complete","in-progress","todo"
// // Using map create a list of different status.
// // using map of those status, make a list of status objects that has keys
// // status, and items.

// let array = [
//   {
//     make: "toyota",
//     speed: 350,
//     passengers: 2,
//   },
//   {
//     make: "ford",
//     speed: 300,
//     passengers: 6,
//   },
//   {
//     make: "harley",
//     speed: 450,
//     passengers: 1,
//   },
// ];

// let makes = array.map((vehicle) => vehicle.make);
// console.log(makes);

// 1. Create an array of at least 6 todo items with each todo having keys, id,
// todo, status, deadline (timestamp).
//     - Make at least one date before today.
//     - Limit the status to "complete","in-progress","todo"
//     - Using filter, create an array of only the complete items.
//     - Using find, get the soonest todo item that has a status of "todo".
//     - using filter get an array of all of the past due items.

// let timestamp = new Date("11 / 08 / 2020"); //.getTime

// todoList = [
//   {
//     id: 1,
//     todo: "get paid",
//     status: "todo",
//     deadline: new Date("11 / 08 / 2020"),
//   },
//   {
//     id: 2,
//     todo: "hit bank",
//     status: "complete",
//     deadline: new Date("11 / 08 / 2020"),
//   },
//   {
//     id: 3,
//     todo: "cash check",
//     status: "complete",
//     deadline: new Date("11 / 08 / 2020"),
//   },
// ];

// let compelted = todoList.filter((todo) =>
//   todo.status === "todo" ? True : false
// );

// console.log(completed);

// let soonest = todoList.find(item

// 1. Create an array of letters and create an array of numbers.
//     - Using the spread operator create an array of the values of the
//     letters first then the numbers.
//     - Make another array with the numbers first.

// let letters = ["a", "b", "c", "d"];
// let numbers = [1, 2, 3, 4];
// let spreadOp1 = [...letters, "e", "f"];
// let spreadOp2 = [...numbers, 5, 6, 7];
// myArr = [...spreadOp2, ...spreadOp1];
// myArr2 = [...spreadOp1, ...spreadOp2];
// console.log(myArr);
// console.log(myArr2);

// 2. Using the spread operator when possible do the following:
//     - Create a new array adding at least 2 more cars.
//     - From that new array return another array removing any cars made before 2018.
//     - Create a new array with a 2010 ford focus added to the begining.
//     - Create a new array of the cars sorted by date without changing the
//     original cars array.

// let cars = [
//   {
//     make: "camry",
//     year: 1990,
//   },
//   {
//     make: "civic",
//     year: 1970,
//   },
//   {
//     make: "mustang",
//     year: 2000,
//   },
// ];

// let volvo = {
//   make: "volvo",
//   year: 1980,
// };

// let jeep = {
//   make: "jeep",
//   year: 1980,
// };
// let myCars = [...cars, volvo, jeep];
// console.log(myCars);

