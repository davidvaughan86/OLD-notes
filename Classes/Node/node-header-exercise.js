// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;

//   res.setHeader("X-Foo-Header", "RandomData/Random");
//   res.setHeader("X-My-Header-Not-Real", "MoreRandom");
//   res.end("Sent. Check the network!");
// });

const htmlContent = `
<!DOCTYPE html>
<html>
    <head>
        <title>HTML Content from Node</title>
    </head>
    <body>
        <h1>This is a full HTML document!</h1>
        <ul>
            <li>sushi</li>
            <li>tacos</li>
            <li>potatoes</li>
        </ul>
        <script>
            
        </script>
    </body>
</html>
`;
const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(htmlContent);
});
server.listen(5566, () => {
  console.log(`Running on Port ${5566}`);
});
