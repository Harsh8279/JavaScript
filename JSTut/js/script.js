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

console.log(person);

console.log(typeof person);

console.log("person.firstName",person.firstName);

console.log("person.['firstName']",person['firstName']);

console.log("person.lastName",person.lastName);

console.log("person['lastName']",person['lastName']);

console.log("person.age",person.age);

console.log("person['age']",person['age']);

console.log(`person.address ${person.address}`);        // undefined bcz it does not exist

person.city = "Surat";

console.log("person",person);

console.log("person.city ",person.city);

// delete any property of object 

delete person.city;

console.log(person);

// verifying object properties are there in object or not

console.log("'city' in person",'city' in person);

console.log("'age' in person",'age' in person);

// see all properties of objects

for(let i in person){
    console.log(i);
    console.log(person[i]);
}

