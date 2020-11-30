const fs = require("fs");
const folderPath = "/Classes/Node";

fs.readdir(folderPath, (err, files) => {
  files.forEach((file) => {
    console.log(file);
  });
});
