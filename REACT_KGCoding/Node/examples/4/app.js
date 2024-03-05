const http = require("http");
const routes=require('./routes');
console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);




/*

NPM and Packages

Local Project 

<Your code>

Core Node Packages
                                    \/------[npm repository]
Dependencies [3rd Party] ------> express
                    |-----> Body-parser  <=========|
                                                   |
                    Installed and managed via NPM---


Types of Errors
               Syntax Errors
               Runtime Errors
               Logical Errors


               

*/