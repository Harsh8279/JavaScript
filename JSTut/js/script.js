// remove an element using javaScript

// first get the parent element

let prtElem = document.getElementById("ul1");

console.log("Parent Element -->",prtElem);

// now we want to remove the second Element 
// so first we are going to get that second element

let secElemt = prtElem.firstElementChild.nextElementSibling;

console.log("Second Element -->",secElemt);

// now we are going to remove the second element

prtElem.removeChild(secElemt);

// deleted second element

// now we want to remove the whole UL then
// for that we have parent element as a BODY

let bdyElement = document.body;

console.log("Body Element -->",bdyElement);

bdyElement.removeChild(prtElem);

// UL also deleted...