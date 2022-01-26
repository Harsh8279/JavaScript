// Math Object and It's Properties

// Generate Random Number in JavaScript

let x = Math.random()   // It generates number between 0 and 1

console.log("x ",x);

console.log("x ",x);

x  = Math.random()*10;

console.log("Math.random()*10",x);

// now we are going to remove the decimal point so we are using trunc

x  = Math.trunc(x);

console.log("Math.trunc(Math.random()*10)",x);

// now we want the numbers between 1 to 100

x  = Math.random()*100;

console.log("Math.random()*100",x);

x  = Math.trunc(x);

console.log("Math.trunc(Math.random()*100)",x);

// now we want the numbers between 1 to 101

x  = Math.random()*101;

console.log("Math.random()*101",x);

x  = Math.trunc(x);

console.log("Math.trunc(Math.random()*101)",x);

/*
    Math.random()*101 100.13002620231383
*/

// now we want the numbers between 1 to 150

x  = Math.random()*150;

console.log("Math.random()*150",x);

x  = Math.trunc(x);

console.log("Math.trunc(Math.random()*150)",x);

/*
    Math.random()*150 123.63670013538318
    Math.trunc(Math.random()*150) 123
*/

// Now if we want specific range like 

// want range between 15 to 24 --> (Math.random() * (max-min))) + min and we ll get min to max-1 numbers

x  = (Math.random()*(25-15))+15; // Here it will take minimum number but exclude maximum one

console.log("Math.random()*(25-15)+15",x);

x  = Math.trunc(x);

console.log("Math.trunc(Math.random()*(25-15))+15",x);

// now we will make our function for this logic

function getRandomNumber(mini,maxi){

    // let randomNumber = Math.trunc((Math.random()*(maxi-mini))+mini);     // without max

    // if we want to include our maximum number also then use this

    let randomNumber = Math.trunc((Math.random()*(maxi-mini + 1))+mini);

    return randomNumber;
}

x = getRandomNumber(10,13);

console.log("Random Number is ",x);