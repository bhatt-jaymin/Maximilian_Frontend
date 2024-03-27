const http = require('http');
const express=require("express");
const app=express();

app.use('/',(req,res,next)=>{
    console.log('Server Started...');
   
    next();
}); 
app.use('/users',(req,res,next)=>{
    console.log('In the Middleware');
    res.send('<h1><center><u> Add New User on Node JS Server..! </u></center></h1>')
    //next();
}); 

app.use('/',(req,res,next)=>{
    console.log('In the Other Middleware');
    res.send('<h1><center><u>Hello Express Node JS Server</u></center></h1>')
});

const server = http.createServer(app);

server.listen(3000,()=>{
console.log('Server run on 3000');
});
