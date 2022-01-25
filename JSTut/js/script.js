// Object 

let person = {};

console.log(person);

console.log(typeof person);

// properties of object 

person = {

    firstName   : "Swayam",
    lastName    : "Patel",
    age         :  17

};

console.log("Person",person);

person.sayHello = function (){
                                console.log("Hello");
                            };

console.log("Person",person);

person.sayHello();

/* OR */

function greet(){
    console.log("Hi Everyone!!");
}

person.sayHi = greet;
console.log("Person",person);
person.sayHi();

/* OR */

person = {
    firstName   : "Swayam",
    lastName    : "Patel",
    sayGoodMorning : function(){console.log("Good Morning!!")}
}

console.log("Person",person);

person.sayGoodMorning();

/* OR */

person = {
    firstName   : "Swayam",
    lastName    : "Patel",
    sayGoodMorning(){console.log("Good Morning!!")}
}

console.log("Person",person);

person.sayGoodMorning();