// ********** VARIABLES ***********************

//The number the player will try to reach
var numberToMatch="";

var playerScore = 0;

var pinkCrystal;
var greenCrystal;
var redCrystal;
var purpleCrystal;

var winCount = 0;
var lossCount = 0;



// *******    FUNCTIONS  ****************

//generates values of crystals
function crystalValue(crystal) {
	return crystal = Math.ceil(Math.random()*12);
}

function startGame(){
	//generates value of number player is trying to match
	return numberToMatch = Math.floor(Math.random()*101) + 19;
	

	


	//resets for game
	playerScore = 0;
	$("#playerScore").text(playerScore);

	$("button").on("click", function(){
		playerScore = playerScore + parseInt($(this).data("number"));

		$("playerScore").text(playerScore);

		if(number === numberToMatch){
			winCount++;
			alert("you win!");
			startGame();
			crystalValue();
		} else if (number > numberToMatch){
			lossCount++;
			alert("you lose!");
			startGame();
			crystalValue();
		}



	});

};

$("#value").text(numberToMatch);





