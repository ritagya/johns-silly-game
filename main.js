// John and a friend invented a simple game where the player with the heighest value of his height plus five times his age wins (what a silly game)

/*var johnsHeight = 190;
var johnsAge = 24;
var johnsScore = johnsHeight + ( 5 * johnsAge);

var dansHeight = 180;
var dansAge = 25;
var dansScore = dansHeight + ( 5 * dansAge);

var marysHeight = 170;
var marysAge = 28;
var marysScore = marysHeight + ( 5 * marysAge);


console.log("john = " + johnsScore + " dan + " + dansScore + " mary + " + marysScore);

if(johnsScore > dansScore && johnsScore > marysScore){
	console.log("John wins!")
}
else if(dansScore > johnsScore && dansScore > marysScore){
	console.log("Dan wins!")
}
else if(marysScore > johnsScore && marysScore > dansScore){
	console.log("Mary wins!")
}
else{
	console.log("It's a tie")
}*/


// Using functions to make it more dynaic 

function getScore(height, age){
	return height + (5 * age);
}

var johnsScore = getScore(180, 26);
var dansScore = getScore(190, 24);
var marysScore = getScore(170, 28);

function winner(){
	
	if(johnsScore > dansScore && johnsScore > marysScore){
	}
	else if(dansScore > johnsScore && dansScore > marysScore){
		console.log("Dan wins!")
	}
	else if(marysScore > johnsScore && marysScore > dansScore){
		console.log("Mary wins!")
	}
	else{
		console.log("It's a tie")
	}
}

winner();