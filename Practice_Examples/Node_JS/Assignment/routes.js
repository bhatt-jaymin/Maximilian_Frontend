const fs = require("fs");

const requestHandler=(req,res)=>{
const url = req.url;
const method = req.method;

if (url === "/") {
    res.write("<html>");
    res.write("<head> <title> Node || User-Home </title></head>");
    res.write(
      "<body> <h1> <center> Welcome Users DashBoard Page </center> </h1> </body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head> <title> Node || Users </title></head>");
    res.write(
      "<body><ul><li><h1>User 1</h1></li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-users" && method === "GET")  {
    res.write("<html>");
    res.write("<head> <title> Node || Create-Users </title></head>");
    res.write(
      "<body><form action='/create-users' method='POST'> <input type='text' name='create-users'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }


  if (url === "/create-users" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
        body.push(chunk);
    });
    return req.on("end", () => {
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.split("=")[1];
        fs.writeFile("message.txt", message, (err) => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("Internal Server Error");
            } else {
                console.log("Data saved successfully.");
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            }
        });
    });
}
  
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("</head><title> Node || UserPage </title>");
  res.write("<body><h1>User Display on Node Server Successfully </h1> </body>");
  res.write("</html>");
  res.end();

};

module.exports=requestHandler;