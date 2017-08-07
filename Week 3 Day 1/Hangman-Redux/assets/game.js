$(document).ready(function(){

	var characSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
					'l', 'm' ,'n' ,'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
					'w', 'x' ,'y' ,'z' ]

	var ansArray = ["dog", "cat", "turtle", "fish", "lizard", "bird", "gerbil", "hamster", "rat"]

	var guessesLeft = 12
	var wins = 0
	var losses = 0
	var answer = ""
	var answerArr = []
	var displayArr = []
	var letter = ""
	var userGuess = ""
	var currentGuesses = []


	// Generic Random Num Generator
	function randomNumGen(multiplier){
		return Math.floor(Math.random()*multiplier)
	}
	// Generates Random Answer From 
	function generateAns(){
		answer = ansArray[randomNumGen(ansArray.length)];
		return answer;

	}

	function generateAnsArr(){
		for (var i =0; i < answer.length; i++){
		letter = answer[i];
		console.log(letter);
		answerArr.push(letter);
		}
		console.log(answerArr);
		return answerArr
	}

	function displayedArray(answer){
		// for (var i = 0; i <answer.length)
		displayArr = answer.fill("_").join(" ");
		console.log(displayArr)
		$("#guess-the-word").html(displayArr);

	}


	generateAns();
	console.log(answer);
	generateAnsArr();
	displayedArray(answerArr);



	document.onkeyup = function(event){
		userGuess = event.key.toLowerCase();

		if (characSet.indexof(userGuess) === -1){
			console.log("Invalid key entry")
//		} else if (){

		} else if (answerArr.indexOf(userGuess) === -1){
			currentGuesses.push(userGuess);
			$("#current-guesses").html(currentGuesses).join(" ")
//		} else if (currentGuesses){

//		} else if (){

		}
	}

});