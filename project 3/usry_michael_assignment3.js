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
	"vin": "BZT1987",
	"make": "Toyota", 
	"model": "Camry",
	"year": "1999",
	"engine":"automatic",
	"setEngine": function(newEngine){

		var this.engine = newEngine;

	}

};

console.log()