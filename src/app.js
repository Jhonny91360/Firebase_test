const express= require("express");
const server= express();
const router=require("./routes/index");

server.use("/",router);
//
module.exports=server;