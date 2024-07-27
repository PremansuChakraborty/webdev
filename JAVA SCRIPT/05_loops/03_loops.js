/*
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
*/

const ar=[4,5,81,52,6,41,2,0,8]

// for (const item of ar) {
//     console.log(item)
// }

let str="Hello World!"

for (const item of str) {
    // console.log(item)
}


//map

const map=new Map()

map.set(1,"Soureen")
map.set(2,"Souvik")
map.set(3,"Atanu")
map.set(4,"Premansu")
map.set(5,"Rajdeep")

// console.log(map)

for (const [key,value] of map) {
    console.log(key,":-",value)
}

//we can not access object by using forof loop
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
