console.log('hello')


// Looping through Arrays

// 1) Question 1: Write a function that takes an array of numbers as input and returns the sum of all the elements using a for loop.

let numbers = [1,2,3,4]

const printArr = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
printArr(numbers)

// 2) Given an array of strings, use the forEach method to print each string in the array to the console.

let strArray = ['a', 'b', 'c', 'd']

const printArr1 = () => {
    strArray.forEach((item) => {
        console.log(item);
    })
}
printArr1(strArray)


// Searching for Elements

// 1) Given an array of integers, write a function that finds and returns the index of the first occurrence of the number 10. If the number is not found, return -1.

let arr2 = [1,2,3,4,10,20,10]
console.log('hello')
let ans = arr2.findIndex((item) => item === 10)
console.log(ans);

// 2) Write a function that checks if an array contains the string "apple". The function should return true if "apple" is found, and false otherwise.

let arr4 = ['orange', 'pear', 'apple', 'papaya']
console.log(arr4.includes('apple'))

// 3) Given an array of numbers, write a function that returns an array of all the numbers that are even.

let arr5 = [1,2,3,4,5,6,7,8,9,10]
let retArr5 = arr5.filter((item) => item%2 === 0)

console.log(retArr5);

// 4) Given an array of objects representing students, where each object has a name and a grade property, write a function that returns an array of all students who have a grade greater than or equal to 75.

let students = [
    { name: "Alice", grade: 85 }, { name: "Bob", grade: 68 }, { name: "Charlie", grade: 92 },{ name: "David", grade: 74 }];
    
let studentArr = students.filter((item) => item.grade >= 75)  
console.log(studentArr);


// Sort an array of numbers in ascending and descending order

//1) Given an array of numbers [8, 3, 5, 2, 9], write a function to sort the array in ascending order.

let numbers2 = [8, 3, 5, 2, 9];
let sortedNumbers2 = numbers2.sort((a,b)=> a - b)
console.log(sortedNumbers2);

// 2) Given an array of numbers [4, 7, 1, 8, 3], write a function to sort the array in descending order.

let numbers4 = [4, 7, 1, 8, 3]
console.log(numbers4.sort((a, b) => b-a));


// Reversing the Elements of an Array:

// 1) Given an array of strings ["apple", "banana", "cherry", "date"], write a function that returns the array with its elements in reverse order.

let fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits.reverse());

// 2) Given an array of numbers [10, 20, 30, 40, 50], write a function that reverses the elements of the array.

let numbers5 = [10, 20, 30, 40, 50];
console.log(numbers5.reverse());