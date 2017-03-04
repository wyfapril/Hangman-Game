// set a list of words
// var listWords = ["apricot", "blackcurrant", "cherimoya", "durian", "elderberry", "fig", "guava", "huckleberry", "jackfruit", "kumquat", "lychee", "mulberry", "nectarine", "olive", "persimmon", "quince", "rambutan", "starfruit", "tamarind", "watermelon", "yuzu"];
var listWords = ["hello", "worlds"];

// choose a word from listWords randomly
var answer = listWords[Math.floor(Math.random() * listWords.length)];

// find string length of the answer
var n = answer.length;

// draw n dashes
var dash = (Array(n+1).join("-")); 

// record right and wrong guessing
var correct = 0;
var wrong = 0;
 
// player guess a letter
document.onkeyup = function(event) {
	var playerGuess = event.key;

	// limit playerGuess to alphabetic letters
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 	
	if (alphabet.includes(playerGuess)) {
		
		for (var i=0; i<n; i++) {
			if (playerGuess == answer.charAt(i)) {
				// put the correct letter to its corresponding place in dashes
				console.log(dash = dash.substr(0,i) + answer.charAt(i) + dash.substr(i+1)); 
				console.log("correct guess: " + playerGuess);
				correct++;
				} else {
				console.log("wrong guess: " + playerGuess);
				// How to record EVERY wrong guess in one log??? 
				// How to skip count already guessed letters???
				wrong++;
				}		
				var html = "<p>Welcome to hangman game!</p>" + 
				"<p>Press anykey to start.</p>" +
				"<p>" + dash + "</p>" + 
				"<p>The word has " + n + " letters. Good luck!</p>" + 
				"<p>correct: " + correct + "</p>" +
		        "<p>wrong: " + wrong + "</p>";
				// Injecting the HTML we just created into our div and updating the game information on our page.
		          document.querySelector("#hangman").innerHTML = html;
			}
		} else {
		alert("Please enter a valid letter!");
	}
	
	
}



