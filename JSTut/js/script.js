// Math Object and It's Properties

console.log(Math.PI);

console.log(Math.E);

let num = 4.7;

console.log("number is ",num);

console.log("After Rounding off",Math.round(num));  // for round off our number if <0.5 then take that number
                                                    // and if >0.5 then take next number from given

num = 4.2;

console.log("number is ",num);

console.log("After Rounding off",Math.round(num));

num = 4.5;

console.log("number is ",num);

console.log("After Rounding off",Math.round(num));

num = 4.2;

console.log("number is ",num);

console.log("After Ceil",Math.ceil(num));   // whether the number is >0.5 or < 0.5
                                            // It takes only next number from given

num = 4.7;

console.log("number is ",num);

console.log("After Ceil",Math.ceil(num));

num = 4.3;

console.log("number is ",num);

console.log("After Floor",Math.floor(num)); // whether the number is >0.5 or < 0.5
                                            // It takes only given number

num = 4.5;

console.log("number is ",num);

console.log("After Floor",Math.floor(num)); 

num = 4.7;

console.log("number is ",num);

console.log("After Floor",Math.floor(num));

num = 4.7;

console.log("number is ",num);

console.log("After Floor",Math.floor(num)); 

// If we want to just remove the decimal point i.e. avoid that point then 

num = 4.7;

console.log("number is ",num);

console.log("After Truncate",Math.trunc(num)); 

num = 4.2;

console.log("number is ",num);

console.log("After Truncate",Math.trunc(num)); 

// If we want to calculate the power then 

let base = 2;
let exponent = 3;

console.log(`Base is ${base} and exponent is ${exponent}`);

console.log("Math.pow(base,exponent)",Math.pow(base,exponent));

base = 100;
exponent = 1/2;

console.log(`Base is ${base} and exponent is ${exponent}`);

console.log("Math.pow(base,exponent)",Math.pow(base,exponent));

// Or for square root we can use 

num = 100;

console.log("Number is ",num);

console.log("Math.sqrt(num)",Math.sqrt(num));

// getting minimum and maximum function then 

console.log("Math.min(4,5,6,7,8,9)",Math.min(4,5,6,7,8,9));

console.log("Math.max('4',5,6,7,8,9,'10')",Math.max('4',5,6,7,8,9,'10'));


