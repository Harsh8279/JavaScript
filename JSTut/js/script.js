// Change/Edit the inline css of Tag

// first we are going to get tag which we want to edit it's attrbute

let btnElem = document.getElementById("btn");

console.log("Button -->",btnElem);

// now we are going to change the style 

btnElem.style.background = "Red";
// after
{/* <button id="btn" style="background: red;">Send</button> */}

// now we are going to change the style using setAttribute

btnElem.setAttribute("style","color:green");

{/* <button id="btn" style="color:green">Send</button> */}

// if we want to append the style then

btnElem.style.background += "white";

{/* <button id="btn" style="color: green; background: white;">Send</button> */}

