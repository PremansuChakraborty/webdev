/*
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
*/


function loginUserMessage(username = "sam"){ //if we do nt give any value to username then sam will take as default value
    if(!username){ //check username===undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("prem"));
// console.log(loginUserMessage());
// loginUserMessage();

function calculateCartPrice(val1, val2, ...num1){ //...num1 is take mutiple value input
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

let myFunction=function(name){
      return `Hello! ${name}, Welcome`
}

console.log(myFunction("Prem"))

// passing an Object
const user={
    id:534865,
    pass:"saj$$%62"
}

let myFunction2=function(anyObject){
    return `Hello! ${anyObject.id}, Welcome, password: ${anyObject.pass}`
}

console.log(myFunction2(user))