var bandNames = require("./bands.js")
var output = bandNames.bands

for (key in output){
    if (output.hasOwnProperty(key)) {
        console.log(key + " -> " + output[key]);
      }
}