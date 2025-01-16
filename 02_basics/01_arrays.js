// Arrays

const myArr = [2,3,4,5,6]
const mySeries = ["Viking", "Breaking bad", "stranger things"]

console.log(myArr[2]);


//Array methods

//myArr.push(7)  // add element in an array

//myArr.pop()   // remove a element

//myArr.unshift(8) // add one element at the beginning

//myArr.shift()  // removes first element from an array

const newArr = myArr.join() // add all the element of an array into string
//console.log(myArr); 
//console.log(newArr);
//console.log(typeof myArr);
//console.log(typeof newArr);

// Slice and Splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 4)

console.log(myn1);

console.log("B",myArr);

const myn2=myArr.splice(1, 4)
console.log("C",myArr);
console.log(myn2);

// difference between slice and splice manupulate the array and remove the portion 