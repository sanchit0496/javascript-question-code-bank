console.log('hello')


// Array Destructuring:

// 1) Given an array [10, 20, 30, 40], destructure the array into individual variables a, b, c, and d.
let arr = [10, 20, 30, 40]
let [a,b,c,d] = arr
console.log(a,b,c,d);

// 2) Given an array [1, 2, 3, 4, 5], use destructuring to assign the first and third elements to variables x and y, while skipping the second element.
let arr2 = [1, 2, 3, 4, 5]
let [x,,y] = arr2
console.log(x, y);


// Array Spread Operator Here

// 1) Use the spread operator to create a copy of an array [1, 2, 3, 4], and then modify the copy without affecting the original array.
let arr4 = [1, 2, 3, 4]
let copyArr4 = [...arr4]
copyArr4[0] = 10
console.log(arr4, copyArr4);

// 2) Merge two arrays [1, 2] and [3, 4, 5] into a single array using the spread operator.
let arr5 = [1,2]
let arr6 = [1,2,3,4]
let arr7 = [...arr5, ...arr6]
console.log(arr7);


// Multi-dimensional Arrays

// 1) Create a 2D array representing a 3x3 matrix, and access the element in the second row and third column.

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
console.log(matrix[1][2]);

// 2) Flatten a 2D array [[1, 2], [3, 4], [5, 6]] into a single array using a method.

let matrix1 = [[1, 2], [3, 4], [5, 6]];
console.log(matrix1.flat());


// Handling Duplicates
 
// 1) Given an array [1, 2, 3, 2, 4, 3, 5], write a function to remove all duplicates.
let arr8 = [1, 2, 3, 2, 4, 3, 5]
console.log([...new Set([...arr8])]);


// 2) Find all the duplicate elements in an array [1, 2, 3, 2, 4, 3, 5, 4].
let arr9 = [1, 2, 3, 2, 4, 3, 5, 4]
let or = []
let dup = []
arr9.filter((item) => {
    if(or.includes(item)){
        dup.push(item)
    }else{
        or.push(item)
    }
    return dup
})
console.log(dup)


// Array Methods Chaining Here

// 1) Given an array of numbers [1, 2, 3, 4, 5, 6], use chaining of filter, map, and reduce to first filter out even numbers, then square the remaining numbers, and finally sum them.
let arr10 = [1, 2, 3, 4, 5, 6];
let temp = arr10.filter((item) => item %2 !== 0).map((item) => item * item).reduce((accumulator, item) => accumulator + item, 0)
console.log(temp)

// 2) Given an array of strings ["apple", "banana", "orange", "apple", "banana"], chain filter and reduce to count how many times the string "banana" appears in the array
let fruits = ["apple", "banana", "orange", "apple", "banana"]
let thebanana = fruits.filter((item) => item === 'banana').reduce((count) => count + 1, 0)
console.log(thebanana)


// Custom Sorting Functions Here

// 1) Given an array of objects representing people with name and age properties, write a custom sorting function that sorts the array by age in ascending order.
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
  ];
console.log(people.sort((a, b) => a.age - b.age));


// 2) Sort an array of strings ["apple", "Banana", "orange", "banana"] in a case-insensitive alphabetical order.
let fruits4 = ["apple", "Banana", "orange", "banana"];
console.log(fruits4.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())))


// Intersection and Union Here

// 1) Find the intersection of two arrays [1, 2, 3, 4] and [3, 4, 5, 6].
let arr11 = [1, 2, 3, 4];
let arr12 = [3, 4, 5, 6];

let temp2 = arr11.filter((item) => arr12.includes(item))
console.log(temp2)

// 2) Find the union of two arrays [1, 2, 3] and [3, 4, 5].
let arr14 = [1, 2, 3];
let arr24 = [3, 4, 5];
let temp4  = [...new Set([...arr14, ...arr24])]
console.log(temp4)


// Finding Missing Elements Here 

// 1) Given an array of consecutive integers from 1 to 10 but with one number missing, write a function to find the missing number.
let arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let sum = arr15.reduce((accumulator, item) => accumulator + item, 0)
console.log(sum);

let arr16 = new Array(10).fill().map((iten, index) => index +1)
let sum1 = arr16.reduce((accumulator, item) => accumulator + item, 0)

console.log(sum1 - sum)


// 2) Find the two missing numbers in an array of consecutive integers from 1 to 10.
let arr18 = [1, 2, 3, 4, 5, 6, 8, 10];
let arr19 = new Array(10).fill().map((_,index) => index +1)
let arr20 = arr19.filter((item) => !arr18.includes(item))
console.log(arr20)



// Rotation of Arrays Here

// 1) Rotate an array [1, 2, 3, 4, 5] to the right by 2 positions.
let arr21 = [1, 2, 3, 4, 5];
let arrPart1 = arr21.slice(0, arr21.length - 2)
let arrPart2 = arr21.slice(arr21.length - 2, arr21.length)
console.log([...arrPart2, ...arrPart1])

// 2) Rotate an array [10, 20, 30, 40, 50] to the left by 3 positions.
let arr22 = [10, 20, 30, 40, 50]

let arrPart4 = arr22.slice(0, 3)
let arrPart5 = arr22.slice(3,5)
console.log([...arrPart5, ...arrPart4]);