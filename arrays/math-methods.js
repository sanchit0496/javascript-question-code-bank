console.log('hello')

// Math.random()

// 1) Question 1: Generate a Random Decimal Between 0 and 1
console.log(Math.random())

// 2) Question 2: Random Number Between Two Values
let minValue = 1;
let maxValue = 10;

let randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
console.log(randomNumber);

// 3) Question 4: Random Array Element
let arr =[1,2,3,4,5,6]
let randomNumber1 = Math.floor(Math.random() * ((6-1) +1))
console.log(arr[randomNumber1]);

// Math.floor()

// 1) Task: Given an array of product prices with decimals, use Math.floor to round down each price to the nearest whole number.
let arr1 = [12.22,23.42,90.22,56.88]
let arr2 = arr1.map((item) => Math.floor(item))
console.log(arr2)

// 2) Task: Write a function that calculates a 10% discount on an array of prices, then rounds down the discounted prices to the nearest whole number.
let arr3 = [12.22,23.42,90.22,56.88]
let arr4 = arr3.map((item) => Math.floor(item * 90/100))
console.log(arr4)

// Math.ceil()

// 1) Task: Given an array of prices with decimals, use Math.ceil to round up each price to the nearest whole number.
let arr5 = [12.22,23.42,90.22,56.88]
let arr6 = arr5.map((item) => Math.ceil(item))
console.log(arr6);

// 2) Task: Given a list of items with their prices, calculate the total cost and round it up to the nearest whole number using Math.ceil.
let totalSum = arr5.reduce((accumulator, item) => {
    return item + accumulator
},0)
console.log(Math.ceil(totalSum))

// 3) Task: Write a function that rounds up a number to the nearest tenth using Math.ceil.
let number = 4.23
let retVal = number* 100
console.log(Math.ceil(retVal /10))

// Math.round()

// 1) Round scores
let arr7 = [62.22,92.42,20.12,96.22]
let arr8 = arr7.map((item) => Math.round(item))
console.log(arr8);

let totalMarks = arr7.reduce((accumulator, item) => {
    return accumulator += item
}, 0)
console.log(Math.round(totalMarks/arr7.length))
 
// Math.max()

// 1) Question 1: Find Maximum Value
let numbers = [10, 25, 30, 8];
console.log(Math.max(...numbers))

// 2) Task: Write a function that takes two numbers as arguments and returns the larger of the two using Math.max.
let a = 10;
let b = 20;
console.log(Math.max(a,b))


// Math.min()

// 1) Task: Given an array of numbers, use Math.min to find the minimum value in the array.

let numbers1 = [15, 7, 22, 5];
console.log(Math.min(...numbers1))

// 2) Task: Write a function that takes two numbers as arguments and returns the smaller of the two using Math.min.
let a1 = 12;
let b1 = 9;
console.log(Math.min(a1,b1))

// Math.abs()

// 1) Task: Given an array of numbers, calculate the absolute difference between each number and a reference value, using Math.abs.
let numbers2 = [10, -20, 15, -25];
let resultArr = numbers2.map((item) => Math.abs(item))
console.log(resultArr)

// 2) Task: Write a function that calculates the distance between two points on a number line using Math.abs.
let pointA = 5;
let pointB = 15;

console.log(Math.abs(pointB - pointA))

// 3) Task: Given an array of daily temperature readings, calculate the absolute difference between each day's temperature and the average temperature.
let temperatures = [70, 75, 80, 65];
let averageTemperature = 72.5;
let resultArr1 = temperatures.map((item) => Math.abs(averageTemperature - item))
console.log(resultArr1)

// Math.pow()

// 1) Question 1: Calculate Powers of a Base
let base = 2;
let exponent = 3;
console.log(Math.pow(base,exponent))

// 2) Task: Given an array of numbers, use Math.pow to return an array of the squares of those numbers.
let numbers4 = [1, 2, 3, 4];
let numbers5 = numbers4.map((item) => Math.pow(item,2))
console.log(numbers5)

// Math sqrt()

// 1) Task: Given an array of positive numbers, use Math.sqrt to return an array of the square roots of those numbers.
let numbers6 = [4, 16, 25];
let numbers7 = numbers6.map((item) => Math.sqrt(item))
console.log(numbers7)

// 2) Task: Given an array of numbers, use Math.sqrt to calculate the square root of each number, then sort the resulting values in ascending order.
let numbers8 = [9, 4, 16, 1];
let numbers9 = numbers8.map((item) => Math.sqrt(item))
console.log(numbers9.sort())

// Math trunc()

// 1) Task: Write a function that takes an array of floating-point numbers and uses Math.trunc to truncate each number to its integer part.
let numbers10 = [4.9, 16.7, 25.3];
let number11 = numbers10.map((item) => Math.trunc(item))
console.log(number11)

// 2) Task: Given an array of prices with decimals, use Math.trunc to remove the fractional part of each price.
let prices = [10.99, 20.49, 30.99];
let prices1 = prices.map((item) => Math.trunc(item))
console.log(prices1)