// ********** VARIABLES ***********************

//The number the player will try to reach
var targetScore = 0;
//player's score
var currentScore = 0;


var crystal = {
	pink:
	{	name: "Pink",
		value: 0
	},
	green:
	{	name: "Green",
		value: 0
	},
	red: 
	{	name: "Red",
		value: 0
	},
	purple:
	{	name: "Purple",
		value: 0
	}
}

var winCount = 0;
var lossCount = 0;



// *******    FUNCTIONS  ****************

//generates values of crystals
var getRandom = function(min, max){
	return Math.floor(Math.random()*(max-min+1)) + min; 
}

//starts game
var startGame = function() {
	//resets
	var currentScore = 0;
	targetScore = getRandom(19, 120);

	//set crystal values
	crystal.pink.value = getRandom(1,12);
	crystal.green.value  = getRandom(1,12);
	crystal.red.value = getRandom(1,12);
	crystal.purple.value = getRandom(1,12);

	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);
}

//changes score when buttons clicked
var addValues = function(crystal){
	currentScore = currentScore + crystal.value;

	$("#yourScore").html(currentScore);
	//checks to see if game is over
	checkWin();
}

//check for win/loss
var checkWin = function() {
	if(currentScore > targetScore){
		alert("You lose!");
		lossCount++;
		$("#losses").html(lossCount);

	} else if(currentScore == targetScore){
		alert("You win!");
		winCount++;
		$("#wins").html(winCount);
	}


}
// ********** Main Process *******************

startGame();

$("#pinkCrystal").click(function(){
	addValues(crystal.pink);
});

$("#greenCrystal").click(function(){
	addValues(crystal.green);
});

$("#redCrystal").click(function(){
	addValues(crystal.red);
});

$("#purpleCrystal").click(function(){
	addValues(crystal.purple);
});


