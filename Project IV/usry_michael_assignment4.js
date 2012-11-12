// Michael Usry
//
//
//
// Phone number validation
//

var phoneNumberCheck = function(phonenumber,message)
{
if (phonenumber.length = 12 && phonenumber.charAt(7) === "-" && phonenumber.charAt(3) === "-")
	{ 	return(phonenumber);
	}else
	{
	return(message);
	};
};
 
var phone = phoneNumberCheck("706-455-4567","Format incorrect sent");
console.log(phone);
//
//
//
//
//
//
// Is the string a URL? (Does it start with http: or https:?)
//
//

var urlCheck = function(url,message)
{
if (url.substring(0,4) === "http" || url.substring(0,5) === "https")
	{ 	return(url);
	}else
	{
	
	return(message);
	};
};
 
var www = urlCheck("http","Invalid address");
console.log(www);
//
//
//
//
//Title-case a string (split into words, then uppercase the first letter of each word)
//Split SentenceSplit to words
// newSplit is then split by " "
// for loop
//
var sentenceSplit = function(words)
{
	var newSplit = words.split(" "),
		newSentence = " ";
	for (i=0;i < newSplit.length;i++){
		newSplit[i] = newSplit[i].charAt(0).toUpperCase() + 
		newSplit[i].substring(1,newSplit[i].length).toLowerCase();
		newSentence = newSentence +  newSplit[i] + " ";
		
		};

		return(newSentence);
};

var words = sentenceSplit("this is my life");
console.log(words);

