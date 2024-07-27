/*
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
*/

const user={
    name:"Sohon",
    id:564688835,
    pass:"@039545%$%",
    popupMessage:function(){
        // console.log(this)
        return `WELCOME ${this.name}, your id: ${this.id}, password: ${this.pass}`
    }
}

console.log(user.popupMessage())

console.log(this)

const chai = function () {
        let username = "hitesh"
        console.log(this.username);
        console.log(this);
    }
chai()
//Arrow function
const chai2= (num1, num2) => {
        console.log(this)
        return num1 + num2
    }

// const chai2= (num1, num2) => num1+num2

console.log(chai2(5,78));

const chai3= (num1, num2) => (num1+num2)
console.log(chai3(455,78));

const chai4= (num1, num2) => ({name:"prem",id:356856,pass:"@31596@*&&&&&&*"}) //passing object to a arrow function
console.log(chai4(455,78));




