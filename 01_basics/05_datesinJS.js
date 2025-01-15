// Dates 
// In JS Date is a object 
// months starts from zero in JS 

const myDate = new Date()
//console.log(myDate);

//console.log(myDate.toString());

//console.log(myDate.toLocaleString()); //it will give time in 12 hour clock 

//onsole.log(myDate.toDateString());  // it will give exact date or day

//console.log(typeof myDate);

const newDate = new Date(2025, 6, 14)
console.log(newDate.toDateString());

const oldDate = new Date("05-7-2025") // mm/dd/yyyy format
console.log(oldDate.toLocaleString());