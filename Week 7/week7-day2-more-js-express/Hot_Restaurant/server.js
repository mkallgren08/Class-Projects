// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Reservation data (DATA)
// =============================================================
var reservations = [
  {
    custName: "Michael",
    custPhone: "555-555-5555",
    custEmail: "boo",
    custID: "PICKLE RICK"
	
}
];

//Waiting list (DATA)
//===============================================================
var waitList = [];
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});


//Routes to the page to add reservation
app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

//Routes to the page to add reservation
app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// Get all reserved tables and the waiting list
app.get("/all", function(req, res) {
  res.json(
    {
      reservations: reservations, 
      waitlist: waitList
    }
  );
});


// Create New Reservations - takes in JSON input
app.post("/api/new", function(req, res) {
  var newReservation = req.body;
  // This line is useful for adding search functionality
  //newReservation.routeName = newReservation.custName.replace(/\s+/g, "").toLowerCase();

  //Take new request and determine if the user can reserve a table or if they go
  //on the waitlist

  if (reservations.length <= 5) {
    reservations.push(newReservation);
  } else {
    waitList.push(newReservation);
  }
  
  console.log(newReservation);


  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});