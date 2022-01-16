// break , continue
document.write("break<br>");
for(let cnt = 1;cnt<10;cnt++){
    if (cnt==5){
        break;
    }

    document.write(cnt);
    document.write("<br>");
}
document.write("Continue<br>");
for(let cnt = 1;cnt<10;cnt++){
    if (cnt==5){
        continue;
    }

    document.write(cnt);
    document.write("<br>");
}
document.write("Nested For Loop<br>");
for(let i=1;i<10;i++){
    document.write(i);
    document.write("<br>");

    for(let j=1;j<3;j++){
        
        if(i==3){
            // break; 
            continue;
        }

        document.write("Harsh");
    }
    document.write("<br>");

}