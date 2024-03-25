const http=require('http');
const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log('In the Middleware');
    next();    
});


app.use((req,res,next)=>{
    console.log('In the another Middleware');
    res.send('<h1><center><u>Hello Express JS!</u></center></h1>')
        
});
app.listen(3000);

