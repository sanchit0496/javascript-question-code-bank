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


// startsWith

// 1) Task: Given a string "Hello, World!", check if it starts with "Hello".
let str9 = "Hello, World!";
let prefix9 = "Hello";
console.log(str.startsWith(prefix9))


// 2) Task: Given a string "superhero", check if it starts with either "super" or "hero".
let str10 = "superhero";
let prefix1 = "super";
let prefix2 = "hero";
console.log(str10.startsWith(prefix1) || str10.startsWith(prefix2))


// 3) Task: Given a string "abcdefg", check if it starts with "cde" starting from index 2.
let str11 = "abcdefg";
let prefix11 = "cde";
let position11 = 2;
console.log(str11.startsWith(prefix11, position11))


// endsWith

// 1) Task: Given a string "Goodbye, World!", check if it ends with "World!".
let str12 = "Goodbye, World!";
let suffix12 = "World!";
console.log(str12.endsWith(suffix12))

// 2) Task: Given a string "abcdefg", check if it ends with "def" at position 6.
let str14 = "abcdefg";
let suffix = "def";
let position4 = 6;

console.log(str14.endsWith(suffix, position4))

// slice

// 1) Task: Extract the substring "World" from the string "Hello, World!" using slice.
let str15 = "Hello, World!";
let start = 7;
let end = 12;
console.log(str15.slice(start, end))

// 2) Task: Use negative indices to extract "World" from the string "Hello, World!".
let str16 = "Hello, World!";
let start1 = -6;
let end1 = -1;
console.log(str16.slice(start1, end1))

// 3) Task: Given a string "Hello, World!", use slice to extract the first half of the string.
let str18 = "Hello, World!";
let start2 = 0 
let en2 = str18.length/2
console.log(str18.slice(start2, en2))

// 4) Task: Use slice to extract the last character from the string "JavaScript".
let str19 = "JavaScript";
console.log(str19.slice(str19.length -1,str19.length))
console.log(str19.slice(-1,str19.length))

// 5) Task: Given a string "username@example.com", use slice to extract the domain "example.com".
let email = "username@example.com";
let ind = email.indexOf('@')
console.log(ind)
console.log(email.slice(ind +1, email.length))

// 6) Task: Given a string "Hello [World]!", extract the substring "World" that is between [ and ].

let str20 = "Hello [World]!";
console.log(str.slice(str20.indexOf('[') +1, str20.indexOf(']')))


// substring

// 1) Task: Extract the substring "Hello" from "Hello, World!" using substring.
let str21 = "Hello, World!";
console.log(str21.substring(0, str21.indexOf(',')))

// 2) Task: Extract the substring "Java" from "JavaScript" using reversed start and end indices in substring.
let str22 = "JavaScript";
console.log(str22.substring(0,4))
//Swaps startIndex and endIndex if startIndex is greater than endIndex.

// 3) Task: Use substring to extract from index 4 to the end of the string "JavaScript".
let str23 = "JavaScript";
console.log(str23.substring(4, str23.length))


// 4) let str = "Hello, World!";
let str25 = "Hello, World!";
let substr25 = str25.substring(0, str25.indexOf(','))
let substr26 = str25.substring(str25.indexOf('W'), str25.indexOf('!'))

console.log(substr25.substring(substr25.length -2, substr25.length))
console.log(substr26.substring(0, substr26.length-3))

