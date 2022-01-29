// Nested Objects in JavaScripts

let user = {

    id : 101,
    email : "abc@gmail.com",
    personalDetails : {
        firstName : "Harsh",
        lastName : "Patel",
        age : 22,
        address : {
            line1   : "191,TekraFaliyu",
            line2   : "Dihen, Olpad",
            city    : "Surat",
            state   : "Gujarat",
            country : "India",
            pincode : "394005"
        }
    },

};

console.log("user -->",user);

console.log("user.personalDetails -->",user.personalDetails);

console.log("user.personalDetails.address -->",user.personalDetails.address);