    // This requires the fs built-in/package (which comes built in with node, which
    // is why you don't need to call a filepath).
    var fs = require("fs")
    
    fs.readFile('best_things_ever.txt', 'utf8', function(error, data){
        // This line checks for javascript 'truthiness' which is exactly what it sounds like:
        // it checks for a state that makes sense to the function. I.e., if the file name was 
        // null, it would throw back an error code
        if (error) {
            return console.log(error)
         }
     
         console.log(data);
     
         var dataArr = data.split(",");
         
         for (var i = 0; i<dataArr.length; i++){
             console.log("Best thing number "+ (i+1) + ": " + dataArr[i])
         }

         //console.log(dataArr)
    });