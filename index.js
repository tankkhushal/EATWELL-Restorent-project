const express = require('express')
const port=8002;

const app = express();
const path = require('path')

app.set("view engine",'ejs');
app.set("views",path.join(__dirname,'views'));

app.get("/",(req,res)=>{
    res.render("Home",{
        "student": studentdata
    });
    
})

app.listen(port,(err)=>{
    if(err){
    console.log(err);
    return false;
}
console.log("server is runing"+port);
})