let spaceship = [
  {
    name: "truck",
    speed: 10,
    acceleration: 5,
    cargo: 8,
  },
  {
    name: "car",
    speed: 15,
    acceleration: 10,
    cargo: 4,
  },
  {
    name: "sports car",
    speed: 20,
    acceleration: 20,
    cargo: 2,
  },
];

console.log(spaceship[1].name, spaceship[1].speed);

spaceship.forEach(function (ship) {
  console.log("*******");
  for (key in ship) {
    console.log(`~${key} : ${ship[key]}`);
  }
});
