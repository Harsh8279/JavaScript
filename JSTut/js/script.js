// variable declaration in js

var x = 2;
var y = 4;

console.log("x is ",x);

var z = x + y;

alert(z);

console.log("Addition is ",z);

var x = 6;      // this is valid in var 

// i.e. for var, we can declare as many times we want

var z = x + y;

console.log("Addition is ",z);

let a = 7;
let b = 8;

let c = a + b;

// let a = 8;  // Uncaught SyntaxError: Identifier 'a' has already been declared

// that means we can not again declared the variable as many times if we use let

// then how can we change the variable value while we are using let?

// we can just change the value by naming it 

console.log(c);

a = 19;

c = a + b;

console.log("changed value is : ",c);

// Const 

const cnst =  12;

console.log("the value of the constant is :",cnst);

// if we declare any constant value then after we can not change that value again

// cnst = 14; // script.js:51 Uncaught TypeError: Assignment to constant variable.

// naming convention in  js 

// do not start the variable name with digit
// we can start the variable name by _ and $ 
// we can't use the reserved keyword

var str = "Hi";

console.log(str);

console.log(typeof str);

let str1 = "Hi", str2 = "Harsh";

alert(str1);

alert(str2);