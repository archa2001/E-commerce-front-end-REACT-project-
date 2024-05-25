const express =require("express");
const cookieParser =require("cookie-parser");
const app= express();

const user =require("./controller");
const bodyParser=require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.post("/register",user.userRegister);

module.exports=app;
