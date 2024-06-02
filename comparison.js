/*console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
console.log(2 <= 1);*/

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined < 0); //false

console.log("2" === 2 ) //checking values & datatypes //===
console.log("2" == 2 ) //checking values //==

let str1 = 4
let str2 = 5
let str3 = str1 + str2
console.log(typeof(str3)) //number type