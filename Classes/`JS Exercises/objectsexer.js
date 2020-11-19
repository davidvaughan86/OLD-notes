let spapceship = {
  speed: 10,
  acceleration: 5,
  passengers: 2,
  fuel: 100,
};

spapceship.payload = 50;
console.log(spapceship);

spapceship.fuel -= 100 / 3;
console.log(spapceship);

for (key in spapceship) {
  console.log(key);
  console.log(spapceship[key]);
}
