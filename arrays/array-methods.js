let arr1 = [1,2,3,5,6]

// map 

//1)  Write a JavaScript function that takes an array of numbers and returns a new array with each number doubled using the map() method.
let arr2 = arr1.map((index, item) => {
    return item * 2
})
console.log(arr2)

// 2) Given an array of objects representing users with properties name and age, use map() to create a new array of objects where each user has an additional property isAdult which is true if the user's age is 18 or more, and false otherwise
let arr3 = [
    {name: 'Person 01', age: 20},
    {name: 'Person 02', age: 10},
    {name: 'Person 03', age: 21},
    {name: 'Person 04', age: 8},
    {name: 'Person 05', age: 9},
    {name: 'Person 06', age: 22}
]

let newArr3 = arr3.map((item, index) => {
    if(item.age > 18){
        item.isAdult = true
    }else{
        item.isAdult = false
    }
    return item
})
console.log(newArr3)

// 3)Write a function that takes an array of strings and returns a new array where 
//each string is capitalized (first letter uppercase, the rest lowercase) using the map() method.

let arr4 = ['hello', 'world']
let newArr4 = arr4.map((item, index) => {
    return item.charAt(0).toUpperCase().concat(item.slice(1, item.length))
})
console.log('newArr4', newArr4)

// 4) Given an array of numbers, first filter out the even numbers and then use map() to square each remaining number. Return the resulting array
let arr5 = [1,2,3,5,6]

let newArr5 = arr5.filter((item) => item % 2 === 0).map((item, index) => {
    if(item % 2 === 0){
        return item * item
    }
})

console.log(newArr5)

// 5) Write a function that takes an array of strings and uses map() to create a new array where each string is prefixed with its index in the original array (e.g., "0: string1", "1: string2").
let arr6 = ['hello', 'world']



let newArr6 = arr6.map((item , index) => {
    return `${index}: ${item}`
})
console.log('newArr6',newArr6)

//filter

// 1) Given an array of numbers, use the filter() method to return a new array containing only the numbers that are both even and greater than 2.
let arr7 = [1,2,3,4,5,6]
let newArr7 = arr7.filter((item) => item % 2 === 0 && item > 2)

console.log(arr7)
console.log(newArr7)

// 2) Given an array of arrays (e.g., [[1, 2], [3, 4, 5], [6]]), use the filter() method to return a new array containing only the sub-arrays that have more than 2 elements
let arr8 = [[1, 2], [3, 4, 5], [6]]
let newArr8 = arr8.filter((item) => item.length > 2)
console.log(newArr8)

// 3) Given an array of arrays of numbers, use filter() to return a new array containing only the sub-arrays where all elements are positive numbers. You may need to use the every() method within your filter() callback
let arr9 = [[1, 2], [2, 4, 6], [6, 8, 10], [5, 7]];
const isEven = (arr) => {
    return arr %2 === 0
}
let newArr9 = arr9.filter((item) => item.every(isEven))
console.log(newArr9)
