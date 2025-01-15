 /* Premitive datatypes
     7 types = string , number, boolean, null, undefined , bigInt, symbol
     */

    const value = 3
    let isLoggedIn = true 
    let outsideTemp = null     // null means empty 
    let city = undefined

    const score = Symbol('1234')
    const score2 = Symbol('1234')
    console.log(score === score2);

    

    /*Non Premitive 
    3 types= array , function , object 
    */
    

    // Array ex
    let series = ["Breaking bad", "Viking", "Guns & Roses"];


    // object ex
    let myObj={
        name:"Aayush",
        age:22,

    }

    // function ex 
    const myFunction=function(){
        console.log(" hello world");
    }