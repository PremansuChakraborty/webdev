/*
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
*/
const ar=[4,5,81,52,6,41,2,0,8]

// let newAr=ar.filter((num)=>{return num+10})

// let newAr=[]

// ar.forEach((num)=> newAr.push(num+10))

// console.log(newAr)

let newArr=ar.map((num)=>num+10)
console.log(newArr)

let newArr2=ar.map((num)=>num+10).filter((num)=> num>20).map((num)=>num-10)
console.log(newArr2)
