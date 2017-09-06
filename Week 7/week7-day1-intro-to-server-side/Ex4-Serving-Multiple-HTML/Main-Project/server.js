// Dependencies
var http = require("http");
var fs = require("fs");
var url = require("url");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
        var urlParts = url.parse(req.url);
        var path = urlParts.pathname;
    
        switch (path){
            case "/":
                displayRoot(path, req, res)
            break;

            case "/favmovies":
            case "/favmovies.html":
                displayMovies(path, req, res)
            break;
    
            case "/favfood":
            case "/favfood.html":
                displayFood(path, req, res);
            break;
    
            case "/favcss":
            case "/favcss.html":
                displayCSS(path, req, res);
            break;
    
            default:
                display404(path, req, res)
        }
    
    };
function displayRoot(url, req, res){
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/index.html", function(err, data) {
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });

}

function displayMovies(url, req, res){
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/favmovies.html", function(err, data) {
  
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  
}

function displayFood(url, req, res){
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/favfood.html", function(err, data) {
  
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  
}

function displayCSS(url, req, res){
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/favcss.html", function(err, data) {
  
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  
  }
// In case there's an error
function display404(url,req,res){
    res.writeHead(404, {
        "Content-Type" : "text/html"
    })
    res.write("<h1>404 Not Found</h1>")
    res.end("The page you are looking for- "+ url + " -cannot be found.")
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});




