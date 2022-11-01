

/********************************************************************************* 
 *  WEB322 – Assignment 03 
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
 * of this assignment has been copied manually or electronically from any other source  
 * (including 3rd party web sites) or distributed to other students. * 
 * Name: Thang Bui Quang Student ID: 117863217 Date: 10/10/2022  
 * ********************************************************************************/





var HTTP_PORT = process.env.PORT || 8080; 
var express = require("express"); 
var app = express();
var path = require("path");
var officeData = require("./modules/officeData");
app.use(express.static(__dirname + "public"));

// setup a 'route' to listen on the default url path app.get("/", (req, res) => { res.send("Hello World!"); });
app.get("/", (req, res) => { 
    res.send("Hello World!"); });
 
// setup http server to listen on HTTP_PORT app.listen(HTTP_PORT, ()=>{console.log("server listening on port: " + HTTP_PORT)});
app.listen(HTTP_PORT, ()=>{console.log("server listening on port: " + HTTP_PORT)});

app.get("/PartTimer", (req, res) =>
{
    officeData.getPartTimers().then(function (data){
        res.send(JSON.stringify(data));
    }).catch(function(){
        res.send(JSON.stringify({message: "no results"}));

    });
});

app.get("/employee/:num", function(req, res){
    officeData.getAllEmployeeByNum(req.params.num).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.json({message:err});
    })
    
});

app.get("/audio", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/audio.html"));

});

app.get("/video", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/video.html"));

});

app.get("/table", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/table.html"));

});

app.get("/list", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/list.html"));

});

app.use((req,res) =>{
    res.status(404).sendFile(path.join(__dirname, "./views/404.html"));
});





































