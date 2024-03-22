const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head> <title> Node || Message </title></head>");
    res.write(
      "<body><form action='/message' method='POST'> <input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === 'POST') { // Access method from req
    fs.writeFileSync("message.txt", "Dummy");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  //console.log(req.url,req.headers,req.method);
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("</head><title> Node || First </title>");
  res.write("<body><h1>Message Send Successfully On Node Server </h1> </body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
