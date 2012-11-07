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
		var engineType = "automatic";
		return engineType;
	},

	 // Mutator below
	
	"setEngine": function(newEngine){

		car.engine = newEngine;

	}

};

// While Loop

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
	// return(sentence);
return(sentence);
};

// Procedure Function
var workDayProcedure = function(isItOver){
	if (isItOver === timeToLeave)
	{
		return("I drive a " + car.make + " " + car.model + "." + " Which was made in " + car.year + "." + " It's time to go home!");
	}
	else 
	{
			if (isItTimeToLeave != true)
			{
				return("It's not time to leave. But when I do ");
			}
				else 
					{
					return("Look!  It's Time to go home!");
					};
		return(" Ain't my time.");
	}
};

// Array Function

var arrFunction = function(words,totalCount){

// local variables

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
    	} 
    	else 
    	{
        	totalSentence = totalSentence + endOfSentence.period;
    	};

	};
	returnStatement = routeLength + " " + totalSentence
	return returnStatement;
};

// carChoice

var carChoice = function(transmition,ending)
{
if (transmition === "stick")
{
return ("If I had my choice of cars, I would drive a " + transmition + ending);
}
else
{
return ("But at the moment I drive an " + transmition + ending);
}


};

// main section

var beginning = workDayProcedure(5);
// console.log("I drive a " + car.make + " " + car.model + ".");
// console.log("Which was made in " + car.year + ".");
car.setEngine("stick"); // Mutator
var carChoice = (car.engine, endOfSentence.period);
var travels = arrFunction(roadTravels,roadTravelsLength);
var ending = theTripHome(countryRoadsTakeMeHome);
console.log(beginning + " " + carChoice + " " + travels + " " + ending);
