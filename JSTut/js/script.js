// clone or Copy Element in JavaScript

// we are going to copy the UL element 

// so first we are going to get that 

let ulElemt = document.getElementById("ul1");

console.log("UL Element -->",ulElemt);

// now we are going to clone our element by cloneNode

let cloneElemt = ulElemt.cloneNode(true);

console.log(cloneElemt);

// here we have passed the TRUE in cloneNode method 
// because we want to copy the element with it's content --> with it's children

// if we don't want the children then we just remove true 
// and remain as blank...

let withOutChildElem = ulElemt.cloneNode();

console.log("WIthout Children clone Element --> ",withOutChildElem);

// now we are going to add the cloned element after body

let bdyElement = document.body;

console.log("Body Element -->",bdyElement);

// bdyElement.appendChild(cloneElemt);

// added !!

// but the issue is both element have same id 
// so solution is change clone Element Id before append

cloneElemt.id = "cloneElement"

bdyElement.appendChild(cloneElemt);