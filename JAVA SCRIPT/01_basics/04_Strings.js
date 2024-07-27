let str="Premansu Chakraborty"
let acNum=10016597,balance=10005

//another technique to create an string
let name=new String("Prem")
console.log(name)
// console.log("hello! My name is "+str+" Account number is "+acNum+" Account Blance: "+balance)
// console.log(`hello! My name is ${str} Account number is ${acNum} Account Blance: ${balance}`)

console.log(str[0])
// console.log(gameName.length); 
console.log(str.length)
// console.log(gameName.toUpperCase());
console.log(str.toUpperCase())
// console.log(gameName.charAt(2));
console.log(str.charAt(3))
// console.log(gameName.indexOf('t'));
console.log(str.indexOf("r"))
// const newString = gameName.substring(0, 4)
// console.log(newString);

console.log(str.substring(5,9))

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);
console.log(str.slice(5,14))
console.log(str.slice(-10,14))

const str2 = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());
console.log(str2.trim())

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(url.split('-'));