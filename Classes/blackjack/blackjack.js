window.addEventListener("DOMContentLoaded", function () {
  // Execute after page load
  console.log("Callback");
});

let dealer = document.getElementById("dealer-hand");
let player = document.getElementById("player-hand");
let button = document.getElementById("deal-button");
// let ace = [14, 1];
// let king = 13;
// let queen = 12;
// let jack = 11;
const suits = ["clubs", "dimonds", "hearts", "spades"];
const values = [1, 2, 4, 3, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let deck = [];
function buildDeck() {
  let deck = new Array();
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let weight = parseInt(values[i]);
      if (values[i] == "J" || values[i] == "Q" || values[i] == "K") weight = 10;
      if (values[i] == "A") weight = 11;
      var card = { Value: values[i], Suit: suits[x], Weight: weight };
      deck.push(new Card(values[x], suits[i]));
    }
  }
  return deck;
}
class Card {
  constructor(points, suit) {
    this.points = points;
    this.suit = suit;
    this.imageUrl = `<img src=images/${points}_of_${suit}.png>`;
  }
}
buildDeck();
console.log(deck);
button.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault();
  dealer.innerHTML = deck[1].imageUrl;
  document.querySelector("div.dealer-hand");
}

function shuffle(deck) {
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let tmp = deck[location1];
  }
}
var players = new Array();
function createPlayers(num) {
  players = new Array();
  for (var i = 1; i <= num; i++) {
    var hand = new Array();
    var player = { Name: "Player " + i, ID: i, Points: 0, Hand: hand };
    players.push(player);
  }
}
function createPlayersUI() {
  document.getElementById("players").innerHTML = "";
  for (var i = 0; i < players.length; i++) {
    var div_player = document.createElement("div");
    var div_playerid = document.createElement("div");
    var div_hand = document.createElement("div");
    var div_points = document.createElement("div");

    div_points.className = "points";
    div_points.id = "points_" + i;
    div_player.id = "player_" + i;
    div_player.className = "player";
    div_hand.id = "hand_" + i;

    div_playerid.innerHTML = players[i].ID;
    div_player.appendChild(div_playerid);
    div_player.appendChild(div_hand);
    div_player.appendChild(div_points);
    document.getElementById("players").appendChild(div_player);
  }
}
function startblackjack() {
  document.getElementById("btnStart").value = "Restart";
  document.getElementById("status").style.display = "none";
  // deal 2 cards to every player object
  currentPlayer = 0;
  createDeck();
  shuffle();
  createPlayers(2);
  createPlayersUI();
  dealHands();
  document.getElementById("player_" + currentPlayer).classList.add("active");
}
function dealHands() {
  // alternate handing cards to each player
  // 2 cards each
  for (var i = 0; i < 2; i++) {
    for (var x = 0; x < players.length; x++) {
      var card = deck.pop();
      players[x].Hand.push(card);
      renderCard(card, x);
      updatePoints();
    }
  }

  updateDeck();
}
function renderCard(card, player) {
  var hand = document.getElementById("hand_" + player);
  hand.appendChild(getCardUI(card));
}

function getCardUI(card) {
  var el = document.createElement("div");
  el.className = "card";
  el.innerHTML = card.Suit + " " + card.Value;
  return el;
}
var currentPlayer = 0;
function hitMe() {
  // pop a card from the deck to the current player
  // check if current player new points are over 21
  var card = deck.pop();
  players[currentPlayer].Hand.push(card);
  renderCard(card, currentPlayer);
  updatePoints();
  check();
}

function check() {
  if (players[currentPlayer].Points > 21) {
    document.getElementById("status").innerHTML =
      "Player: " + players[currentPlayer].ID + " LOST";
  }
}
function stay() {
  // move on to next player, if any
  if (currentPlayer != players.length - 1) {
    document
      .getElementById("player_" + currentPlayer)
      .classList.remove("active");
    currentPlayer += 1;
    document.getElementById("player_" + currentPlayer).classList.add("active");
  } else {
    end();
  }
}

function end() {
  var winner = -1;
  var score = 0;

  for (var i = 0; i < players.length; i++) {
    if (players[i].Points > score && players[i].Points < 22) {
      winner = i;
    }

    score = players[i].Points;
  }

  document.getElementById("status").innerHTML =
    "Winner: Player " + players[winner].ID;
}
