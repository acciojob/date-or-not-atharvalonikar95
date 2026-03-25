var isDate = function (input) {
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  } 

  if (typeof input === "string") {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(input)) return false;

    let date = new Date(input);
    let [y, m, d] = input.split("-").map(Number);

    return (
      date.getFullYear() === y &&
      date.getMonth() + 1 === m &&
      date.getDate() === d
    );
  }

  let date = new Date(input);
  return !isNaN(date.getTime());
}

// Do not change the code below.
const input = prompt("Enter Date."); 
alert(isDate(input));
