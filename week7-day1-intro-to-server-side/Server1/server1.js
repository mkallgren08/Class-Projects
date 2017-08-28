var http = require("http");

var PORT = 8080;

function handleRequest(request, response){
    response.end("It works! Path hit: " + request.url);
}