
let a=300
var c=100

if(true){
let a=10
let b = 20
var c=30

console.log(a); // Here it will write 30 because it is in block scope
}

//console.log(a);
//console.log(b);
console.log(c); // Here it will write 100 because it is in block scope


// if variable is defined in  block then we call it as blocked scope
// if variable is defined in outside the block then we call it as global scope

function one()
{

    const username = "hitesh"

    function Two()
    {

        const website="Youtube"
        console.log(username);
    }

    console.log(website);

}

//Two()

const username = "khitesh"

if(true)
{
const username = "hitesh"

if(username === "hitesh")
{
const website = "youtube"
console.log(username + website)
}
//console.log(website);
}

console.log(username)

function addone(num)
{

    return num+1

}

console.log(addone(15));

