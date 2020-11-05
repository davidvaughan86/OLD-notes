let button = document.querySelector("#more-info");
button.onclick = func1;
const func1 = function () {
  console.log("function1 was fired");
};
const func2 = function () {
  console.log("function2 was fired");
};
let button = document.querySelector("#more-info");
button.onclick = func1;
//add another
button.onclick = func2;
//only function 2 is fired but i want both
button.addEventListener("click", func1);
button.addEventListener("click", func2);
