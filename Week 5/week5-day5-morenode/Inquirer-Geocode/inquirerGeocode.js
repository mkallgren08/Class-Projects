// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs. 
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require("geocoder");
var inquirer = require("inquirer")
var address = "";

// Take in the command line arguments
inquirer.prompt([

    {
      type: "input",
      name: "name",
      messsage: "What is your name?"
    },

    {
      type: "input",
      name: "address",
      messsage: "And what location would you like info on?"
    }

]).then(function(user) {
  
  // Then use the Google Geocoder to geocode the address
  geocoder.geocode(user.address, function(err, data) {
  console.log(JSON.stringify(data, null, 2));
});

});

// Create an empty string for holding the address


// Capture all the words in the address (again ignoring the first two Node arguments)
for (var i = 2; i < nodeArgs.length; i++) {

  // Build a string with the address.
  address = address + "" + nodeArgs[i];
  console.log(address);

}

// Then use the Google Geocoder to geocode the address
geocoder.geocode(address, function(err, data) {
  console.log(JSON.stringify(data, null, 2));
});

