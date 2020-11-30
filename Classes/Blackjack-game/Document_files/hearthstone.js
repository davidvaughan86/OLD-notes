//ajax.js
function get_cards(response) {
  const cardArray = response.data;
  console.log(cardArray);
}
let url = "https://hearthstoneapi.com/cards";

const ajax = (url, callback, method = "GET") => {
  if (!url) return console.error("Request Required");
  if (!callback) return console.error("get cards Required");

  const request = new XMLHttpRequest();

  const handleStateChange = (evt) => {
    console.log(evt.target);
    let req = evt.target;
    if (req.readyState !== 4) return;
    if (req.status === 200) return callback(req.response);
    callback("");
  };

  request.addEventListener("readystatechange", handleStateChange);

  request.open("GET", url);
  request.send();
};

ajax("https://hearthstoneapi.com/cards", get_cards);
