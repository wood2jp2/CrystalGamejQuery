var scoreCheck = function() {
	if (playerScore!==computerPoints) {
		if (playerScore === computerPoints) {
			alert("You win! Play another round!")
			wins+=1;
		}
	}
}