
const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const request=require("request");


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
    // res.send("hello");
});
app.post("/",function(req,res){
    var firstName=req.body.Fname;
    var lastName=req.body.Lname;
    var eMail=req.body.Email;
    // response.write(firstName);
    // response.write(lastName);
    // response.write(Email);
    console.log(firstName,lastName,eMail);
    // response.send();
})

app.listen(3000,function(){
    console.log("Listening on port 3000");
})