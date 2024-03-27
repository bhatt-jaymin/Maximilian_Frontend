const http = require('http');
const bodyParser=require('body-parser');
const express=require("express");
const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',(req,res,next)=>{
    console.log('Server Started...');
   
    next();
}); 

app.get('/create-users',(req,res,next)=>{
    console.log('In the Middleware');
    res.send('<form action="/users" method="POST"> <center> <input type="text"name="title"><button type="submit">Add New User </button> </center> </form>')
}); 


app.post('/users',bodyParser.urlencoded({extended:false}),(req,res,next)=>{
    console.log(req.body);
    res.send('<script>alert("New User Registered Successfully...!"); window.location="/";</script>');
    
})

app.use('/',(req,res,next)=>{
    console.log('In the Other Middleware');
    res.send('<h1><center><u>Hello User DashBoard</u></center></h1>')
});

const server = http.createServer(app);

server.listen(3000,()=>{
console.log('Server run on 3000');
});
