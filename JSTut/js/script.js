// change the css classes using JavaScript


// select the div tag 

let divElem = document.getElementById("box");

console.log("Div Elem -->",divElem);

console.log("divElem.className -->",divElem.className);

// here we are going to append the class 

divElem.className += " dim"; 
// we have given space before class name, because 
// if we don't give the space then we got new class name
// e.g. class-1 --> color ans class-2 --> dim
// without space class = "colordim"
// with space  class = "color dim"

console.log("divElem.classList -->",divElem.classList);

/*
DOMTokenList(2) ['color', 'dim', value: 'color dim']
*/

// now we are going to access one by one from classList

for(let i=0;i<divElem.classList.length;i++){
    
    console.log(divElem.classList[i]);

}

// or 

for(let i of divElem.classList){
    console.log(i);
}

// now we are going to add the class using classList

divElem.classList.add("newClass");

// now we are going to remove the class using classList

divElem.classList.remove("dim");

// now we are going to replace the class using classList

divElem.classList.replace("newClass","dim");

// now we are going to check that element has class has or not

console.log("divElem.classList.contains(\"newClass\") -->",divElem.classList.contains("newClass"));

// now we are going to use the Toggle 

divElem.classList.toggle("dim"); // i.e. if element has a class then going to remove and if not then add that class


