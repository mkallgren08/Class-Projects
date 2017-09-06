// **Instructions**

//  * Using the previous example as a guide, create an app that has two web servers.
//   * One that listens on port 7000 and one that listens on port 7500.
//   * The one listening on port 7000 will always tell the user something good about themselves.
//   * The one listening on 7500 will always tell the user something bad about themselves.
//   * Make sure you create a Github repo and commit this code!

//  **Bonus**

//  * Look for other ways to expand what your server can do. As possibilities:
//     * Generate the good/bad phrase randomly from a list of predefined phrases
//     * Use the `twitter` package inside the response to also return a random tweet

var http = require("http");

var PORTone = 7000;

var PORTtwo = 7500;

function handleRequestOne(request, response){
    response.end("You are doing okay with" + doingFineOn());
}

function handleRequestTwo(request, response){
    response.end("You could improve on: " + toImproveOn());
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);



serverOne.listen(PORTone, function(){
    console.log("Server listening on: http://localhost:%s", PORTone)
})

serverTwo.listen(PORTtwo, function(){
    console.log("Server listening on: http://localhost:%s", PORTtwo)

})


function doingFineOn(){
    console.log("Server listening on: http://localhost:%s", PORTone)
    var goodQualities = ["Intelligence", "Empathy", "Resilience", "Caring", "Strength"]
    var i = Math.floor(Math.random()*goodQualities.length)
    return  goodQualities[i]
}

function toImproveOn(){
    console.log("Server listening on: http://localhost:%s", PORTtwo)
    var needsImprovement = ["Weight", "Physical Health", "Mental Health", "Contentedness", "Patience"]
    var i = Math.floor(Math.random()*needsImprovement.length)
    return  needsImprovement[i]
}