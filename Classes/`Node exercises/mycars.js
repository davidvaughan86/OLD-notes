const fs = require("fs");

let myCars = [
  {
    type: "Ford",
    speed: "medium",
    cargo: "large",
    payload: "low",
  },
  {
    type: "Audi",
    speed: "fast",
    cargo: "none",
    payload: "medium",
  },
  {
    type: "BMW",
    speed: "slow",
    cargo: "none",
    payload: "high",
  },
];

fs.writeFile("cars.json", JSON.stringify(myCars), "utf8", (err) => {
  if (err) throw err;
  console.log("the JSON file has been written");
});
