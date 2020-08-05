var check = document.querySelector(".check");
var result = document.getElementById('result');

check.addEventListener('click', function() {
	var theNum = document.getElementById('inputNum').value;
	var theResult = "";
	
	//Divide by 2 first. Anything over half cannot be divided in.
	//Besides theNum/2, how can I further simplify the equation?
	for(i=2;i<=(Math.sqrt(theNum));i++) {
		//Prevent memory issues
		if(theNum > 9999999) {
			theResult = "Sorry! Please enter a number less than 10,000,000 to avoid crashing the browser."
			break;
			//If a divisor is found
		} else if (theNum % i == 0) {
			theResult = "The number " + theNum + " is not a Prime number! The lowest number that " + theNum + " is divisible by is " + i + "."
			break;
			//If no divisor is found
		} else {
			theResult = "The number " + theNum + " is a Prime number!"
		}
	}
	result.innerHTML = theResult;
});