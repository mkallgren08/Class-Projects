var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // your username
    user: "root",

    //Your password
    password: "1998",
    database: "top_songsDB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    runSearch();

    // connection.query( "SELECT * FROM products", function(err, res){
    //     if (err) throw err;
    //     console.log(res);
    // });
});

// * With all of your data successfully imported into the database, begin working on 
// a Node console application which will allow you to collect more specialized pieces of data. 
// For example...

//    * A query which returns all data for songs sung by a specific artist
//     * A query which returns all artists who appear within the top 5000 more than once
//     * A query which returns all data contained within a specific range
//     * A query which searches for a specific song in the top 5000 and returns the data for it

//  * HINT: There are some MySQL queries which could make some of these tasks even easier to 
//  * accomplish. Feel free to look at MySQL's documentation to find some of them.

function runSearch(){
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Search for an artist",
            "Search for artists who appear multiple times on the chart",
            "Search for a song/artist by release year or popularity",
            "Search for a specific song"
        ]
    }).then(function (answer){
        switch (answer.action){
            case "Search for an artist":
                findArtistSongs();
                break;
            
            case "Search for artists who appear multiple times on the chart":
                findRepeatArtists();
                break;
            case "Search for a song/artist by release year or popularity":

                break;
            case "Search for a specific song" :
            
                break;
        }

    })
}

function findArtistSongs(){
    inquirer.prompt({
        name: "userInput",
        message: "Which artist(s) would you like to search?",
        type: "input"
    }).then(function(answer){
        connection.query( "SELECT * FROM top_songsDB.top5000 where ?", {
            artist: answer.userInput
        }, function(err, result){
            if (err) throw err;
            console.log(result);
            runSearch();
        });
    })
    

}

function findRepeatArtists(){
       var query =  "SELECT * artist from top5000 GROUP BY artist HAVING count(*) > 1";
    connection.query(query, function(err, result){
        if (err) throw err;
        for (var i =0; i< result.length; i++){
            console.log(result[i]);
        }
    });
}


// findArtistSongs();
// findRepeatArtists();