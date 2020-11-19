let footer = document.querySelector("footer");
footer.classList.add("highlighted");
console.log(footer);

let myButton = document.querySelector("#more-info");
let myInterval = setInterval(function () {
  myButton.classList.toggle("hidden");
}, 300);

let footer = document.querySelector("footer");
footer.classList.replace("highlighted", "primary");
