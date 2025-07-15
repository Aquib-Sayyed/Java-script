// this is literal object

const MySym = Symbol("Test");

const JsUser = {
name: "Hitesh",
[MySym]:"123",
Age: "18",
Location: "Jaipur",
email : "Hitesh@gmail.com",
isloggedin : false,
LastLogginDays : ["Monday","Tueseday"]

}

console.log(JsUser.Age);

console.log(JsUser["email"]);

console.log(typeof JsUser.MySym);

//JsUser.email="test@gmail.com";

Object.freeze(JsUser);

//JsUser.email("aquib.sayyed4ver@gmail.com");

JsUser.greeting = function() {

    console.log("Hello User");
}


console.log(typeof JsUser.greeting);


// If you want to use symbol as a member in object then we will have to use it with square bracket in it
//Freezes the value which we cant change

