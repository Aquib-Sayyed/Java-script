const myArr = [0,1,2,3,4,5];
const myHeroes = ["iron man","Super man","Bat man","Ant Man","Hulk"];

const Myarr1 = new Array(1,2,3,4,5);

console.log(myArr);
console.log(Myarr1[3]);

myArr.push(6);

myArr.pop();
console.log(myArr);

myArr.unshift(9);
myArr.shift(9);

console.log(myArr.includes(9));

console.log(myArr);

const newArr = myArr.join();

console.log(typeof newArr);

const marvel_heroes = ["thor","Ironman","Spiderman"];

const dc_heroes = ["superman","batman","flash"];
    
marvel_heroes.push(dc_heroes);

// if we push array inside array then array will concat as an element

console.log(marvel_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]

console.log(all_new_heroes);

// it spreads each elements of array

// flat it flats the all arrays of elements
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const a = another_array.flat(Infinity);

console.log(a);

console.log(Array.isArray('Hitesh'))

console.log(Array.from('Hitesh'));

