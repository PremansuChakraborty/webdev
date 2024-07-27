// // Dates

// let myDate = new Date()
// // console.log(myDate.toString());
// // console.log(myDate.toDateString());
// // console.log(myDate.toLocaleString());
// // console.log(typeof myDate);

// // let myCreatedDate = new Date(2023, 0, 23)
// // let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// // let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// // console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()

// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime());
// // console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// // `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })

let date=new Date()
console.log(date)
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())
console.log(typeof date)

// let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3,33)
let myCreatedDate2= new Date("2023-01-14")
let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleDateString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);//mili second
console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now()/1000));//second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());//in JS month start from 0-jan,1-feb and so no...
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
