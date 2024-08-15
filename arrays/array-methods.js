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

//reduce 

// 1) Write a function that takes an array of numbers and uses the reduce() method to return the sum of all the elements in the array
let arr10 = [1,2,3,4,5]
let sum = arr10.reduce((accumulator, item) => item + accumulator, 0)
console.log(sum)

// 2) Given an array of strings, use reduce() to create an object that counts the occurrences of each string in the array
let arr11 = ['hello', 'world', 'hello', 'hey', 'hi']
let newArr11 = arr11.reduce((accumulator, item) => {
    if(accumulator[item]){
        accumulator[item] = accumulator[item] + 1
    }else{
        accumulator[item] = 1
    }
    return accumulator
}, {})

console.log(newArr11)

// 3) Given an array of arrays (e.g., [[1, 2], [3, 4], [5, 6]]), use reduce() to flatten it into a single array (e.g., [1, 2, 3, 4, 5, 6]).
let arr12 = [[1, 2], [3, 4], [5, 6]]
let newArr12 = arr12.reduce((accumulator, item) => accumulator.concat(item), [])
console.log(newArr12)

// 4) Write a function that takes an array of numbers and uses reduce() to find and return the maximum value in the array.
let arr13 = [1,2,4,5,9,8]
let num = arr13.reduce((accumulator, item) => {
    return item > accumulator ? item: accumulator
} , 0)
console.log(num)

//5) Given an array of objects where each object has a type property (e.g., { type: 'fruit', name: 'apple' }), use reduce() to group the objects by their type property, returning an object where the keys are the types and the values are arrays of objects of that type.
let arr14 = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' },
    { type: 'fruit', name: 'orange' },
    { type: 'vegetable', name: 'broccoli' },
    { type: 'meat', name: 'chicken' }
];

let newArr14 = arr14.reduce((accumulator, item) => {
    let type = item.type
    
    if(!accumulator[type]){
        accumulator[type] = []
    }
        
    accumulator[type].push(item)
    
    return accumulator
}, {})

console.log('newArr14', newArr14)

//forEach

// 1) Given an array of numbers, use forEach() to print each number to the console.
let arr15 = [1,2,3,4,5]
arr15.forEach((item) => {
    console.log(item)
})

// 2) Write a function that takes an array of numbers and uses forEach() to calculate and return the sum of all elements in the array.
let sum1 =  0;
arr15.forEach((item) => {
    sum1 += item
})
console.log(sum)

// 3) Given an array of strings, use forEach() to modify each string by appending "!" to the end of each string. The original array should be modified directly
let strArray = ['hello', 'world']
strArray.forEach((item, index) => {
    strArray[index] = `${item}!`
})
console.log(strArray)

// 4) Given an array of words, use forEach() to create an object that counts how many times each word appears in the array
let arr16 = ['hello', 'world', 'hello', 'hey', 'hi']
let obj = {}
arr16.forEach((item) => {
    if(obj[item]){
        obj[item] = obj[item] + 1
    }else{
        obj[item] = 1
    }
})
console.log(obj)

// 5) Given an array of numbers, use forEach() to print only the even numbers to the console.
let arr17 = [1,2,3,4,5]
arr17.forEach((item) => {
    if(item % 2 === 0){
        console.log(item)
    }
})

//find 
console.log('the find questions here')

// 1) Given an array of numbers, use find() to return the first even number in the array. If no even number is found, return undefined.
let arr18 = [1,2,3,4,5]
let newArr18 = arr18.find((item) => item % 2 == 0) 
console.log(newArr18)

// 2) Given an array of objects representing people, where each object has properties name and age, use find() to return the first object where the person's age is greater than 10
let arr19 = [
    {name: 'Person 02', age: 10},
    {name: 'Person 04', age: 8},
    {name: 'Person 03', age: 21},
    {name: 'Person 05', age: 9},
    {name: 'Person 01', age: 20},
    {name: 'Person 06', age: 22}
]
let newArr19 = arr19.find((item) => item.age > 10)
console.log(newArr19)


 // 3) Write a function that takes an array of strings and a target substring, and uses find() to return the first string that contains the target substring
let stringsArray = ["apple pie", "banana split", "cherry tart", "blueberry muffin"];
let substring = "berry";
let answer = stringsArray.find((item) => item.includes(substring))
console.log(answer)

// 4) Given an array of arrays, use find() to return the first sub-array that contains the number 5. If no such sub-array is found, return undefined
let arr20 = [[1, 2], [3, 4], [5, 6]]
let newArr20 = arr20.find((item) => item.includes(5))
console.log(newArr20)

// 5) Given an array of numbers representing student IDs, use find() to return the first missing ID
let arr21 = [100, 101, 102, 103,105]
let newArr21 = arr21.find((item, index) => {
    return arr21[index +1] - arr21[index] > 1
}) + 1
console.log(newArr21)

//findIndex function
 
