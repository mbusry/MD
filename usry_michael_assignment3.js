// Michael Usry
// SDI 1211
// Project 3

// variables
var isItTimeToLeave = true,
	roadTravels = ["Highway 400"," Highway 140"," Crab Apple Drive", " Highway 372"," Highway 515"],
	roadTravelsLength = roadTravels.length,
	timeToLeave = 5,
	countryRoadsTakeMeHome = "The trip is long, but I have time to unwind.",
	endOfSentence = 
{
	"period": ".",
	"question": "?",
	"comma": ",",
	"empty": "  ",
},
	
	car = 
{
	"vin": "BZT1987",
	"make": "Toyota", 
	"model": "Camry",
	"year": "1999",
	"engine": function(){
		var engineType = "automatic";
		return engineType;
	},

	 // mutator below
	
	"setEngine": function(newEngine){

		car.engine = newEngine;

	}

};

// Procedure Function
var workDayProcedure = function(isItOver){
	if (isItOver === timeToLeave)
	{
		// console.log("I'm working for my " + day + ".  Which is my duty and joy.");
		return("Let's go home! step1");
	}
	else 
	{
			if (isItTimeToLeave != true)
			{
				return("It's not time to leave. But when I do ");
			}
				else 
					{
					return("Time to go home!");
					};
		// console.log("Ain't my time.");
		return(" Ain't my time.");
	}
};

// Array Function

var arrFunction = function(words,totalCount){

	var totalCount=totalCount + 0,
		totalSentence = "The roads I travel are ",
		routeLength = "I travel " + totalCount + " roads to and from work.",
		totalCount=totalCount - 1;

// end of local variables
for (var count=0;count < words.length;count++)
	{
	totalSentence = totalSentence + roadTravels[count];
	if (count < totalCount) 
		{
        	totalSentence = totalSentence + endOfSentence.comma;
    	} else 
    	{
        	totalSentence = totalSentence + endOfSentence.period;
    	};

	};
	returnStatement = routeLength + " " + totalSentence
	return returnStatement;
};

// main section

var beginning = workDayProcedure(4);
console.log("I drive a " + car.make + " " + car.model + ".");
console.log("Which was made in " + car.year + ".");
car.setEngine("stick");
console.log("If I had my choice of cars, I would drive a " + (car.engine) + endOfSentence.period);
var travels = arrFunction(roadTravels,roadTravelsLength);
console.log(beginning + " " + travels);