var squares = document.querySelectorAll(".square");
var header1 = document.querySelector("h1");
var indication = document.querySelector("#correctC");
var message = document.querySelector("#message");
var resetGame = document.querySelector("#new-game");
var modeGame = document.querySelectorAll(".mode");

var length = 6;
var colors = listColors(length);
var correctColor = chooseCorrect(length, colors);

// Reset to the game
// Reset all changes and have a new game

resetGame.addEventListener("click", function(){
	reset();
})

function reset()
{
	colors = listColors(length);
	correctColor = chooseCorrect(length, colors);
	indication.innerHTML = correctColor;
	message.innerHTML = "";
	resetGame.innerHTML = "New Color";
	header1.style.backgroundColor = "steelblue";
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
}

for (var i = 0; i < modeGame.length; i++){
	modeGame[i].addEventListener("click", function(){
		modeGame[0].classList.remove("selected");
		modeGame[1].classList.remove("selected");
		this.classList.add("selected");

		this.innerHTML === "Easy" ? length = 3 : length = 6;

		reset();
	})
}

// Click event for each square

indication.innerHTML = correctColor;
for (var i = 0; i < length; i++){
	squares[i].addEventListener("click", function(){
		if (this.style.backgroundColor !== correctColor){
			this.style.backgroundColor = "#2D2D2D";
			message.innerHTML = "Try Again";
			message.style.transition = "all 0.3s";
		}
		else{
			changeColorSquares(length);
			header1.style.backgroundColor = correctColor;
			message.innerHTML = "CORRECT GUESS!!";
			message.style.transition = "all 0.3s";
			resetGame.innerHTML = "Play Again?";
		}
		this.style.transition = "all 0.3s";
	});
}

// Function: return a random integer
// Input: a number that is max
// Output: a random int between 0 and max

function getRandomInt(max)
{
	var maxVal = Math.floor(max);
	return Math.floor(Math.random() * maxVal) + 1;
}

// Function: form a rgb() string 
// Input: nothing
// Output: a string of rgb() with assigned values (randomized)

function rgbColor()
{
	var string = "rgb(";
	string = string + getRandomInt(255) + ", ";
	string = string + getRandomInt(255) + ", ";
	string = string + getRandomInt(255) + ")";
	return string;
}

// Make a list of random colors and assign them to squares
// Input: the length of the list
// Output: the list itself

function listColors(length) 
{
	var colors = [];
	// Assign colors to list
	for (var i = 0; i < length; i++){
		colors.push(rgbColor());
	}

	// Assign colors to squares
	for (var i = 0; i < length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	
	return colors;
}

// Choose a correct color from the list of colors
// Return that string of rgb()

function chooseCorrect(length, colors) 
{
	var position = getRandomInt(length - 1);
	return colors[position];
}

function changeColorSquares(length) 
{
	for (var i = 0; i < length; i++){
		squares[i].style.backgroundColor = correctColor;
	}
}

