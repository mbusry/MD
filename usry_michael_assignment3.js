// Michael Usry
// SDI 1211
// Project 3

var isItTimeToLeave = true,
	roadTravels = ["Highway 400","Highway 140","Crab Apple Drive", "Highway 372","Highway 515"],
	roadTravelsLength = roadTravels.length,
	timeToLeave = 5,
	countryRoadsTakeMeHome = "The trip is long, but I have time to unwind.",
	endOfSentence = 
{
	"period": ".",
	"question": "?",
	"comma": ",",
}
	finalLeg = function (){

			console.log("finalleg function")
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
// Array Function

var arrFunction = function(words,totalCount){

	var totalCount=totalCount + 0,
		totalSentence = "The roads I travel are ",
		routeLength = "I travel " + totalCount + " roads to and from work";

// end of local variables

for(var count = 0;count < words.length;count++) {
	totalSentence = totalSentence + roadTravels[count] +
		if (count === words.length) {
			endOfSentence.period
		}else {
			endOfSentence.comma
		}
	}
};

 return(totalSentence);
// console.log(totalSentence);
};

// main section

console.log("I drive a " + car.make + " " + car.model + ".");
console.log("Which is a " + car.year + ".");
car.setEngine("stick");
console.log(car.engine);
var stepFive = arrFunction(roadTravels,roadTravelsLength);
console.log(stepFive);
console.log(stepFive);