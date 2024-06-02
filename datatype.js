// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const  outsidetemp = null
let userEmail; // let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 1236479974525n



// Reference types (Non primitive)

// Array, Object, Function

const heros = ["Shaktiman", "Naagraj", "Doga"]
let myObj = {
    name: "Suroj",
    age: 20,
}
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber); //undefined
console.log(typeof outsidetemp); //object
console.log(typeof scoreValue); //Number
console.log(typeof myFunction); //Function
console.log(typeof heros); //Object
console.log(typeof anotherId); //Symbol



