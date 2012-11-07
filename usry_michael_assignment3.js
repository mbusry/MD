// Michael Usry
// SDI 1211
// Project 3

var isItTimeToLeave = true,
	roadTravels = ["Highway 400","Highway 140","Crab Apple Drive", "Highway 372","Highway 515"],
	timeToLeave = 5,
	countryRoadsTakeMeHome = "The trip is long, but I have time to unwind.",
	finalLeg = function (){

			console.log("finalleg function")
	},
	car = 
	{
	vin: "BZT1987",
	make: "Toyota", 
	model: "Camry",
	year: "1999",
	accessories:["automatic", "four-door", "Am/Fm/Cassette"]
	// sayHi: function () {
		// console.log("Hi");
	};

	// boolean conditional
if (isItTimeToLeave === true) {
    if (timeToLeave > 5) {
            isItTimeToLeave = isItTimeToLeave + 1;
        console.log("I've left after "+timeToLeave+". Traffic will be horrible!");
        }
        else{
            console.log("Things shouldn't be so bad, since I left before "+timeToLeave);
            
        };
} else {
    console.log("I'm counting down the time to go home.")
    };
// Boolean Function
var booFunction = function(boo,hoo){
	if (boo === true){
		// console.log("I don't work for Apple, yet.");
		return("I don't work for Apple, yet.");
	} else {
		// console.log(Company);
		return ("I will soon!");
	};
	
};

// Number Function
var numFunction = function(hours){
	var clock = 0, totHours = hours;
	while (clock < hours){
		// console.log("I've been at work for " + clock + " hours and I have " + totHours + " to go.");
		
		clock++;
		totHours--;
		return(" I've been at work for " + clock + " hours and I have " + totHours + " to go. ")
	};
};// number Functions

// String Function
var strFunction = function(jd,jf){
	var jobOutlook = "bright";
	// console.log ("My present job of " + jd + " has a " + jobOutlook + " future.  But I got this job becaue of taking " + jf + " here at Full Sail.");
	var stringFunction = "My present job of " + jd + " has a " + jobOutlook + " future.  But I got this job becaue of taking " + jf + " here at Full Sail.";
	return stringFunction;
};

// Array Funciton

var arrFunction = function(words,totalCount){

	var totalCount=totalCount + 7,
	wordSentence = ["In a world without "," or "," who needs ", " or ", "?"],
	totalSentence = " I have " + totalCount + " words to leave you with. "
; // end of local variables

for(var count = 0;count < words.length;count++) {
	totalSentence = totalSentence + wordSentence[count] + words[count];
};
return(totalSentence);
// console.log(totalSentence);
};

// Main logic
stepOne = workDayProcedure(duty);
var stepTwo = booFunction(boo,hoo);
var stepThree = numFunction(hoursOfWork);
var stepFour = strFunction(jobDescription,jobFuture);
var stepFive = arrFunction(wordOfTheDay,wordOfTheDayLength);
var assignmentFinsh = stepTwo + stepThree + stepFour + stepFive;
console.log(assignmentFinsh);