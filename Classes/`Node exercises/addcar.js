const fs = require("fs");
let myCars = JSON.parse(fs.readFileSync("cars.json"));
console.log(myCars);

let newCar = {
  type: "fiat",
  speed: "Fast",
  cargo: "none",
  payload: "none",
};

const addCar = (data) => {
  myCars.push(data);
  fs.writeFile("cars.json", JSON.stringify(myCars), (err) => {
    if (err) throw err;
  });
};
addCar(newCar);
