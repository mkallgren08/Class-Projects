// remember to start process.argv calls at index [2]

// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.

function compareFunction(a,b){
    return a-b
};

var inputArray = [];

for (var i = 2; i < process.argv.length; i++){
    inputArray.push(parseFloat(process.argv[i]));
};

inputArray = inputArray.sort(compareFunction);

console.log(inputArray);

console.log(inputArray.toString())