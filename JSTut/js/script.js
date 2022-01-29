// Hoisting --> i.e. lift up or Pull

hello();

function hello(){
    console.log("Hello World!!");
};
/*

That's call hoisting --> i.e. here we have first used function and then we defined 
that function so JavaScript first copile whole file 
and if any declaration or definition found then JavaScript Pull them and
put on the top of our code 
So That's called Hoisting

*/

//same for variable 

let x;

// now we are just declaring x and not giving any value 
// let's try to print x

console.log(x);

// undefined

// it gives undefined that means javaScript assigns the value by itself

// x = undefined

/* 
    In let and const if we are going to declare and define after Use of that variable 
    then javaScript just take declaration and it is not going to assign value so
    we got error like Not INITIALIZED


*/

// console.log(y);      // --> Cannot access 'y' before initialization

// let y = 10;

let y;

y =10;


/*

But when we are coming towards to var then JavaScript just assign undefined for that

Not giving any error 

*/

console.log("z",z);

// var z;

// z = 10;

var z = 10;

// for both JavaScript Assign undefinded for var

a  = 10;

console.log("a",a);

// We can do like this also i.e. JavaScript declared automatically var a;

// If we want restricted to this then we can put 

// "use strict"

// On the Top of the code then a  = 10; this type of definition won't work
