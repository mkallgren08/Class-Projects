var http = require("http");
var url = require("url");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log('Server is listening on %s', PORT)
})

function handleRequest(req, res) {
    var urlParts = url.parse(req.url);
    var path = urlParts.pathname;

    switch (path){
        case "/":
            displayRoot(path, req, res)
        break;

        case "/portfolio":
            displayPortfolio(path, req, res);
        break;

        case "/edit":
            console.log("display edit");
        break;

        default:
            display404(path, req, res)
    }

};

function displayRoot(url, req, res){
    var myHTML = "<html>"
    myHTML += '<body><h1>Home Page </h1></body>';
    myHTML += "<a href='/portfilio.js>Portfolio</a>";
    myHTML += "<body></html>";
    res.wrtieHead(200, {"Content-Type": "text/html"});
    res.end(myHTML)
}

function displayPortfolio(url, req, res){
    var myHTML = "<html>"
    myHTML += '<body><h1>My Portfolio </h1></body>';
    myHTML += "<a href='/portfilio.js>Go Home</a>";
    myHTML += "<body></html>";
    res.wrtieHead(200, {"Content-Type": "text/html"});
    res.end(myHTML)
}

function display404(url,req,res){
    res.writeHead(404, {
        "Content-Type" : "text/html"
    })
    res.write("<h1>404 Not Found</h1>")
    res.end("The page you are looking for- "+ url + " -cannot be found.")
}