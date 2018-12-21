$(document).ready(function () {

//User clicks button to have the quiz application pop up using jquery
$('button').click(function(){
	$(this).hide();
  
  var correct;
  var incorrect;
  var unanswered;
  var questionNumber;

  
  var myQuestions = [
  //Question 1
	{
	  'answer': 'b',
	  'question': 'What is Apple\'s most lucrative product of 2015?',
	  'options': ['Iphone', 'Apple Watch', 'Ipad']
  
	},
  
  //Question 2  
	{
	  'answer': 'a',
	  'question': 'Who invented the tablet?',
	  'options': ['Microsoft', 'Google', 'Apple']
  
	},
  
  //Question 3
	{
	  'answer': 'b',
	  'question': 'In 1999 who created the first mp3 phone?',
	  'options': ['Toshiba', 'Samsung', 'Sony']
  
	},  
  
  //Question 4
  {
	'answer': 'a',
	'question': 'Which tech company released The Walkman?',
	'options': ['Sony', 'Samsung', 'Toshiba']
  
  },
  
  //Question 5
  {
	'answer': 'b',
	'question': 'Which company created the "slide to unlock" on smartphones?',
	'options': ['Apple', 'Microsoft', 'Google']
  
  },
  
  //Question 6
  {
	'answer': 'c',
	'question': 'Who invented the holographic computer known as the HoloLens?',
	'options': ['Google', 'Apple', 'Microsoft']
  
  },
  
  //Question 7
  {
	'answer': 'c',
	'question': 'NAND Flash Memory was created by which tech company?',
	'options': ['Sony', 'Samsung', 'Toshiba']
  
  },   
  
  //Question 8
  {
	'answer': 'b',
	'question': 'Who first invented RDF Site Summary (RSS)?',
	'options': ['Lycos', 'Netscape', 'Yahoo']
  
  },
  
  //Question 9
  {
	'answer': 'b',
	'question': 'Which company released their TV Product first?',
	'options': ['Roku', 'Apple TV', 'Chromecast']
  
  },  
  
  //Question 10
  {
	'answer': 'b',
	'question': 'Who created the first Motion Controller?',
	'options': ['Nintendo', 'Microsoft', 'Sony']
  
  }  
  
  ];

function startGame(questions) {
	for (var i = 0; i < questions.length; i++) {
		$("#questions").append("<p>" + questions[i].question + "</p>");
		}
	}
	startGame(myQuestions);
});

});
