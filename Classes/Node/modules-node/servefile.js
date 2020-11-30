const fs = require("fs");
const serveFileName = (req, res, filename) =>{
    fs.readFile(".", filename (err,data) => {
        if (err) {
            res.writeHead(404);
            return res.end(JSON.stringify(err));
        }
        res.write(data)
        next(req,res)
    })
}

module.exports = serveFileName