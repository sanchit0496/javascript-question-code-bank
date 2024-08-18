console.log('hello')


// array splicing and slicing here

// 1) Given an array of colors ["red", "blue", "green", "yellow"], write a function that uses splice to remove "blue" from the array and add "purple" and "orange" in its place.
let arr = ["red", "blue", "green", "yellow"]
arr.splice(1,1, 'purple', 'orange')
console.log(arr);

// 2) Given an array of numbers [1, 2, 3, 4, 5], use slice to extract a portion of the array from the second element to the fourth element (inclusive).
let numbers = [1, 2, 3, 4, 5];
let numbers1 = numbers.slice(1, 4)
console.log(numbers1);


// array mapping 

// 1) Given an array of numbers [1, 2, 3, 4, 5], write a function that uses map to create a new array where each number is multiplied by 2.
let arr2 = [1, 2, 3, 4, 5]
console.log(arr2.map((item) => item * 2));

// 2) Given a nested array of numbers [[1, 2], [3, 4], [5, 6]], write a function that uses flatMap to flatten the array and multiply each number by 2.
let arr3 = [[1, 2], [3, 4], [5, 6]]
let flatArr3 = arr3.flat(1).map((item) => item * 2)
console.log(flatArr3)


// Filtering Arrays as per condition 

// 1) Given an array of numbers [10, 15, 20, 25, 30], write a function that filters out all numbers less than 20.
let arr4 = [10, 15, 20, 25, 30]
console.log(arr4.filter((item) => item > 20))

// 2) Given an array of strings ["apple", "banana", "grape", "pear"], write a function that filters out all strings that do not start with the letter "a".
let fruits = ["apple", "banana", "grape", "pear"];
console.log(fruits.filter((item) => item.startsWith('a')));


// Reducing Arrays

// 1) Given an array of numbers [1, 2, 3, 4, 5], write a function that uses reduce to calculate the sum of all elements in the array.
let numbers2 = [1, 2, 3, 4, 5];
let sum = numbers2.reduce((accumulator, item) => {
    return accumulator += item
}, 0)

console.log(sum);

// 2) Given an array of strings ["apple", "banana", "apple", "orange", "banana", "apple"], write a function that uses reduce to count the occurrences of each element in the array.
let fruits2 = ["apple", "banana", "apple", "orange", "banana", "apple"];
let res = fruits2.reduce((accumulator, item) => {
    if(accumulator[item]){

        accumulator[item]++
    }else{
        accumulator[item] = 1
    }
    return accumulator
}, {})
console.log(res);

