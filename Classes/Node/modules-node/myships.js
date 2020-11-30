const fs = require("fs");

let ships = [
  {
    type: "Freighter",
    speed: "medium",
    cargo: "large",
    payload: "low",
  },
  {
    type: "Fighter",
    speed: "fast",
    cargo: "none",
    payload: "medium",
  },
  {
    type: "Bomber",
    speed: "slow",
    cargo: "none",
    payload: "high",
  },
];

fs.writeFile("ship-data.json", JSON.stringify(ships), "utf8", (err) => {
  if (err) throw err;
  console.log("the JSON file has been written");
});
