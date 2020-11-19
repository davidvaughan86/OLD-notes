// function madlib() {
//   this.name = name;
//   this.subject = history;
// }

// let madlib = ("David", "History");
// let subject = new madlib();

// madlib();

function greet(name) {
  return "hello" + " " + name;
}
greet("david");
console.log(greet("david"));
// console.log(tipAmount(good));
// tipAmount(good);

// function printNumbers() {
//   return printNumbers;
// }
// let num = range(1, 10);
// console.log(num);

let theService = {
  good: 0.2,
  fair: 0.15,
  bad: 0.1,
};

bill = 100;
// let good = bill * 0.2;
function tipAmount(theService) {
  return "pay this for their service:" + " " + theService;
}
tipAmount(bill * theService.good);
console.log(tipAmount(bill * theService.good));
