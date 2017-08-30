// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Knight",
  age: 60,
  forcePoints: 1350
}];

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});


//Note: the ":characters" is just a placeholder - it acts like a variable in your browser URL bar
// Meaning you can add "/yoda" to your address and it would look up Yoda. If you did "/darthmaul"
// it would be darthmaul, etc. It's  shorter way than writing this: 

// app.get("/yoda", function(req, res) {
//   res.json(yoda);
// });

// app.get("/darthmaul", function(req, res) {
//   res.json(darthmaul);
// });


app.get("/:characters", function(req, res) {
  var chosen = req.params.characters;

  // What does this log?
  console.log(chosen);
  console.log('Name: ' + chosen.name)

  res.end();
});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
