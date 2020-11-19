const request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status == 200) {
    // in order to make sure the read state is at stage 4 - request finished
    console.console.log(this);
  }
};
request.open("GET", "./sample.text");
request.send();
// 1. create the XMLhttprequest object
// 2. add an onreadystate change  event handler function (variable.onreadystatechange = function ())
// 3. set your handler functuon to check for teh final readystate and a successful status (final is 4)
// 4. open the request (open("GET", "text/web")
// 5. send() the request

fetch("./sample.txt").then((response) => {
  console.log(response);
});

const request = new XMLHttpRequest();
request.onreadystatechange = (evt) => {
  let req = evt.target;
  if (req.readyState !== 4) return;
  if (req.status === 200) console.log(req.response);
  callback(nul, req.status);
};

const ajax = (url, callback, method = "GET") => {
  // if the medthod is not supplied it will default to GET
  if (!url) return console.error("Request Required");
  if (!callback) return console.error("Callback Required");
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", (evt) => {
    let req = evt.target; // targeting the event listener
    if (req.readyState !== 4) return; // if states to determine if the process is complete
    if (req.status === 200) return callback(req.response);
    callback("");
  });
  request.open(method, url); //method/GET and the url for the website
  request.send();
};
