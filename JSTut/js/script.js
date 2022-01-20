// Operations on Array

let books = ["Maths","Physics","Chemistry","C++","Java","JavaScript"];

console.log(books);

console.log("\tLength of the array is ",books.length);

books.push("Python");       // Use of push method

console.log(books);

console.log("\tLength of the array is ",books.length);

books.unshift("Harsh");// use of unshift method --> Elements to insert at the start of the array.

console.log(books);

console.log("\tLength of the array is ",books.length);

books.pop()     // use of pop --> Removes the last element from an array and returns it. 
                // If the array is empty, undefined is returned and the array is not modified.

console.log(books);

console.log("\tLength of the array is ",books.length);

books.pop();

books.pop();


console.log(books);

console.log("\tLength of the array is ",books.length);

books.shift();   // use of shift --> Removes the first element from an array and returns it. 
                // If the array is empty, undefined is returned and the array is not modified.

console.log(books);

console.log("\tLength of the array is ",books.length);

books = ["Hi","Harsh",1,2,3,4,5,6,7,8,9,"bbbye"];

console.log(books);

books.splice(1,7);     

/*

    Use of splice()

The zero-based location in the array from which to start removing elements.
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@returns — An array containing the elements that were deleted.

*/

console.log(books);

console.log("\tLength of the array is ",books.length);

books = ["Hi","Harsh",1,2,3,4,5,6,7,8,9,"bbbye"];

console.log(books);

books.splice(7,4);  // i.e. -> from position 7th delete next 4-1 elements 

console.log(books);

console.log("\tLength of the array is ",books.length);

books.length =0;

console.log(books);

console.log("\tLength of the array is ",books.length);

books = ["Hi","Harsh",1,2,3,4,5,6,7,8,9,"bbbye"];

console.log(books);

let position = books.indexOf(1);

console.log(position);
// isArray --> used to check whether given variable is Array or not.
let arr = "Hi";

console.log(Array.isArray(arr));

// split --> here we are using to seperate the sentence and then converting to Array

let sntc = "Hi Harsh How are you? and what are you doing now?";

console.log(sntc);

arr = sntc.split(' ');

console.log(arr);

// join --> here we are using this method to make sentence from an array

let j1Arr = arr.join();   // if we do not provide any parameter then by default it joins using ','(comma)

console.log(j1Arr);   // Hi,Harsh,How,are,you?,and,what,are,you,doing,now?

j1Arr = arr.join(' '); 

console.log(j1Arr);     // Hi Harsh How are you? and what are you doing now?

// use of + and concat 

let arr1 = ["a","b","c","d"];

let arr2 = ["e","f","g"];

let arr3 = arr1+arr2;       // result datatype --> String

console.log(arr1);
console.log(arr2);
console.log(arr3);

arr3 = arr1.concat(arr2);   // result datatype --> Array

console.log(arr1);
console.log(arr2);
console.log(arr3);

books = ["Maths","Science","Physics","Chemistry"];

let booksWithPages = [
    ["Math","100"],
    ["Science","200"],

];

console.log(booksWithPages);

console.log("booksWithPages[0][1]",booksWithPages[0][1]);

booksWithPages = [
    ["Math",["100","200"]],
    ["Science","200"],

];

console.log(booksWithPages);

console.log("booksWithPages[0][1]",booksWithPages[0][1]);

console.log("booksWithPages[0][1][1]",booksWithPages[0][1][1]);

console.log("books",books);

for(let i =0;i<books.length;i++){
    console.log(books[i]);

}

// Getting  Array Elements using ForEach
books.forEach(myFun);

function myFun(value){
    console.log(value);
}
