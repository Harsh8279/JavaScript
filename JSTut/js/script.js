// DOM Events in JavaScript

function btnClick1(){
    
    alert("Hi Harsh Here!!");
    let bdy = document.body;
    bdy.className = "dim";
    console.clear();
}

function btnClick2(){
    console.log("Hi This is Button 2");
    let bdy = document.body;
    bdy.className = "color";
}

// Register event using EventListener

// selecting the button

let btn2 = document.getElementById("btn2");

btn2.addEventListener("click",btnClick2);


btn2.addEventListener("mouseover",function(){
    btn2.style = "color:blue;";
});

btn2.addEventListener("mouseout",function(){
    btn2.style = "color:grey;";
})


