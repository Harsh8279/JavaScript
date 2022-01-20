function myTables(number){
    for(let i = 1;i<=10;i++){
        document.write(`${number} x ${i} = ${number*i}<br>`);
    }
}



let number = + prompt("Enter Number ");

myTables(number);
