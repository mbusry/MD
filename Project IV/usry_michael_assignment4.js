// Michael Usry
// SDI 1211
// Project 4: Code Library
//
// Phone number validation
//
var myLibrary = function() 
{

	var phoneNumberCheck = function(phonenumber)
		{
		if (phonenumber.length = 12 && phonenumber.charAt(7) === "-" && phonenumber.charAt(3) === "-")
			{ 	return true;
			}else
			{
			return false;
			};
		};
//
//
//
//
//
//
// Is the string a URL? (Does it start with http: or https:?)
//
//

	var urlCheck = function(url)
	{
	if (url.substring(0,4) === "http" || url.substring(0,5) === "https")
		{ 	return true;
		}else
		{
		
		return false;
		};
	};
	 
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
			newSentence = "";
		for (i=0;i < newSplit.length;i++)
			{
			newSplit[i] = newSplit[i].charAt(0).toUpperCase() + 
			newSplit[i].substring(1,newSplit[i].length).toLowerCase();
			newSentence = newSentence +  newSplit[i] + " ";
			
			};
				return newSentence;
	};
// 
// 
// 
// 
//Does a string follow an aaa@bbb.ccc pattern like an email address?
//
//
	var emailCheck = function(email)
	{
		if (email.charAt(email.length-4) === "." && email.search("@")!= -1)
		    // for (i=0;i < email.length;i++) if (email.charAt(i)== '@')
	// if (phonenumber.length = 12 && phonenumber.charAt(7) === "-" && phonenumber.charAt(3) === "-")
		{ 	return true;
		}else
		{
		return false;
		};

	};
 		return {
			"phoneNumberCheck": phoneNumberCheck,
			"urlCheck":         urlCheck,
			"sentenceSplit":    sentenceSplit,
			"emailCheck":       emailCheck 
		}


};
// 
// 
// Main logic calls
//
//
 
var newLib = new myLibrary();

console.log(newLib.phoneNumberCheck("706.454.4444"));
console.log(newLib.urlCheck("http"));
console.log(newLib.sentenceSplit("i love coding"));
console.log(newLib.emailCheck("mike@apple.com"));