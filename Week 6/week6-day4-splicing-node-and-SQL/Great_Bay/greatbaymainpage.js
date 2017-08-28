var mysql = require("mysql");
var inquirer = require("inquirer");

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
    database: "greatbayDB"
});

connection.connect(function(err, res){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});


function addItem(itemNamep, descriptionp, currentBidp){      
    connection.query("Insert into items_to_bid SET ?", 
        {
            itemName : itemNamep,
            description : descriptionp,
            currentBid : currentBidp,
            sold: false,

        },
        function(err, res){
            if (err) throw err
            queryAllItems();
        })   
}

function queryAllItems(funct){
    connection.query( "SELECT * FROM items_to_bid", function(err, res){
        if (err) throw err
            for (var i = 0; i<res.length; i++){
                console.log(res[i].id + "| " + res[i].itemName + "| " +
                 res[i].description + "|" + res[i].currentBid);
                //console.log(res)
            }
            funct(err, res)
    })
}
var bidArray = []
function makeBidArray(funct){
    connection.query( "SELECT * FROM items_to_bid", function(err, res){
        if (err) throw err
        for (var i = 0; i<res.length; i++){
                bidArray.push(res[i].id.toString());
        }
        console.log("Bid array = " + bidArray);
        funct(err, bidArray);
    })
}

var products = "SELECT * FROM items_to_bid WHEN sold = false"
console.log(products)

inquirer
  .prompt([
    {
        type: "list",
        message: "Do you want to post an item or bid on an item?",
        choices: ['Post an Item', 'Bid on an item'],
        name: "postOrBid",
    }
  ])

  .then(function(response) {
      if (response.postOrBid === "Post an Item"){
          inquirer
          .prompt([
              {
                type: "input",
                message: "What item are you posting?",
                name: "itemName"
              },
              {
                type: "input",
                message: "Tell us a little bit about the product that you're posting!",
                name: "description"
              },
            {
              type: "input",
              message: "What do you want the starting bid to be?",
              name: "currentBid"
            },
          ])
        .then(function(response){
            console.log("You're item has been posted!")
            addItem(response.itemName, response.description, response.currentBid);
        })
      }
    else {
        queryAllItems(function(err, response){
            makeBidArray(function(err, bidArray){
                console.log("Bid array = " + bidArray)
                inquirer
                  .prompt([
                      {
                        type: "list",
                        message: "What item would you like to bid on?",
                        choices: bidArray,
                        name: "productChoices"
                      },
                  ])
                    .then(function(response){
                        console.log("You chose " + response.productChoices + "!")
                        inquirer
                            .prompt([
                            {
                                type: "input",
                                message: "The current bid on this product is ? How much would you like to bid?",
                                name: "customerBid"
                            }
                        ])
                        .then(function(response){
                            if(response.customerBid) {
                                console.log("Congratulations! You're the highest bidder!")
                            }
                            else {
                                console.log("Sorry. Someone else wants it more...")
                            }
                        })
                    }).catch(function(err){
                        console.log(err)
                    }); 
        

            });
        })   
        
    }})
//Add Comment Collap