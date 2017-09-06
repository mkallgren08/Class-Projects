
// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
  ];

  app.listen(port, function() {
    console.log("App listening on port " + port);
  });

  app.get("/icecream/:name", function(req, res){
    var flavor = req.params.name
    for (var i =0; i < icecreams.length; i++){
        if (icecreams[i].name === flavor){
            return res.render("index", icecreams[i])
        } 
    }
    
  })

  app.get("/icecreams", function(req, res){
    res.render("allIceCream", {ics : icecreams})
  })