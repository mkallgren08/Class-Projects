var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.

var funct = function(){};

function logThenDo(a, b){
    console.log(a);
    b();
}

logThenDo("Hi!", function(){
    console.log("This message brought to you by your very first callback!")
})

// Write a function that runs a function argument if
// its other argument is truthy.
function runIf(func,bool){
    if (bool){    // You wouldn't write if (bool === true), because it explicity evaluates 
                  // bool as true or false, not truthy or falsey
        func();
    }
}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function returnResult(f, val){
    return function() {
        return f(val);
    }
}
// Use fs.writeFile to log a message to a file called
// log.txt. Are yo uusing callbacks anywhere? Where?
