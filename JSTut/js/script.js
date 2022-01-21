function myTables(number){
    for(let i = 1;i<=10;i++){
        document.write(`${number} x ${i} = ${number*i}<br>`);
    }
}



let number = + prompt("Enter Number ");

myTables(number);

function doAdd(num1, num2){
    let sum = num1+num2;

    document.write(`sum is ${sum}<br>`);

}

doAdd(1,2);

doAdd(1,2,3);

function doNothing(){
    // document.write(`Hiiiiiii Arguments ${arguments} <br>`);
    console.log(`Hiiiiiii Arguments ${arguments} `);
    for(let i = 0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
    console.log(arguments);
}

doNothing();

doNothing(123);

doNothing(123,456);

function doAddition(){
    if(arguments.length<=0){
        console.log("No Arguments paassed!!");
    }
    else{
        let sum =0;
        for(let i=0;i<arguments.length;i++){
            sum = sum + arguments[i];
        }

        console.log(`Sum is ${sum}`);
    }
}

doAddition();

doAddition(1,2,3);

doAddition(4,5,6,7,8);

doAddition(123,456,789,123,456,789);

let add = doAddition;

add(10,20,30,40,50);

console.log(add);
