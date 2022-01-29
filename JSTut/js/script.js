// Object Construction function in JavaScript

// we want to make an object 

let s1 = {
    name : "Harsh",
    age : 22,
    cls:1
};

// and now we want same properties in another object

let s2 = {
    name : "Swayam",
    age : 17,
    cls:4
};

// so for this requirement we have to make two time object with same properties
// We can use class also but we can use Object Constructor function

function Student(name,age,cls){
    this.name = name;
    this.age = age;
    this.cls=cls;
};

s1 = new Student("Harsh",22,4);

s2 = new Student("Swayam",17,1);

console.log("Student 1",s1);

console.log("Student 2",s2);
// so we can solve that replica using this Object Construction function

// now we are going to add a property in our first object

s1.dept = "Computer";

s2.passingYr = 2021;

console.log("Student 1",s1);

console.log("Student 2",s2);

// so now we can say that we can put differnt properties in differnt objects

// same way we can add method also 

s1.studentDetails = function(){
    return `Name is ${this.name} age is ${this.age} and class is ${this.cls}`;
};

console.log(s1.studentDetails());

// If we want common properties then we can also add in our constructor function

// now our requirement is we want to add another common property but not in constructor function additionalyy

Student.prototype.nationality = "Indian";

console.log("Student 1",s1);    

/*
Student 1 
    Student {name: 'Harsh', age: 22, cls: 4, dept: 'Computer', studentDetails: ƒ}
    age: 22
    cls: 4
    dept: "Computer"
    name: "Harsh"
    studentDetails: ƒ ()
    [[Prototype]]: Object
        nationality: "Indian"
*/
// If we see output then we get that property inside Prototype object 
// but we can access it directly like others
console.log("s1.nationality",s1.nationality)
console.log("Student 2",s2);

// In same way we can add function also

Student.prototype.getDetails = function(){
    return "Name "+this.name+" Age is "+this.age+" class is "+this.cls+" Nationality is "+this.nationality;
};

console.log("Student 1",s1);
console.log("Student 2",s2);

console.log(s1.getDetails());

console.log(s2.getDetails());
