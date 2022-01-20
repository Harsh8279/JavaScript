function myTables(number){
    for(let i = 1;i<=10;i++){
        document.write(`${number} x ${i} = ${number*i}<br>`);
    }
}



let number = + prompt("Enter Number ");

myTables(number);

function doAdd(num1, num2){
    let sum = num1+num2;

    document.write(`sum is ${sum}`);

}

doAdd(1,2);
