// Anonymus Function

/*

function (){        // SyntaxError: Function statements require a function name
    console.log("Hiiiii");
}

*/

let fn = function(){
    console.log("Hiii I am variable function");
};

console.log(fn);

fn();

setTimeout(fn,3000);    // it calls function after 3sec 

console.log("Hiiiii");

setTimeout(
    function (){
        console.log("Hi I have no name and still I am function so I am Anonymus function");
    },3000
);

// Note : Javascript not run line by line