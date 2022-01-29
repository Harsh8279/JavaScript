// JavaScript Accessors (Getters and Setters)   

let person = {
    name:"Harsh",
    age:22,

    // our requirement is to return capitalize name but via object properties not externally
    // for that We are making one method which will return it and
    // If we want to return anything from function then 
    // We are going to name that function starter as get e.g. getAge(),getName()
    // this is via method of object 

    // getName : function (){
    //     return this.name.toUpperCase();
    // },
    // but we need to call using the Object's properties then we can use set and get
    get getName(){
        return this.name.toUpperCase();
    },
    // setName : function(name){
    //     this.name = name;
    // },

    set setName(name){
        this.name = name;
    },
    

};

console.log(person.name);
// console.log(person.getName());

person.setName = "Swayam";

console.log(person.getName);