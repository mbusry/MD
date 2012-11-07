// Michael Usry
// SDI 1211
// Project 3

// Global variables
var isItTimeToLeave = true,
	roadTravels = ["Highway 400"," Highway 140"," Crab Apple Drive", " Highway 372"," Highway 515"],
	roadTravelsLength = roadTravels.length,
	timeToLeave = 5,
	countryRoadsTakeMeHome = ["The"," trip", " is", " long, ", "but ", "I ", "have ", "time ", "to " , "unwind."],
	endOfSentence = 
{
	"period": ".",
	"question": "?",
	"comma": ",",
	"empty": "  ",
},
	// JSON Data
	car = 
{
	"vin": "BZT1987",
	"make": "Toyota", 
	"model": "Camry",
	"year": "1999",
	"engine": function(){
		var engineType = "stick";
		return engineType;
	},

	 // Mutator below
	
	"setEngine": function(newEngine){

		car.engine = newEngine;

	}

};

//
// While Loop - theTripHome
//

var theTripHome = function(home)
{
var s = 0, 
	len = home.length,
	sentence = "";

while (s < len)
	{

	sentence = sentence + countryRoadsTakeMeHome[s];
	s++;

	}
return(sentence);
};
// *************************
// workDayProcedure Function
// *************************
var workDayProcedure = function(isItOver){
	if (isItOver === timeToLeave)
	{
		console.log("I drive a " + car.make + " " + car.model + "." + " Which was made in " + car.year + "." + " It's time to go home!");
	}
	else 
	{
			if (isItTimeToLeave != true)
			{
				console.log("It's not time to leave. But when I do ");
			}
				else 
					{
					console.log("Look!  It's Time to go home!");
					};
	}
};
// **********************
// Array Function
// **********************

var arrFunction = function(words,totalCount){

// local variables

	var totalCount = totalCount + 0,
		totalSentence = "The roads I travel are ",
		routeLength = "I travel " + totalCount + " roads to and from work.",
		totalCount = totalCount - 1;

// end of local variables

for (var count = 0;count < words.length;count++)
	{
	totalSentence = totalSentence + roadTravels[count];
	if (count < totalCount) 
		{
        	totalSentence = totalSentence + endOfSentence.comma;
    	} 
    	else 
    	{
        	totalSentence = totalSentence + endOfSentence.period;
    	};

	};
	returnStatement = routeLength + " " + totalSentence
	return returnStatement;
};

// ********************
// main section
// ********************

workDayProcedure(5);
car.setEngine("stick"); // Mutator
var travels = arrFunction(roadTravels,roadTravelsLength);
var ending = theTripHome(countryRoadsTakeMeHome);
console.log(travels + " " + ending);