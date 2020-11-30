const fs = require("fs");
let ships = JSON.parse(fs.readFileSync("ship-data.json"));
console.log(ships);

let newShip = {
  type: "speeder",
  speed: "Fast",
  cargo: "none",
  payload: "none",
};

const addShip = (data) => {
  ships.push(data);
  fs.writeFile("ship-data.json", JSON.stringify(ships), (err) => {
    if (err) throw err;
  });
};
addShip(newShip);
