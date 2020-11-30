const fs = require("fs");

// fs.writeFile("my-file.txt", "this is some newertext", "utf8", (err) => {
//   if (err) throw err;
//   console.log("file is written without error");
// });

let lockFile = false;

const writeFile = () => {
  //if its not locked
  if (!lockfile) {
    //lock the file
    lockFile = true;
    //then write the file
    fs.writeFile("my-file.txt", "this is some newertext", "utf8", (err) => {
      if (err) throw err;
      //done writing unlock the file
      lockFile = false;
      console.log("file is written without error");
    });
  } else {
    //tell your file is locked
    console.log("the file is locked");
  }
};
