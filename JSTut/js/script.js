// label to for loops 

outer:for(let i =1;i<=10;i++){ //   labelizing the loop
    
    document.write(i);
    document.write("<br>");
    for(let j=1;j<3;j++){
        
        // now I want to break outer loop using 
        // this inner loop condition
        if(i==5){
            break outer;
        }
        document.write("Inner Loop");
        document.write("<br>");
    }

}