// getting height and width of specific element using javaScript

// getting element 

let divElem = document.getElementById("box");

let heightOfDiv = divElem.offsetHeight;     // offset means Border+Padding both

let widthOfDiv = divElem.offsetWidth;

console.log("width -->",widthOfDiv);

console.log("height -->",heightOfDiv);

heightOfDiv = divElem.clientHeight;        // client means No border

widthOfDiv = divElem.clientWidth;

console.log("width -->",widthOfDiv);

console.log("height -->",heightOfDiv);
