//const factorial = require("./factorial.js");
//ITERATION
function factorial(n){
    let result= 1;
    for (let i = 1; i<=n; i++){
        result*=i;
    }
    return result;
}

console.log(factorial(0) === 1);
console.log(factorial(1) === 1);
console.log(factorial(2) === 2);
console.log(factorial(4) === 24);
console.log(factorial(8) === 40320);
console.log(factorial(18) === 6402373705728000);
// Test how high of a number your program can calculate. Can you push it further?
