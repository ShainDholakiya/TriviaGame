$(document).ready(function () {

	function openingPage() {
		openScreen = "<p class='text-center main-button-container'><a class='btn btn-warning btn-md btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
		$("#mainArea").append(openScreen);
	}

	openingPage();

	$("#mainArea").on("click", ".start-button", function (event) {
		event.preventDefault();
		$('.jumbotron').hide();
		$('#top_banner').hide();
		generateQuestions();
		timerWrapper();
	});

	$("body").on("click", ".answer", function () {
		selectedAnswer = $(this).text();
		if (selectedAnswer === correctAnswers[questionCounter]) {
			clearInterval(theClock);
			generateWin();
		}
		else {
			clearInterval(theClock);
			generateLoss();
		}
	});

	$("body").on("click", ".reset-button", function () {
		resetGame();
	});
});

function timeoutLoss() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>";
	$("#mainArea").html(gameHTML);
	setTimeout(wait, 2000);
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter];
	$("#mainArea").html(gameHTML);
	setTimeout(wait, 2000);
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + correctAnswers[questionCounter] + "</p>";
	$("#mainArea").html(gameHTML);
	setTimeout(wait, 2000);
}

function generateQuestions() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>" + answerArray[questionCounter][0] + "</p><p class='answer'>" + answerArray[questionCounter][1] + "</p><p class='answer'>" + answerArray[questionCounter][2] + "</p>";
	$("#mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 9) {
		questionCounter++;
		generateQuestions();
		counter = 10;
		timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 3000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			timeoutLoss();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	$('p.textcenter.timer-p').hide();
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-warning btn-md btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$("#mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 10;
	generateQuestions();
	timerWrapper();
}

var openScreen;
var gameHTML;
var counter = 10;
var questionArray =
	["What is Apple\'s most lucrative product of 2015?",
		"Who invented the tablet?",
		"In 1999 who created the first mp3 phone?",
		"Which tech company released The Walkman?",
		"Which company created the 'slide to unlock' on smartphones?",
		"Who invented the holographic computer known as the HoloLens?",
		"NAND Flash Memory was created by which tech company?",
		"Who first invented RDF Site Summary (RSS)?",
		"Which company released their TV Product first?",
		"Who created the first Motion Controller?"];

var answerArray = [
	['Iphone', 'Apple Watch', 'Ipad'],
	['Microsoft', 'Google', 'Apple'],
	['Toshiba', 'Samsung', 'Sony'],
	['Sony', 'Samsung', 'Toshiba'],
	['Apple', 'Microsoft', 'Google'],
	['Google', 'Apple', 'Microsoft'],
	['Sony', 'Samsung', 'Toshiba'],
	['Lycos', 'Netscape', 'Yahoo'],
	['Roku', 'Apple TV', 'Chromecast'],
	['Nintendo', 'Microsoft', 'Sony']];

var correctAnswers =
	["Apple Watch",
		"Microsoft",
		"Samsung",
		"Sony",
		"Microsoft",
		"Microsoft",
		"Toshiba",
		"Netscape",
		"Apple TV",
		"Microsoft"];

var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
