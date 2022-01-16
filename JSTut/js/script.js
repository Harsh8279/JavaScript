// input = 1 , "y", "yes"   ==> print continue...
// input = 0, "n", "no"     ==> print end..

let input = 1;

// input = 'n';

// input = '';

input = 'yes';

/*
if(input===1){

    document.write("Continue...");

}else if(input==='y'){
    document.write("Continue...");
}
else if(input==='yes'){
    document.write("Continue...");
}
else if(input===0){
    document.write("End...");
}
else if(input==='n'){
    document.write("End...");
}
else if(input==='no'){
    document.write("End...");
}
else{
    document.write("Invalid !!!");
}

*/

// Switch statement 

// Switch only use --> === (Strict comparison)

input = 'y';

switch(input){

    case 1 :    // if(input===1)
        document.write("Continue...");
    break;

    case 'y':   // if(input==='y')
        document.write("Continue...");
    break;

    case 'yes': // if(input==='yes')
        document.write("Continue...");
    break;

    case 0:     // if(input===0)
        document.write("End...");
    break;

    case 'n':   // if(input==='n')
        document.write("End...");
    break;

    case 'no':  // if(input==='no')
        document.write("End...");
    break;

    default:
        document.write("Invalid !!!");

    break;
}

