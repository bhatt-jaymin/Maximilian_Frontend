const fs = require("fs");

const requestHandler=(req,res)=>{

    const url=req.url;
    const method=req.method;

    if (url === "/") {
        res.write("<html>");
        res.write("<head><title> Node || First Page </title></head>");
        res.write(
          '<body><h1><center><form action="/message" method="POST"><input type ="text" name="message"><button type="submit">Send</button></form></center></h1></body>'
        );
        res.write("</html>");
        return res.end();
      }
      if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
          console.log(chunk);
          body.push(chunk);
        });
        return req.on("end", () => {
            const parseBody=Buffer.concat(body).toString();
            const message=parseBody.split('=')[1];
            fs.writeFileSync('message.txt',message,(error)=>{
                res.statusCode = 302;
                res.setHeader = ("Location", "/");
                return res.end();
    
            });
            
        });
      
      }
      res.setHeader("content-type", "text/html");
      res.write("<html>");
      res.write("<head><title> Node || First Page </title></head>");
      res.write(
        "<body><h1><center>Hello My First Node JS Page...!</center></h1></body>"
      );
      res.write("</html>");
      res.end();
};

module.exports.handler=requestHandler;
module.exports.someText='Some hard Code Text';

