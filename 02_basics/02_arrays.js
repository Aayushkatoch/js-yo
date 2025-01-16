
const netflix_series = ["breaking bad","Stranger things", "EOFW"]
const prime_series = ["patal lok", "family man", "mirzapur"]

//netflix_series.push(prime_series)
//console.log(netflix_series);


//const allSeries = netflix_series.concat(prime_series) // merge all the element from diff array to a single array 
//console.log(allSeries);
 

const oldArr = [1,2,3,[4,5,6,7],8,9,[3,2,4]]

const newArr = oldArr.flat(Infinity)  // return a new array with all sub array element
//console.log(newArr);


console.log(Array.from("Aayush")); // from string make an array

let score1 = 200
let score2 = 300
let score3 = 400
console.log(Array.of(score1,score2,score3)); // return a new array from set of element  