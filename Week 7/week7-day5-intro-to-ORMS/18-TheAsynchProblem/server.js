var orm = require("./config/orm.js");


// The data here needs to WAIT for the query in orm.js to complete
// before it can actually display the data received from the query.
// You solve that issue by adding in a callback that forces the 
// function to wait.
var data = orm.selectWhere("parties", "party_type", "grown-up",function(err, result){
    if (err) throw err;
    var data = result;
    console.log(data)
});
