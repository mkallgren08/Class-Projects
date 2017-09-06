// Dependencies
// =============================================================
var express = require("express");
var mysql = require("mysql")


// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Listening on port " + port)
});

//MySQL DB Connection
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1998",
    databse: "seinfeld"
});

//Routing


app.get("/cast", function(req, res){
    connection.query("SELECT * FROM actors ORDER BY id", function(err , data){
        if (err) throw err;
        
        var html = "<h1>Actors ordered By ID</h1>";
        html += "<ul>";

        for( var i =0; i <result.length; i++){
            html+= "<li><p> ID: " + result[i].id + "</p>"
            html+= "<li><p> Name: " + result[i].name + "</p>"
            html+= "<li><p> Coolness Points: " + result[i].coolness_points + "</p>"
            html+= "<li><p> Attitude: " + result[i].attitude + "</p>"

        }

        html += "</ul>"
        res.send(html);
    })
});

app.get("/coolness-chart", function(req, res){
    connection.query("SELECT * FROM actors ORDER BY coolness_points DESC", function(err , data){
        if (err) throw err;
        
        var html = "<h1>Actors ordered By ID</h1>";
        html += "<ul>";

        for( var i =0; i <result.length; i++){
            html+= "<li><p> Coolness Points: " + result[i].coolness_points + "</p>"
            html+= "<li><p> ID: " + result[i].id + "</p>"
            html+= "<li><p> Name: " + result[i].name + "</p>"
            html+= "<li><p> Attitude: " + result[i].attitude + "</p>"

        }

        html += "</ul>"
        res.send(html);
    })
});

app.get("/attitude-chart/:att", function(req, res){
    var att = req.params.att;
    connection.query("SELECT * FROM actors where attitude = ?", [req.params.att], function(err , data){
        if (err) throw err;

        var html = "<h1> Actors With An Attitude Of" + req.params.att + "</h1>"
        html += "<ul>";
        
        for( var i =0; i <result.length; i++){
            html+= "<li><p> ID: " + result[i].id + "</p>"
            html+= "<li><p> Name: " + result[i].name + "</p>"
            html+= "<li><p> Coolness Points: " + result[i].coolness_points + "</p>"
            html+= "<li><p> Attitude: " + result[i].attitude + "</p>"

        }

        html += "</ul>"
        res.send(html);

    });
})
