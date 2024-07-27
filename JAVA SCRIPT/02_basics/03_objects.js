// // singleton
// // Object.create

// // object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// // console.log(JsUser.email)
// // console.log(JsUser["email"])
// // console.log(JsUser["full name"])
// // console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
const symb=Symbol("key1")
const obj1={
    name:"Prem",
    rollNo:18700,
    email:"sjnvo@gmail.com",
    marks:8.434,
    "full name":"prem das",
    [symb]:"mykey1"  //using symbol as an key
}

console.log(obj1.marks)
console.log(obj1["email"])
// console.log(obj1."full name")
console.log(obj1["full name"])
//Symbol always access by this
console.log(obj1[symb])
console.log(typeof symb)


obj1["full name"]="Premansu Chakraborty"
console.log(obj1["full name"]) //value updating

//stop updating
console.log(obj1["marks"])
// Object.freeze(obj1);
// obj1["marks"]=9.5
// console.log(obj1["marks"])

//function with object

obj1.printName=function () {
    console.log(`hello! ${this["full name"]}`)
}
console.log(obj1.printName())

obj1.greetingTwo = function (){
        console.log(`Hello JS user, ${obj1.name}`);
    }
    console.log(obj1.greetingTwo())
