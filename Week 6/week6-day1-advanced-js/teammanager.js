var inquirer = require("inquirer");

function randStat() {
   var randStat = Math.round(Math.random()*10)
};

// var randStatArr = []
// for (var j = 0; j < 7; j++){
//     randStatArr[j] = randStat
// }

// var arrayCounter = 0
// function generateStats() {
//     if (arrayCounter <8 ){
//         randStatArr.push(randStat)
//     }
// }

var off1 = randStat
console.log(off1)
var def1 = randStat
console.log(def1)


var teamRoster = [];

// Another way to allow user input and have it be validated for the stats is:
// inquirer.prompt([{
//     name: "Offensive score",
//     message: "Offense Ability? (on scale of 1 - 10?)",
//     validate: function(value) {
//         if (!isNaN(value)&& parseInt(input) > 0 && parseInt(value) <= 10){
//             return true;
//         }
//         return false;
//     } 
// }])

function Player(name, position/*, offense, defense*/){
    this.name = name;
    this.position = position;
    //console.log(offense);
    this.offense = Math.round(Math.random()*10);
    //console.log(defense);
    this.defense = Math.round(Math.random()*10);
    this.goodGame = function(){
        var coinFlip = Math.round(Math.random)
        if (coinFlip === 0){
            this.offense++;
            console.log(this.name + "'s defense offense went up!")
            
        } else {
            this.defense++
            console.log(this.name + "'s defense defense  went down!")
            
        }
    };
    this.badGame = function(){
        var coinFlip = Math.round(Math.random)
        if (coinFlip === 0){
            this.offense--;
            console.log(this.name + "'s defense offense went down!")
        } else {
            this.defense--;
            console.log(this.name + "'s defense defense went down!")
            
        }     
    };
    this.printStats = function(){
        console.log("\n========================================="+
        "\nPlayer: " + this.name + "\nPosition: " + this.position+ 
        "\nOffensive Score: " + this.offense + "\nDefensive Score: "+
        this.defense + "\n========================================");

    } 

}

var mainRosterCount = 0
var subPlayerCount =0 
var makePlayer = function(){
    
        if (mainRosterCount < 5 && subPlayerCount === 0){
            console.log("Who is player " + mainRosterCount+1);
            inquirer.prompt([
                {
                name: "name",
                message: 'What is your name?'
                },
                
                {
                    name: "position",
                    message: 'What is your position/title?'
                }
    
    
            ]).then(function(answers) {
                // initializes the variable newguy to be a programmer object which will take
                // in all of the user's answers to the questions above
                var newGuy = new Player(answers.name, answers.position/*, randStat(), randStat()*/);
                // printInfo method is run to show that the newguy object was successfully created and filled
                //newGuy.printInfo();
                teamRoster.push(newGuy)
                mainRosterCount++;
                makePlayer();
            })
        }else if (mainRosterCount === 5 && subPlayerCount < 3){
            console.log("Who is sub " + subPlayerCount+1);
            inquirer.prompt([
                {
                name: "name",
                message: 'What is your name?'
                },
                
                {
                    name: "position",
                    message: 'What is your position/title?'
                }
            ]).then(function(answers) {
                // initializes the variable newguy to be a programmer object which will take
                // in all of the user's answers to the questions above
                var newGuy = new Player(answers.name, answers.position, randStat, randStat);
                // printInfo method is run to show that the newguy object was successfully created and filled
                //newGuy.printInfo();
                teamRoster.push(newGuy)
                subPlayerCount++;
                makePlayer();
            })
        } else {
            for (var i = 0; i <teamRoster.length; i++){
                teamRoster[i].printStats();
            } 
        }
    };
//generateStats();
//console.log(randStatArr)
makePlayer();