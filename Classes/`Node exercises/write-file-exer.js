const fs = require("fs");

fs.writeFile("paragraph.txt", ".", "utf8", (err) => {
  if (err) throw err;
  console.log("file is written without error");
});
