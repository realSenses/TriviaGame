$(document).ready(function() {
    // console.log( "ready!" );

    // track which question we are on
    var questionCounter = 0;
    // initial time of 15 seconds for each question
    var time = 20;
    // will keep tally of right guesses for end game
    var correctGuesses = 0;
    //will keep tally of wrong guesses for end game
    var incorrectGuesses = 0;

    // question & answer array
    var questions = [
      {
	    question: "A male blanket octopus is ______ a female pillow octopus.",
	    choices: ["always lighter than", "always heavier than", "the same weight as", "sometimes heavier than"],
			correctAnswer: "always lighter than",
			answerExp: "A female blanket octopus is 40,000 times heavier than a male blanket octopus!",
	    image: "<img src='assets/images/blanket.gif' class='centerimage'>"
	  }, 
	  {
	    question: "How do octopuses mate?",
	    choices: ["The male octopus has sperm in his arm.", "The male octopus has sperm in his head.", "they mate with typical sex organs", "they reproduce asexually"],
			correctAnswer: "The male octopus has sperm in his arm.",
			answerExp: "The male octopus has sperm in one of his arms, which he actually tears off and gives to a female octopus. Talk about a romantic gift!",
	    image: "<img src='assets/images/love.gif' class='centerimage'>"
		}, 
	  {
	    question: "What does an octopus feel like?",
	    choices: ["like a snake", "like sandpaper", "like the inside of your cheek", "like a slimey noodle"],
			correctAnswer: "like the inside of your cheek",
			answerExp: "An octopus feels like the inside of your cheek. An octopus is actually not slimy at all.",
	    image: "<img src='assets/images/baby.gif' class='centerimage'>"
	  }, 
	  {
	    question: "Octopuses use their arms for:",
	    choices: ["moving around", "tasting things", "feeling things", "all of the above"],
			correctAnswer: "all of the above",
			answerExp: "Octopuses arms are very versatile. They use their arms for moving around, feeling and tasting.",
	    image: "<img src='assets/images/photo.gif' class='centerimage'>"
	  }, 
	  {
	    question: "Octopuses are related to:",
	    choices: ["clams", "snails", "slugs", "all of the above"],
			correctAnswer: "all of the above",
			answerExp: "Octopuses belong to the phylum mollusca with squid and cuttlefish. Clams, snails and slugs are their closest relatives.",
	    image: "<img src='assets/images/snail.gif' class='centerimage'>"
	  },
	  {
	    question: "Why are octopuses referred to as cephalopods?",
	    choices: ["because they have many long arms", "because their arms protrude out of their head", "both of the above", "none of the above"],
			correctAnswer: "because their arms protrude out of their head",
			answerExp: "Cephalopod means 'head-footed'. Therefore, octopuses are given the name cephalopod because their arms protrude directly from their head.",
	    image: "<img src='assets/images/crawl.gif' class='centerimage'>"
	  },
	  {
	    question: "Octopuses have:",
	    choices: ["tentacles", "only arms", "arms and tentacles", "arms and antennas"],
			correctAnswer: "only arms",
			answerExp: "Many people make the mistake by saying octopuses have tentacles. In reality, octopuses only have arms, which they use to do just about everything.",
	    image: "<img src='assets/images/slap.gif' class='centerimage'>"
	  },
	  {
	    question: "What is found inside an octopus's mantle?",
	    choices: ["hearts", "digestive system", "reproductive organs", "all of the above"],
			correctAnswer: "all of the above",
			answerExp: "The mantle is a muscle-like structure where all of the octopus's organs are found, including the heart, digestive system and reproductive glands.",
	    image: "<img src='assets/images/relaxed.gif' class='centerimage'>"
	  },
	  {
	    question: "How do octopuses usually protect themselves from predators?",
	    choices: ["poisonous arms", "a hard shell", "camouflage", "ink"],
			correctAnswer: "camouflage",
			answerExp: "Chameleons can learn a thing or two from octopuses. Octopuses have sophisticated camouflage abilities. They also like to hide!",
	    image: "<img src='assets/images/disappear.gif' class='centerimage'>"
	  },
	  {
	    question: "What color is octopus blood?",
	    choices: ["red", "blue", "orange", "green"],
			correctAnswer: "blue",
			answerExp: "Octopuses have blue blood, because of a copper-containing protein binds to oxygen in their blood.",
	    image: "<img src='assets/images/shell.gif' class='centerimage'>"
	  },
	  {
	    question: "How many hearts does an octopus have?",
	    choices: ["2", "3", "4", "5"],
			correctAnswer: "3",
			answerExp: "An octopus's blood does a bad job of circulating oxygen. Therefore, octopuses need three hearts to ensure good oxygen circulation.",
	    image: "<img src='assets/images/closeone.gif' class='centerimage'>"
	  },
	  {
	    question: "Chromatophores allow an octopus to:",
	    choices: ["reproduce", "regenerate", "change color", "change size"],
			correctAnswer: "change color",
			answerExp: "Chromatophores are pigmented cells that are found all over an octopus's body. These cells contain three colors and allow the octopus to blend in with its surroundings.",
	    image: "<img src='assets/images/chroma.gif' class='centerimage'>"
	  },
	  {
	    question: "How quickly can an octopus change color?",
	    choices: ["less than a second", "less than a minute", "a few minutes", "an hour"],
			correctAnswer: "less than a second",
			answerExp: "The color-changing quality of an octopus is controlled by the nervous system. This means an octopus can change color in less than a second.",
	    image: "<img src='assets/images/camouflage.gif' class='centerimage'>"
	  },
	  {
	    question: "What are iridophores?",
	    choices: ["receptor cells", "color cells", "reflective cells", "reproductive cells"],
			correctAnswer: "reflective cells",
			answerExp: "The octopus also has numerous iridophores, which are reflective cells, all over its body. These reflective cells help accentuate the camouflage effect.",
	    image: "<img src='assets/images/iridophore.gif' class='centerimage'>"
	  },
	  {
	    question: "An octopus's eyesight is:",
	    choices: ["non-exisent", "mediocre", "very good", "terrible"],
			correctAnswer: "very good",
			answerExp: "The anatomy of an octopus's eyes is similar to the human eye. Octopuses can easily see their prey and predators.",
	    image: "<img src='assets/images/eye.gif' class='centerimage'>"
		},
		{
	    question: "How intelligent is an octopus?",
	    choices: ["not so intelligent", "highly intelligent", "we don't really know", "smarter than a human being"],
			correctAnswer: "highly intelligent",
			answerExp: "An octopus is highly intelligent, and capable of navigating mazes, solving problems, and remembering solutions. They are so intelligent they are protected from animal testing.",
	    image: "<img src='assets/images/computer.gif' class='centerimage'>"
		},
		{
	    question: "An octopus's arms are mainly composed of:",
	    choices: ["nerves", "muscle", "fatty tissue", "bones"],
			correctAnswer: "muscle",
			answerExp: "Octopuses are very strong. Their arms are composed primarily of muscle, giving them the ability to tear through plexiglass.",
	    image: "<img src='assets/images/touch.gif' class='centerimage'>"
	  },
	  {
	    question: "Octopuses are:",
	    choices: ["nomadic", "nocturnal", "solitary", "all of the above"],
			correctAnswer: "all of the above",
			answerExp: "Octopuses generally live by themselves and hunt for their food only at night and relocate their home every few weeks.",
	    image: "<img src='assets/images/move.gif' class='centerimage'>"
		},
		{
	    question: "What is the activity level of a typical octopus?",
	    choices: ["very lazy", "somewhat active", "hyperactive", "almost never lazy"],
			correctAnswer: "very lazy",
			answerExp: "Octopuses are known for being lazy, spending most of their time immobile in their den.  No wonder they're so hard to find!",
	    image: "<img src='assets/images/lazy.gif' class='centerimage'>"
		},
		{
	    question: "A typical octopus lives for:",
	    choices: ["a few months", "a few years", "many years", "a few decades"],
			correctAnswer: "a few years",
			answerExp: "Octopuses generally have a very short lifespans, about three to five years.",
	    image: "<img src='assets/images/dead.gif' class='centerimage'>"
	  }];
	  

	// create question contents according to question count
	function questionContent() {
		// a for loop would be cool here...
    	$("#gameScreen").append("<p><strong>" + 
    		questions[questionCounter].question + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[0] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[1] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[2] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[3] + 
    		"</strong></p>");
	}

	// user guessed correctly
	function userWin() {
		$("#gameScreen").html("<p>That's right!</p>");
		correctGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		var answerExp = questions[questionCounter].answerExp;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			"<span class='explanation'>" +
			 answerExp + 
			 "</span>" +
			questions[questionCounter].image);
		setTimeout(nextQuestion, 5000);
		questionCounter++;
	}

	// user guessed incorrectly
	function userLoss() {
		$("#gameScreen").html("<p>Nope, sorry that's not it!</p>");
		incorrectGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		var answerExp = questions[questionCounter].answerExp;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			"<span class='explanation'>" + 
			answerExp + 
			"</span>" +
			questions[questionCounter].image);
		setTimeout(nextQuestion, 5000);
		questionCounter++;
	}

	// user ran out of time
	function userTimeout() {
		if (time === 0) {
			$("#gameScreen").html("<p>You ran out of time!</p>");
			incorrectGuesses++;
			var correctAnswer = questions[questionCounter].correctAnswer;
			$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
				correctAnswer + 
				"</span></p>" + 
				"<span class='explanation'>" +
				 answerExp + 
				 "</span>" +
				questions[questionCounter].image);
			setTimeout(nextQuestion, 5000);
			questionCounter++;
		}
	}

	// screen that shows final score and nice message :)
	function resultsScreen() {
		if (correctGuesses === questions.length) {
			var endMessage = "You have proven yourself worthy. Are you perhaps a marine biologist?" +
			"<img src='assets/images/winning.gif' class='centerimage'>"
			var bottomText = "#octopusLife";

		}
		else if (correctGuesses > incorrectGuesses) {
			var endMessage = "Not bad! But surely you can do better. Right?";
			var bottomText = "What's kraken bro?";
		}
		else {
			var endMessage = "What happened? Are you ok?";
			"<img src='assets/images/taunt.gif' class='centerimage'>"
			var bottomText = "DONT TAUNT THE OCTOPUS";
		}
		$("#gameScreen").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" + 
			correctGuesses + "</strong> right.</p>" + 
			"<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
		$("#gameScreen").append("<h1 id='start'>Start Over?</h1>");
		$("#bottomText").html(bottomText);
		gameReset();
		$("#start").click(nextQuestion);
	}

	// game clock currently set to 15 seconds
	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				userTimeout();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}

	// moves question counter forward to show next question
	function nextQuestion() {
		if (questionCounter < questions.length) {
			time = 15;
			$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			questionContent();
			timer();
			userTimeout();
		}
		else {
			resultsScreen();
		}
	// console.log(questionCounter);
	// console.log(questions[questionCounter].correctAnswer);
	}

	// reset score and counter parameters on restart
	function gameReset() {
		questionCounter = 0;
		correctGuesses = 0;
		incorrectGuesses = 0;
	}

    function startGame() {
    	$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
    	$("#start").hide();
    	// $("#gameScreen").append("<div id='question'>");
    	// var nextQuestion = questionContent(questionCounter);
    	// $("#gameScreen").append(nextQuestion);

		// $("#gameScreen").append("<p>" + questions[questionCounter].question + "</p><p>" + questions[questionCounter].choices[0] + "</p><p>" + questions[questionCounter].choices[1] + "</p><p>" + questions[questionCounter].choices[2] + "</p><p>" + questions[questionCounter].choices[3] + "</p>");
		// questionCounter++;
		questionContent();
    	timer();
    	userTimeout();
    }

    // this starts the game
    $("#start").click(nextQuestion);

    // click function to trigger right or wrong screen
	$("#gameScreen").on("click", ".choices", (function() {
		// alert("clicked!");
		var userGuess = $(this).text();
		if (userGuess === questions[questionCounter].correctAnswer) {
			clearInterval(clock);
			userWin();
		}
		else {
			clearInterval(clock);
			userLoss();
		}
	}));
});