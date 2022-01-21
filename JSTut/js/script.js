// Global variable vs Local Variable

let car = "Lamborghini";    // Global variable

function doPrint(){

    let car = "Audi";
    
    console.log("car is : ",car);

    let a = 25;             // Local variable

    console.log("A is ",a);

    // let car = "BMW";        // ReferenceError: Cannot access 'car' before initialization

    // that means if we want to make our local variable with same name as global variable then 
    // we have to declare or define at the start of the function 

    console.log("car is ",car);
}

doPrint();

console.log("car is ",car);