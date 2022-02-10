// Change/Edit the Attribute of Tag

// first we are going to get tag which we want to edit it's attrbute

let btnElem = document.getElementById("btn");

console.log("Button -->",btnElem);

// now we are going to set the class attribute

btnElem.setAttribute("class","SendButton");

// before
{/* <button id="btn">Send</button> */}
// after 
{/* <button id="btn" class="SendButton">Send</button> */}

// if we want to get the attribute of the tag then 

let idOfBtn = btnElem.getAttribute("id");

console.log("Id -->",idOfBtn);

// if we want to remove an attribute then

btnElem.removeAttribute("id");

// after removing ID

{/* <button class="SendButton">Send</button> */}

// if we want to check the attribute is there or not then

let isBtnId = btnElem.hasAttribute("id");

console.log("Button has Id or not ?",isBtnId);
