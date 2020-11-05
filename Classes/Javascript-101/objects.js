let aboutMe = {
  name: "Clint",
  age: 38,
  tall: false,
};

// with javascript you do not need quotes around the key

// use += to add a value to a key

// newObject.name = will assign a new item to the object list

console.log(aboutMe); // this will print hte object list

delete aboutMe.tall; // this will delete the tall segment

for (attrib in aboutMe) {
  // for in statement
  console.log(attrib);
  console.log(aboutMe[attrib]);
}
