// insert before an element in javaScript

// first getting our parent element

let prtElement  = document.getElementById("ul1");

console.log(prtElement);

// now we are going to create an element 

let newLiElm = document.createElement("li");

newLiElm.innerHTML = "NewlyAdded";

console.log(newLiElm);

// now I want to add this new element before the 1st element 

// then we have to get first element, so let's go

let firstElem = prtElement.firstElementChild;

console.log("first Element -->",firstElem);

// so now we can add the element 

prtElement.insertBefore(newLiElm,firstElem);

// now we want to add the new Element before 2nd Element

let secElem = firstElem.nextElementSibling;

console.log("Second Element -->",secElem);

// got it and now we are going to add

prtElement.insertBefore(newLiElm,secElem);

// now we are going to add the element before 3rd Element

let thirdElement = secElem.nextElementSibling;

console.log("Third Element -->",thirdElement);

// got it and now we are going to add

prtElement.insertBefore(newLiElm,thirdElement);

// insertBefore("newElement","before that we want to add element")

// Now I want to add the element before UL and after Body

// then first get Body element

// let bdyElement = document.getElementsByTagName("body");

let bdyElement = document.body;

console.log(bdyElement);

bdyElement.insertBefore(newLiElm,prtElement);