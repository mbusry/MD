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
 
var www = urlCheck("httaps","Invalid address");
console.log(www);

