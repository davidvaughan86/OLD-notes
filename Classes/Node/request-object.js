const http = require("http");
const { cpuUsage } = require("process");

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
  res.statusCode = 200;
  const url = new URL(req.headers.host + req.url); // uses both the domain and resource.
  let page = url.searchParams.get("page"); // used to get the url params - enter the variable as a string into the get method
  let foo = url.searchParams.get("foo");
  let count = url.searchParams.get("count");
  let content = "";
  switch (page) {
    case "about":
      content += `<h1> this is the about page</h1>`;
      break;
    case "contact":
      content += `<h1> this is the contact page</h1>`;
      break;
    default:
      content += `<h1> this is the home page</h1>`;
  }
  content += `<div> the count is ${count || 0}</div>`;

  // if we had a database of comedians names we would use the name as the key for user input to send back the data
  //   res.writeHead(200, {
  //     // this is where we edit the res headers
  //     "Content-Type": "text/html", // you might send an image or just some http text
  //     "Access-Control-Allow-Origin": "*", // this is for CORS. this is to allow users to access from their computers, * is used to give everyone access, place IP of site to limit access
  //   });
  res.end(content);
});

server.listen(5566, () => {
  console.log("server is running on port 5566");
});
