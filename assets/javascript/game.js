var runGame = function() {
				var wins = 0;
				var losses = 0;
				var computerPoints = (Math.floor(Math.random()*101))+20;
				var playerScore = 0;
				var gem1 = (Math.floor(Math.random()*11+2));
				var gem2 = (Math.floor(Math.random()*11+2));
				var gem3 = (Math.floor(Math.random()*11+2));
				var gem4 = (Math.floor(Math.random()*11+2));

				var resetGame = function() {
					computerPoints = (Math.floor(Math.random()*101))+19;
					playerScore = 0;
					gem1 = (Math.floor(Math.random()*11+2));
					gem2 = (Math.floor(Math.random()*11+2));
					gem3 = (Math.floor(Math.random()*11+2));
					gem4 = (Math.floor(Math.random()*11+2));
					$('.playerScore').text(playerScore);
					$('.computerPoints').text(computerPoints);
					$('#gem1value').text("?");
					$('#gem2value').text("?");
					$('#gem3value').text("?");
					$('#gem4value').text("?");
				};
								
				var scoreCheck = function() {
					if (playerScore === computerPoints) {
						alert("You win! The treasure is all yours!")
						wins++;
						$(".wins").text(wins);
						resetGame();
					} else if (playerScore>computerPoints) {
						alert("You lose! The dragon is eating good tonight! Try again.");
						losses++;
						$(".losses").text(losses);
						resetGame();
					}
				};

				$('.computerPoints').text(computerPoints);

				$('.gem1').on('click', function() {
					playerScore+=gem1;
					$('.playerScore').text(playerScore);
					$('#gem1value').text(gem1);
					scoreCheck();
				});

				$('.gem2').on('click', function() {
					playerScore+=gem2;
					$('.playerScore').text(playerScore);
					$('#gem2value').text(gem2);
					scoreCheck();
				});

				$('.gem3').on('click', function() {
					playerScore+=gem3;
					$('.playerScore').text(playerScore);
					$('#gem3value').text(gem3);
					scoreCheck();
				});

				$('.gem4').on('click', function() {
					playerScore+=gem4;
					$('.playerScore').text(playerScore);
					$('#gem4value').text(gem4);
					scoreCheck();
				});
}