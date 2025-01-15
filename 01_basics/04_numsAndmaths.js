
const score = 100
//console.log(score);

let balance = new Number(400)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(3));   // toFixed we use this in e-commerce site most of the time


let newScore = 456.789
//console.log(newScore.toPrecision(5));

let bigNumber = 23000000
//console.log(bigNumber.toLocaleString('en-IN')); // en-IN to show in Indian form


/// +++++++++++++ Maths ++++++++++++++ ///

// console.log(Math); 
// console.log(Math.abs(-7));  //abs convert - to +

//console.log(Math.round(4.3));

// console.log(Math.floor(4.9));  // floor will give 4 value doesnt matter what value after decimal

// console.log(Math.ceil(4.3));  // ceil will give 5 value doesnt matter what value after decimal

//console.log(Math.min(4, 5,8 ,9));
//console.log(Math.max(9,6,3,1));

console.log(Math.random()); // random gives value in 0 to 1  

console.log((Math.random()* 20) + 1); // if we multiple with 20 it will give no in range of 0 to 20  and +1 give us value 1 or more than 1  

const min = 40 

const max =60

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

