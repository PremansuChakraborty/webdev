// // array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// // console.log(myArr[1]);

// // Array methods

// // myArr.push(6)
// // myArr.push(7)
// // myArr.pop()

// // myArr.unshift(9)
// // myArr.shift()

// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(3));

// // const newArr = myArr.join()

// // console.log(myArr);
// // console.log( newArr);


// // slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);




let arr=[1,5,6,7,8,10,12]
console.log(arr)
console.log(typeof arr)

let arr2 = new Array("Ironman","Captain America","Thor","Superman","Batman")
console.log(arr2)

arr.push(6)
arr.push(7)
console.log(arr)
arr.pop()
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift(9)
console.log(arr)
arr.unshift(19)
console.log(arr)

// arr.shift()
// console.log(arr)
// arr.shift()
// console.log(arr)

console.log(arr.includes(9));
console.log(arr.indexOf(3));

////covert into string//

const newArr = arr.join()//covert into string

console.log(arr);
console.log( newArr);
console.log(typeof newArr);


// slice, splice

console.log("A ", arr);

const myn1 = arr.slice(1, 3)

console.log(myn1);
console.log("B ", arr);


const myn2 = arr.splice(1, 3)
console.log("C ", arr);
console.log(myn2);

