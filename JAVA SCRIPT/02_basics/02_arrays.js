// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// // marvel_heros.push(dc_heros)

// // console.log(marvel_heros);
// // console.log(marvel_heros[3][1]);

// // const allHeros = marvel_heros.concat(dc_heros)
// // console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

// // console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));


let ar1=["RAM","SHAM","MOHAN","SATAY"]
let ar2=["SOHAN","SOUVIK","DEV","VICKY"]
//method 1: to merge two array
let ar3=ar1.concat(ar2);
console.log(ar3)
//method 2: to merge two array (spread method)
let ar4=[...ar1,...ar2]
console.log(ar4)

//break all the multi array and cuvert into a single array
let ar5 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

let ar6 = ar5.flat(Infinity) //brackets put the level of multi array
console.log(ar6);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))//covert it into a char array
console.log(Array.from({name: "hitesh"})) // interesting // we use it later

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));