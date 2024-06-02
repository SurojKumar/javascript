//*****************Conversion************** */

let score = 32
// let score = 'Suroj" //string,string,number,NaN
// let score = null //object,object,number,0
// let score = undifined // undifiend,undifined,number,NaN
// let score = true //boolean,boolean,number,1
// let score = false //boolean,boolean,number,0

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);//NaN value

let isLoggedIn = 1 //true
// let isLoggedIn = 0 //false
// let isLoggedOut = "" //false
// let isLoggedOut = '"Suroj" //true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 30
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); //string

//***********************Operations********************

let value = 1
let negative = -value
console.log(negative);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(5%2);

let str1 ="hiiii"
let str2 = "Sourav"
let str3 = str1 + str2
console.log(str3) //hiiiiSourav

console.log("10" + 12); //1012
console.log(10 + "12"); //1012
console.log("10" + 12 + 12); //101212
console.log(10 + 12 + "12"); //2212
//console.log( (3 + 4) * 5 % 3);
console.log(true); //true
console.log(+true); //1
//console.log(true+);//unexpected
console.log(+""); //0

/*let num1, num2, num3
num1 = num2 = num3 = 2 + 2*/
let gameCounter = 100;
gameCounter++; //++ gameCounter
console.log(gameCounter); //101













