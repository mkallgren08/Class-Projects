var a = parseFloat(process.argv[2]);

var b = parseFloat(process.argv[3]);

if ( a%7 === 0 && b%7 === 0){
    console.log("true")
} else if (a === b){
    console.log("true")
} else if ( a !== b){
    console.log("false")
}

// This is the one-line version of the code:
//console.log(process.argv[2] === process.argv[3])

// Bonus
//console.log((process.argv[2] % 7) + (process.argv[3] % 7) === 0);
