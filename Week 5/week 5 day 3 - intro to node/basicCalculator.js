var a = process.argv[2];

var b = parseFloat(process.argv[3]);

var c = parseFloat(process.argv[4]);


if (a === "add"){
	console.log(b + c);
} else if (a === "subtract"){
	console.log(b - c);
} else if (a === "multiply"){
	console.log(b * c);
} else if (a === "divide"){
	console.log(b / c);
} else if (a === "remainder"){
	console.log(b % c);
} else if (a === "exp"){
	console.log(Math.pow(b, c));
};



