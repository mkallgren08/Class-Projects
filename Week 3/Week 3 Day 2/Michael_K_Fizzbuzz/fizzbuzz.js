var i = 0

function fizzBuzz(){
	for (i = 1; i <= 100; i++){
		var fizz = Number.isInteger(i/3);
		var buzz = Number.isInteger(i/5);

		if (fizz === true && buzz === true){
			console.log(" Fizzbuzz");
		} else if (fizz === true){
			console.log(" Fizz");
		} else if (buzz === true){
			console.log(" Buzz")
		} else {
			console.log(i)
		} 
	};
};

fizzBuzz();