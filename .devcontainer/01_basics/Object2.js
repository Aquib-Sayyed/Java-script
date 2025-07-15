//singleton object 

const Abb= new Object();

const tinderuser={}

tinderuser.tinderuser="123456"
tinderuser.name = "Aquib"
tinderuser.loggedin = false

console.log(tinderuser);

const regularuser = {
email: "somailgmail.com",
fullname: {
userfullname :{
Firstname: "Aquib Sayyed",
Lastname: "Senior software engineer"
}

}

}

console.log(regularuser.fullname.userfullname);

const obj1 = {
    1: "a",
    2:"b"
}

const obj2 = {
    3: "C",
    4: "D"
}

const obj3 = {obj1,obj2}

console.log(obj3);

const obj4 = Object.assign({},obj1,obj2);

console.log(obj4);

const obj5= {...obj1,...obj2} //spread operator to combining the 2 objects which is easy to use as a syntax

console.log(obj5);