// 1) Given an array of numbers, use findIndex() to return the index of the first even number in the array. If no even number is found, return -1.
let checkEven = (num) => {
    return num % 2 === 0
}

let arr22 = [1,2,3,4]
let evenIndex= arr22.findIndex(checkEven)
console.log(evenIndex)

// 2) Given an array of objects representing products, where each object has properties id, name, and price, use findIndex() to return the index of the first product with a price greater than $50

let products = [
    { id: 1, name: 'Product A', price: 30 },
    { id: 2, name: 'Product B', price: 60 },
    { id: 3, name: 'Product C', price: 40 }
];
const checkPrice = (product) => {
    return product.price > 50
}

let productIndex = products.findIndex(checkPrice)
console.log(productIndex)

// 3) Question: Given an array of student IDs sorted in ascending order, use findIndex() to find the index where a student ID is missing (e.g., if the array is [100, 101, 103], find the index of the gap where 102 should be).
let studentIDs = [100, 101, 103, 104];
let missingId = studentIDs.findIndex((item, index) => {
    console.log(item, index)
    return studentIDs[index + 1] - studentIDs[index] > 1
}) +1
console.log(missingId)



// 4) Write a function that takes an array of strings and a target substring, and uses findIndex() to return the index of the first string that contains the target substring
let stringsArray1 = ["apple pie", "banana split", "cherry tart", "blueberry muffin"];
let substring1 = "berry";
let retVal = stringsArray1.findIndex((item) => {
    return item.includes(substring1)
})
console.log(retVal)

// 5) Given an array of numbers, use findIndex() to return the index of the first number that is both greater than 10 and divisible by 3. If no such number is found, return -1
let numbers = [2, 4, 12, 15, 8];
let retVal1 = numbers.findIndex((item)=> {
    return item > 10 & item % 3 === 0
}) 
 console.log(retVal1)


// some method

// 1) Given an array of numbers, use some() to determine if the array contains any negative numbers. Return true if there is at least one negative number, otherwise return false
const checkNegative = (number) => {
    return number < 0
}
let numbers1 = [2, 5, -3, 8, 10];
let retVal2 = numbers1.some(checkNegative)
console.log(retVal2)

// 2) Question: Given an array of strings, use some() to check if any of the strings contain the word "JavaScript". Return true if at least one string contains the word, otherwise return false.
let phrases = ["I love coding", "JavaScript is great", "Python is cool"];
let retVal3 = phrases.some((item, index) => {
    return item.includes('JavaScript')
})
console.log('retVal3',retVal3)

// 3) Question: Given an array of strings, use some() to check if any of the strings are empty (i.e., ""). Return true if there is at least one empty string, otherwise return false.
let strings = ["hello", "world", "", "JavaScript"];
let retVal4 = strings.some((item ,index) => {
    return item.length === 0
})
console.log(retVal4)

// 4) Question: Write a function that takes an array of numbers and uses some() to check if there is at least one prime number in the array. Return true if there is, otherwise return false.
let numbers2 = [4, 6, 8, 9, 11];

function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false; 
    }

    return true; 
}


let retVal5 = numbers2.some(isPrime)
console.log(retVal5)

// every 

// 1) Given an array of arrays, use every() to check if all the inner arrays contain the number 7. Return true if they all do, otherwise return false
let arrays = [[7, 2, 3], [4, 7, 9], [7, 10, 12]];
let retVal6 = arrays.every((item) => item.includes(7))
console.log(retVal6)

// 2) Question: Given an array of objects where each object has a settings property, which is itself an object, use every() to check if all settings objects have a theme property as light. Return true if they all do, otherwise return false.
let users = [
    { name: 'Alice', settings: { theme: 'light' } },
    { name: 'Bob', settings: { theme: 'light' } },
    { name: 'Charlie', settings: { theme: 'light' } }
];

let retVal7 = users.every((item) => {
    return item.settings.theme === 'light'
})
console.log(retVal7)

// 3) Question: Given an array of arrays of strings, use every() to check if all the inner arrays have exactly three elements. Return true if they all do, otherwise return false.
let wordGroups = [
    ["apple", "banana", "cherry"],
    ["dog", "elephant", "frog"],
    ["giraffe", "hippo", "iguana"]
];
let retVal8 = wordGroups.every((item) => item.length ===3)
console.log(retVal8)

// 4) Question: Given an array of numbers, use every() to check if all numbers are divisible by 5. Return true if they all are, otherwise return false.

let numbers4 = [10, 20, 30, 50];
let retVal9 = numbers4.every((item) => item % 5 === 0)
console.log(retVal9)

// 5) Question: Given an array of arrays, where each sub-array contains numbers, use every() to check if all numbers within each sub-array are unique within that sub-array. Return true if they are, otherwise return false.
let numberGroups = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let retVal10 = numberGroups.every((item) => {
    let newSet = new Set(item)
    return newSet.size === item.length
})
console.log(retVal10)
