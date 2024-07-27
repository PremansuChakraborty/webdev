// Immediately Invoked Function Expressions (IIFE)


// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')


function user(){
      console.log(`hello user!`)
}
user();

(function user2(){
    console.log(`hello user2!`)
})();

(  () => (console.log(`hello user3!`)) 

)();

(  (name) => {
    console.log(`hello user3!,${name}.`)
}

)("Prem");




