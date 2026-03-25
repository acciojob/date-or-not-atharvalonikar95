var isDate = function (input) {
  //   write your code here 
  if (input instanceof Date) {
	return !isNaN(input.getTime());
  }
	
  if(!input) return false;
  if(typeof input === "string" && /^\d{4}-\d{2}-\d{2}$/.test(input)){ 
	  let date = new Date(input);
	  return !isNaN(date.getTime());
   }  
	return false

};  

// Do not change the code below.
const input = prompt("Enter Date."); 
alert(isDate(input));
