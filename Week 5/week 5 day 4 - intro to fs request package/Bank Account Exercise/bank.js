var fs = require("fs")

var arg1 = process.argv[2].toString().toLowerCase();
var arg2 = parseFloat(process.argv[3]);

var account = 0.0


if (arg1 === "deposit"){
    fs.appendFile('bank.txt', arg2 + ",", function(err, data){

    })
    console.log("Depositing "+ arg2)

} else if (arg1 === "total"){
    fs.readFile('bank.txt', 'utf8', function(error, data){
        var dataArr = data.split(",")
        for (var i = 0; i<dataArr.length; i++){
            account += parseFloat(dataArr[i]);
        }     
    });
    console.log("Current balance: " + account.toFixed(2));
} else if (arg1 === "withdraw"){
    fs.appendFile('bank.txt', arg2*-1 + ",", function(err, data){     
            })
    console.log("Withdrawing "+ arg2)

} else if (arg1 === "lotto"){
    var lottoNum = Math.floor(Math.random()*10000 +1 )
    var userLottoNum = Math.floor(Math.random()*10000 +1)
    if (lottoNum === userLottoNum){
        console.log("Holy crap, you won! 50,000$ has been added to your account");
        account = account + 50000;
    } else {
        console.log("I'm sorry, you did not win this time. The ticket was 25 cents - this amount" + 
         " has been taken from your account. Better luck in the future!")
         account = account - 0.25
    }
} else {
    console.log("error!")
}