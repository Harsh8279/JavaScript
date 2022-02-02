// Create and Append Element from .js file
        
let divElem = document.getElementById("intro");

console.log("divElem -->",divElem);

let h1 = document.createElement("h1");

console.log(h1);    // Here we have create blank h1 tag

let text = document.createTextNode("Hii, This h1 tag");   // this function create Text node 

console.log(text);

// now we are going to add this text as a child node of h1

h1.appendChild(text);


// we can also add text inside element using properties instead of method

//h1.textContent = "Content added";   

divElem.appendChild(h1);    // and finally we added our h1 tag with the text node

// now we are going to assign class to h1 tag

h1.className = "temp";

console.log(h1);

// if we want to assign more than one class then

h1.className = "temp test";

console.log(h1);

// now we are going to assign id to the h1 tag

h1.id = "intro1";

console.log(h1);

// now we want to add our h1 tag in to the body part then

let bdyElem = document.body;        // getting body element 

bdyElem.appendChild(h1);

// now we want to read the textcontent of element

let paraTag = document.getElementById("para");

console.log(paraTag.textContent);

// now we want to add one li tag inside the ul tag

let ulElem = document.getElementsByTagName("ul");

console.log(ulElem);

ulElem = document.getElementById("ul1");

console.log("ulelm -->",ulElem);

// now we are creating li element 

let liElem = document.createElement("li");

console.log(liElem);

// now adding text inside that

liElem.textContent = "Tea";

// now we are going to append the li tag

ulElem.appendChild(liElem);