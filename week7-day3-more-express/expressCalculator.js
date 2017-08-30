// **Instructions**

//  * You will create an Express calculator application with 
//  * one get route that is able to take in three parameters: 
//  * an operation and two numbers.

//  * There are four operation values which a user may use: 
//  * addition, subtraction, multiplication, and division.

//  * When the route is hit, your browser should display the 
//  * result of the math operation and the two numbers on the screen.

//    * For example, when the user goes to the url 
//    * <http://localhost:3000/addition/10/1>, 
//    * the page should display 11.

// Dependencies
var express = require("express");

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:num1/:num2", function(req, res) {

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers
  var operation = req.params.operation;
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
    case "addition":
      // Add your logic here. Pun intended.
      result = num1 + num2;
      break;
    case "subtract":
    case "minus":
      // Subtract logic
      result = num1 - num2;
      break;
    case "multiply":
    case "times":
      // Multiply
      result = num1 * num2;
      break;
    case "divide":
    case "quotient":
      // Divide
      result = num1/num2;
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
app.listen(3002, function(){
  console.log('Listening on port 3002')
});
