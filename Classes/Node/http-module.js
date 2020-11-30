const http = require("http");
const htmlContent = `
<!DOCTYPE html>
<html>
    <head>
        <title>HTML Content from Node</title>
    </head>
    <body>
        <h1>This is a full HTML document!</h1>
        <ul>
            <li>It's Valid!</li>
            <li>It's From Node!</li>
            <li>It's Just a String!</li>
        </ul>
        <script>
            console.log("It's like magic")
        </script>
    </body>
</html>
`;
const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  res.writeHead(200, {
    // this is where we edit the res headers
    "Content-Type": "text/html", // you might send an image or just some http text
    "Access-Control-Allow-Origin": "*", // this is for CORS. this is to allow users to access from their computers, * is used to give everyone access, place IP of site to limit access
  });
  res.end(htmlContent);
});

// ...
//We are not using req right now
// const server = http.createServer((req, res) => {
//   //set the status code to 200 before it sends
//   res.statusCode = 200;

//   //ends the response to the client
//   //and sends the data in the argument
//   res.end("Hello World");
// });
// // Start Server
// const http = require("http");
const port = 5007; //any port number

// ... //the other content

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
