// Date Object in javascript

let dtOne = 2022-01-27;

console.log("dtOne is",dtOne," type is :",typeof dtOne);

dtOne = "2022-01-27";

console.log("dtOne is",dtOne," type is :",typeof dtOne);

dtOne = "Jan-27-2022";

console.log("dtOne is",dtOne," type is :",typeof dtOne);

dtOne = new Date();

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);

dtOne = new Date("2022-25-01");     // Invalid

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);

/*

    There are 4 ways to create a new date object:

    new Date()
    new Date(year, month, day, hours, minutes, seconds, milliseconds)
    new Date(milliseconds)
    new Date(date string)

*/

/*

    Note: JavaScript counts months from 0 to 11:

    January = 0.

    December = 11.

*/

dtOne = new Date(2022,00,25);

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);

dtOne = new Date(2022,00,27,10,03,05,56);

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);

dtOne = new Date(2022,25,08);       // Thu Feb 08 2024 

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);

dtOne = new Date(2022020496);

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);

dtOne = new Date(99220209);

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);

dtOne = new Date(0);

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);

dtOne = new Date( 1643309935000);

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);
// One and two digit years will be interpreted as 19xx
dtOne = new Date(99, 11, 24);

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);

dtOne = new Date(00, 05, 04);

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);

dtOne = new Date(2000, 05, 04);

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);

dtOne = new Date(9, 11, 24);

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);

dtOne = new Date("October 13, 2022 11:13:00");

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);

dtOne = new Date(-100000000000);

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);

// When you display a date object in HTML, it is automatically converted to a string, with the toString() method.

dtOne = new Date(2022, 0, 28);

console.log("dtOne = new Date(); --> ",dtOne);

console.log("Type is ",typeof dtOne);

console.log("dtOne.toString() --> ",dtOne.toString(),"type is ",typeof(dtOne.toString()));

// The toUTCString() method converts a date to a UTC string (a date display standard).

console.log("dtOne.toUTCString() --> ",dtOne.toUTCString(),"type is ",typeof(dtOne.toUTCString()));

console.log("dtOne.toLocaleString() --> ",dtOne.toLocaleString(),"type is ",typeof(dtOne.toLocaleString()));

dtOne  = new Date();
console.log("dtOne = new Date(); --> ",dtOne);
console.log("dtOne.valueOf() --> ",dtOne.valueOf(),"type is ",typeof(dtOne.valueOf()));

console.log("dtOne.getTime() -->",dtOne.getTime());
//The toDateString() method converts a date to a more readable format
console.log("dtOne.toDateString() --> ",dtOne.toDateString());
//The toISOString() method converts a Date object to a string, using the ISO standard format
console.log("dtOne.toISOString() --> ",dtOne.toISOString());

console.log("dtOne.getMonth() --> ",dtOne.getMonth());

/*

Method                      Description
getFullYear()           Get the year as a four digit number (yyyy)
getMonth()              Get the month as a number (0-11)
getDate()               Get the day as a number (1-31)
getHours()              Get the hour (0-23)
getMinutes()            Get the minute (0-59)
getSeconds()            Get the second (0-59)
getMilliseconds()       Get the millisecond (0-999)
getTime()               Get time (milliseconds since January 1, 1970)
getDay()                Get the weekday as a number (0-6)
Date.now()              Get the time. ECMAScript
*/

/*
Method	                    Description
setDate()	            Set the day as a number (1-31)
setFullYear()	        Set the year (optionally month and day)
setHours()	            Set the hour (0-23)
setMilliseconds()	    Set the milliseconds (0-999)
setMinutes()	        Set the minutes (0-59)
setMonth()	            Set the month (0-11)
setSeconds()	        Set the seconds (0-59)
setTime()	            Set the time (milliseconds since January 1, 1970)
*/

dtOne = new Date("Jan 23, 2022");

console.log("dtOne --> ",dtOne);

let dtTwo = new Date();

console.log("dtTwo --> ",dtTwo);

console.log("dtOne>dtTwo --> ",dtOne>dtTwo);

console.log("dtOne<dtTwo --> ",dtOne<dtTwo);
