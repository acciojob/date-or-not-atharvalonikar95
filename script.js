var isDate = function (input) {
  //   write your code here
	if(!input) return false;
	if(!/^\d{4}-\d{2}-\d{2}$/.test(input)){ 
		return false
	} 
	let date = new Date(input);

    return !isNaN(date.getTime());
};  

// Do not change the code below.
const input = prompt("Enter Date."); 
alert(isDate(input));
