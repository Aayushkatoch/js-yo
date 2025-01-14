const accountId = 1234
let accountName = "Aayush39@gmail.com"
var accountPassword = "5678"
accountCity="H.P"

/* 
prefer not to use var 
because issue in functional scope and block scope 
*/

accountName="Anil25@gmail.com"
accountPassword="4567"
accountCity="Haryana"

console.table([ accountId, accountName, accountPassword, accountCity])