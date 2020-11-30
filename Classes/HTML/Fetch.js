fetch("omgvamp-hearthstone-v1.p.rapidapi.com")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

const makecard = (data) => {
  console.log(data);
};

fetch("omgvamp-hearthstone-v1.p.rapidapi.com")
  .then((res) => res.json())
  .then((data = {}));
