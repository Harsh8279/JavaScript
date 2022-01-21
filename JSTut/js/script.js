// Returning value from the function

function doAdd(a,b){

    return a + b;

}

let sum = doAdd(1,2);

console.log(sum);

// If we write differnt function definition in one js file then it defines for all that doesn't mean like 
// for one it work differnt and for other different 

/*
function doAdd(a,b){
    let d = a + b;
    return d;
}
*/
sum = doAdd(1,2);

console.log(sum);

// If we donot return the value then it return undefined

function doNothing(a,b){
    console.log("Not returning any value");
}

let a = doNothing(1,2);

console.log(a);

function doComparison(a,b){
    if(a>b){
        return 1;
    }else if(b>a){
        return -1;
    }
    else{
        return 0;
    }
}

let comp = doComparison(1,2);

console.log(comp);

comp = doComparison(2,1);

console.log(comp);

comp = doComparison(4,4);

console.log(comp);