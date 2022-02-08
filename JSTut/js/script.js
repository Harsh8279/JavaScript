// replace element using javaScript

// here we want to replace 2nd element 

// so getting 2nd element

let parentElem = document.getElementById("ul1")

let secElem = parentElem.firstElementChild.nextElementSibling;

console.log("Second Element -->",secElem);

// newly create element 

let newLiElem = document.createElement("li");

newLiElem.textContent = "NwElm";

console.log("new Element --> ",newLiElem);

parentElem.replaceChild(newLiElem,secElem);





