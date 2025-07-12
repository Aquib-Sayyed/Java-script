let score=false;

console.log(typeof score);

let valuenumber = Number(score);

console.log(typeof valuenumber);
console.log(valuenumber);

/*
"33" => 33
"33abc" => NaN
true 1; false 0
*/ 


let score1=-33;

var B = Boolean(score1)
console.log(B);

/*
1 => true;
0 => false
"test" => true
*/

let value =3;

let negvalue= -value;

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

console.log((3+4) * 5 % 3);
/*
let str1 = "hello";
let str3 = st1;
*/

console.log("2">1);

console.log(null == 0);
console.log(null >= 0);

console.log(undefined >= 0);
console.log(undefined < 0);

const sccore = 100;
const sccorevalus = 100;

const isloggedin = false;
const outside = null;

const id2 = Symbol('123');
const anotherid = Symbol('123');

console.log(id2 === anotherid);

const bignumber = 321458796323;



const heroes = ["Shaktiman","naagraj","doga"];

let myobj = {
name: "Aquib",
age: "26"
}

function tt () {
console.log("test");

}

console.log(typeof myobj);

console.log(typeof tt);

/*
== this compare the value
=== this is strict check it compares values as well as data types
*/

/*

data types

primitive - 7 types string, number, boolean, null,undefined , symbol, Bigint

Reference types (Non primitive)

Array, Object, Functions
once you put n in the end of number it it becomes big int 

*/

/*
stack - prmitive data types stores here - it creates a copy and changes the value over there
Heap - non-primitie data types stores here - it is reffernce and changes the original value
*/