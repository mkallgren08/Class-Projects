var mysql = require("mysql")
var inquirer

var pass = [

    "armageddon3M41"

]

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // your username
    user: "root",

    //Your password
    password: pass[0],
    database: "favorite_music_library"
});

connection.connect(function(err, res){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllSongs();
    addSong();
    queryDanceSongs();
});

function queryAllSongs(){
        connection.query( "SELECT * FROM favorite_music", function(err, res){
            if (err) throw err
                for (var i = 0; i<res.length; i++){
                    console.log(res[i].song + "| " + res[i].artist + "| " + res[i].genre);
                    //connection.end();
                }
        })
}

function queryDanceSongs(){
    return
}

function addSong(){
    
    
    connection.query("Insert into favorite_music SET ?", 
        {
            song : "Don't Stop Me Now",
            artist : "Queen",
            genre : "Pop/Rock"
        },
        function(err, res){
            if (err) throw err
            queryAllSongs();
        })   
}