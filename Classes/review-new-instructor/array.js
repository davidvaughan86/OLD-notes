/*
 hello to an array of names, one at a time
    - for () loops
    - for of loops
    -forEach() loops
hello to an array of names  longer than 5 letters
    -.filer()

hello to a name if its in the array, otherwise "hello world"
    -.find() // a function that accepts an array and returns an array
                but only includes items that pass the callback() test
                

*/

const names = ["alice", "bob", "carl", "dave", "elle"];
//a for loop is if you need more control
for (let i = 0; i < names.length; i++) {
  const oneName = names[i];
  console.log(`${i}; ${oneName}`);
}

// for of is when you only need the array elements one at a time
for (let oneName of names) {
  console.log(`hello ${oneName}`);
}
for (let b = 99; b > 0; b--) {
  console.log(`${b} bottles of coke`);
}

const hello = (whom) => console.log(`hello ${whom}`);
const bye = (whom) => console.log(`bye ${whom}`);
// names.forEach(hello); // change the argument here in to a named var
// names.forEach(bye);

const combo = (name) => {
  // name is just a descriptive lable
  hello(name);
  bye(name);
};
// combo('alice')

names.forEach(combo);
// // taking the right side of the 'combo' function and applying to teh foreach parameters
names.forEach((name) => {
  // this is an annonymous function since there is no var cnamed
  hello(name);
  bye(name);
});
//demo of .filter will filter through the loop

const isNameLong = (n) => {
  if (n.length > 4) {
    return n.length > 4;
  }
};
helloLongName("bob");

const longNames = names.filter(isNameLong);
console.log(longNames);

let longNames2 = [];
for (let n of names) {
  if (isNameLong(n)) {
    longNames2.push(n);
  }
}
console.log(longNames2);
// isnamelong is an arrow function that uses implicit return
const isNameLong = (n) => n.length > 4;
// we use isnamelong as a callback to names.filter()
const longNames = names.filter(isNameLong);

// implmentation of our own .filter
const myFilter = (arr, callback) => {
  // 1. create an empty array
  let newArray = [];
  // 2. interate through the items in the array we were passed
  for (let n of arr) {
    // 3. use callback function as a test
    if (callback(n)) {
      //4. if the item passes
      // add it to the array
      newArray.push(n);
    }
  }
};
