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


// trim


// 1) Task: Given a string " Hello, World! ", use trim to remove whitespace from both ends.
let str26 = "   Hello, World!   ";
console.log(str26.trim())

// 2) Task: Given a string "\t\n Hello, World! \n\t", use trim to remove tabs, newlines, and spaces from both ends.
let str27 = "\t\n   Hello, World!  \n\t";

console.log(str27.trim())


// padStart

// 1) Task: Given a string "5", pad it with leading zeros to make it 3 characters long using padStart.

let str28 = '5'
console.log(str28.padStart(3))

// 2) Task: Given a string "abc", pad it with "x" on the left to make it 5 characters long using padStart.
let str29 = 'abc'
console.log(str29.padStart(5, 'x'))

// 3) Task: Given a string "JavaScript", pad it to a length of 15 without specifying padString.
let str32 = "JavaScript";
console.log(str32.padEnd(15))

// 4) Task: Given a list of numbers ["5", "15", "150"], use padStart to format them all to a length of 4 with leading spaces.
let numbers = ["5", "15", "150"];
let numbers1 = numbers.map((item) => item.padStart(4))
console.log(numbers1)


// padEnd

// 1) Task: Given a string "5", pad it with trailing zeros to make it 3 characters long using padEnd.
let str34 = '5'
console.log(str34.padEnd(3, '0'))

// 2) Task: Given a string "abc", pad it with spaces on the right to make it 6 characters long using padEnd.
let str35 = 'abc'
console.log(str35.padEnd(6))

// 3) Task: Given a string "123", pad it with "x" on the right to make it 5 characters long using padEnd.
let str36 = '123'
console.log(str36.padEnd(5, 'x'))

// 4) Task: Given a list of strings ["a", "abc", "abcd"], use padEnd to format them all to a length of 6 with trailing spaces.
let strings = ["a", "abc", "abcd"];
let resultArr = strings.map((item) => item.padEnd(6))
console.log(resultArr)


// repeat 

// 1) Task: Given a string "ha", repeat it 4 times using repeat.
let str37 = 'ha'
console.log(str37.repeat(4))


// split

// 1) Task: Given a string "Hello World", split it into an array of words using split.
let str38 = "Hello World";
console.log(str38.split(" "))


// 2) Task: Given a URL "https://example.com/page/about", split it into parts using split.
console.log("https://example.com/page/about".split('/'))


// replace

// 1) Task: Given a string "Hello, There!", replace "There" with "JavaScript" using replace.
let str39 = "Hello, There!";
console.log(str39.replace('There', 'JavaScript'))

// 2) Task: Replace "hello" with "Hi" in the string "Hello, hello!", considering case sensitivity.
let str40 = "Hello, hello!";
console.log(str40.replace('hello', 'Hi'))

// 3) Task: Replace the first occurrence of "is" with "was" in the string "This is a test. This is only a test.".
let str41 = "This is a test. This is only a test.";
console.log(str41.replace('is', 'was'))

// 4) Task: Replace "http" with "https" in the URL "http://example.com".
let url = "http://example.com";
console.log(url.replace('http', 'https'))


// replaceAll

// 1) Task: Replace all occurrences of "is" with "was" in the string "This is a test. This is only a test.".
let str42 = "This is a test. This is only a test.";
console.log(str42.replaceAll('is', 'was'))


// 2) Task: Replace all occurrences of "car" with "bike" in the string "Car car CAR car" ignoring case sensitivity.
let str43 = "Car car CAR car";
console.log(str43.replaceAll(/car/gi, 'bike'))


// toLowerCase


// 1) Task: Convert the string "HELLO, WORLD!" to lowercase using toLowerCase.
let str44 = "HELLO, WORLD!";
console.log(str44.toLowerCase())

// 2) Task: Convert the sentence "JavaScript Is Fun" to lowercase using toLowerCase.
let str45 = "JavaScript Is Fun";
console.log(str45.toLowerCase())


// toUpperCase

// 1) Task: Convert the string "Hello, World!" to uppercase using toUpperCase.
let str46 = "Hello, World!";
console.log(str46.toUpperCase())

// 2) Task: Convert the sentence "JavaScript is fun" to uppercase using toUpperCase.
let str47 = "JavaScript is fun";
console.log(str47.toUpperCase())


