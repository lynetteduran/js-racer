var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player1message = document.getElementById("player1message");
var player2message = document.getElementById("player2message");
var player1position = 0;
var player2position = 0;
var finishLine = 600;
var raceWon = false;

var moveEl = function(element, position) {
	element.style.left = position + "px";
};

document.body.addEventListener("keydown", function(event) {

	if (raceWon) {
		return;
	}

	if(event.keyCode == 65) {
		player1position += 10;
		moveEl(player1, player1position);
	}

	if(event.keyCode == 39) {
		player2position += 10;
		moveEl(player2, player2position);
	}

	if(player1position >= finishLine) {
		player1message.style.visibility = "visible";
		raceWon = true;
	}
	if(player2position >= finishLine) {
		player2message.style.visibility = "visible";
		raceWon = true;
	}
});
