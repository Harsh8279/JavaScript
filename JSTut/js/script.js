let pName  = "Swayam";

// let sntc = `Hi ${name} Good Morning!!`;     // In a browser, the global name variable has special meaning. 

let sntc = `Hi ${pName} Good Morning!!`;

console.log(sntc);

sntc  = `Hi ${pName}\nGood \tMorning!!`;

console.log(sntc);

sntc = "Hi\Harsh How are you???";

console.log(sntc);

sntc = "Hi\\Harsh How are you???";

console.log(sntc);

// sntc = "Hi Harsh"Good Morning"; --> Invaid

sntc = "Hi \"Harsh How are you???";

console.log(sntc);

sntc =  'That book is Harsh\'s book ri8??';

console.log(sntc);

sntc = "Hi\Harsh";

console.log(sntc.length);

sntc = "Hi\\Harsh";
console.log(sntc);
console.log(sntc.length);

sntc = "Swayam Patel";

console.log("sntc ",sntc);

console.log("sntc[4]",sntc[4],"sntc[5]",sntc[5]);

// case sensitive
sntc = "harsh";

if("Harsh"==sntc){
    console.log("Equal");
}
else{
    console.log("Not Equal");
}

let str1 = "Hi";

let str2 = "Swayam";

let str3 = str1.concat(str2);

console.log(str3);

str3 = str1.concat(" ",str2);

console.log(str3);

sntc = "Hi Swayam Patel Good Morning!!";

let subSntc = sntc.substring(3,15);

console.log(sntc);
console.log("sntc.substring(3,15) ",subSntc);

let position = sntc.indexOf("Good");

console.log(sntc);

console.log("sntc.indexOf(\"Good\")", position);

position = sntc.indexOf("good");

console.log(sntc);

console.log("sntc.indexOf(\"good\")", position);

position = sntc.indexOf("Good",17); // we can give from which point we want search

console.log(sntc);

console.log("sntc.indexOf(\"Good\",17)", position);

position = sntc.indexOf("Good",2); // we can give from which point we want search

console.log(sntc);

console.log("sntc.indexOf(\"Good\",2)", position);

sntc = "Hi Harsh, How are you? All are good or not?"

position = sntc.indexOf("are");

let lstPosition = sntc.lastIndexOf("are");

console.log(sntc);

console.log("sntc.indexOf(\"are\")",position);

console.log("sntc.lastIndexOf(\"are\")", lstPosition);

sntc = "     Hi Harsh how are you? Where are yoou going now???      ";

let trimmedSntc = sntc.trim();
console.log("=============================================================");
console.log(sntc)
console.log(trimmedSntc);
console.log("=============================================================");
trimmedSntc = sntc.trimEnd();
console.log("=============================================================");
console.log(sntc)
console.log(trimmedSntc);
console.log("=============================================================");

sntc = "Hi Harsh Hw Are you I am FINE NA? ";

let uperSntc = sntc.toUpperCase();
console.log("=============================================================");
console.log(sntc)
console.log(uperSntc);
console.log("=============================================================");

let lwrSntc = sntc.toLowerCase();
console.log("=============================================================");
console.log(sntc)
console.log(lwrSntc);
console.log("=============================================================");

let lcllwrSntc = sntc.toLocaleLowerCase();
console.log("=============================================================");
console.log(sntc)
console.log(lcllwrSntc);
console.log("=============================================================");

let lcluprSntc = sntc.toLocaleUpperCase();
console.log("=============================================================");
console.log(sntc)
console.log(lcluprSntc);
console.log("=============================================================");

sntc = "Hi Harsh Patel How are You???";

let rplcsntc = sntc.replace("Harsh","Swayam");
console.log("=============================================================");
console.log(sntc)
console.log(rplcsntc);
console.log("=============================================================");

let incValue  = sntc.includes("Harsh");

console.log("=============================================================");
console.log(sntc)
console.log("sntc.includes(\"Harsh\")",incValue);
console.log("sntc.includes(\"harsh\")",sntc.includes("harsh"));
console.log("=============================================================");