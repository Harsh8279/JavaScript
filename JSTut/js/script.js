let age = 18;

// let hasVoterIdCard = true;
let hasVoterIdCard = false;


if(age>=18 && hasVoterIdCard){
    alert("You can vote");
}
else if(age>=18 && !hasVoterIdCard)
{
    alert("Please visit for making voter id card!!!");
}
else{
    alert("Sorry!! Not Eligible!!");
}