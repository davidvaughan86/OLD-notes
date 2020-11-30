const fs = require("fs");
const serveFavicon = (req, res, next) => {
  fs.readFile("./favicon.ico", (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end(JSON.stringify(err));
    }
    res.write(data);
    next(req, res);
  });
};

module.export = serveFavicon;
