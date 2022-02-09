//

// first we are going to find the div tag

let divElem = document.getElementById("intro");

console.log("Div elem -->",divElem);

let item = document.createElement("h1");

item.textContent = "Harsh Patel";

// divElem.insertAdjacentElement("beforebegin",item);

// divElem.insertAdjacentElement("afterbegin",item);

// divElem.insertAdjacentElement("beforeend",item);

divElem.insertAdjacentElement("afterend",item);
