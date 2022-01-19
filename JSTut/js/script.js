/*

    1. alert() --> shows a message 

    2. prompt() --> shows a message, input text. It returns text on Ok or, 
                    if Cancel button or Esc is clicked, null.

    3. confirm() --> shows a message, confirm with "ok" or "cancel". It 
                     returns true for Ok and false for cancel\Esc.

*/

// Note :- All these pause script execution and don't allow  the visitor 
// to interact with the rest of the page until the window has been dismissed.

alert("Welcome !!");

// let age = prompt("Enter Your Age");

// If we want by default value in text field then 

let age = prompt("Enter Your age ",21);

// document.write("Age is ",age, " type is ",typeof age);

// document.write(age ?? 'Age is blank');

if(age != null){
    document.write("Age is ",age, " type is ",typeof age);
}
else{
    document.write("Age is not given by user!!");
}

// confirm

let response = confirm("Do you want to Quit??");

if(response){

    document.write("<br>Bbbyee!!");

}else{
    document.write("<br>Welcome Back!!");
}