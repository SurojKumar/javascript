"use strict";//treat all JS code as newer version

//alert(3+3) //we are using nodejs,not browser

console.log(3+3) //code readability should be high

console.log("Suroj") 

let name = "suroj"
let age = 20
let isLoggedIn = false
let state;

//number => 2 to power 53
//bigint 
//string => ""
//boolean => true/false
//null => standalone value
//undefined => 
//symbol => unique

//objeect

console.log(typeof age)
console.log(typeof null) //object
console.log(typeof undefined) //undifined

//********************************************


// Stack (Primitive), Heap (Non - Primitive)

let myName = "Suroj"
let anotherName = myName
anotherName = "Loser"
console.log(myName); // Suroj
console.log(anotherName); //Loser

let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "suroj@google.com"
console.log(userOne.email);
console.log(userTwo.email);