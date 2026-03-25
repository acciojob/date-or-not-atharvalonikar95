var isDate = function (input) {
  //   write your code here
	if(input.match(/^\d{4}-\d{2}-\d{2}$/)){ 
		return true
	}
	return false
};  

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
