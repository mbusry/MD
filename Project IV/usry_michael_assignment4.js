// Michael Usry
//
//
//
// Phone number validation
//

var phoneNumberCheck = function(phonenumber,message)
{
if (phonenumber.length = 12 && phonenumber.charAt(7) === "-" && phonenumber.charAt(3) === "-")
    // || phonenumber.charAt(7) === "-")
 // | phonenumber.substring(3) === "-" && phonenumber.charAt(7) === "-") 
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
//

