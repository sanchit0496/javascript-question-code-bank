console.log('hello')


// includes

// 1) Task: Given a string "Hello, World!", check if it contains the substring "World".

let str = "Hello, World!";
let substring = "World";
console.log(str.includes(substring))

// 2) Task: Given a string "JavaScript is Fun!", check if it contains the substring "javascript" (case-sensitive).
let str1 = "JavaScript is Fun!";
let substring1 = "javascript";
console.log(str1.toLowerCase().includes(substring1.toLowerCase()))

// 3) let strings = ["banana", "pineapple", "grape"];
let strings2 = ["banana", "pineapple", "grape"];
let substring2 = "apple";
console.log(strings2.includes(substring2))

// 4) let str = "Hello, World!";
let str4 = "Hello, World!";
let substring4 = "World";
console.log(str4.includes(substring4));

// 5) Task: Given a string "The quick brown fox", check if it contains either "fox" or "dog".
let str5 = "The quick brown fox";
let substring5 = "fox";
let substring6 = "dog";
console.log(str5.includes(substring5) || str5.includes(substring6))

// 6) Task: Given a string "JavaScript is awesome", check if it contains "is" starting from index 10.
let str8 = "JavaScript is awesome";
let substring8 = "is";
let position = 10;
console.log(str.includes(str8, 10))
