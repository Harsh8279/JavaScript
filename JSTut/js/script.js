// Remove Event Listener usin JavaScript
let btn = document.getElementById("btn1");

function click1(){
    console.log("Click-1");
}


function click2(){
    console.log("Click-2");
}

btn.addEventListener("click",click1);
btn.addEventListener("click",click2);

btn.removeEventListener('click',click2);
