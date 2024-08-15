console.log('check')

let arr = new Array(1,2,3,4)

// 1) adding element to end of array 

// modifies the same array
arr.push(5)
arr[arr.length] = 6

console.log(arr)


//creates the new array
let newArr = arr.concat(7)
console.log(newArr)

let newArr1 = [...newArr, 8]
console.log(newArr1)

// 2) Adding element to beginning of array

// modifies the same array

let arr2 = [1,2,3,4]
arr2.unshift(0)
console.log(arr2)

//creates the new array

let arr3 = [1,2,3,4,5]
let newArr3 = [0, ...arr3]
console.log(newArr3)

let arr4 = [1,2,3,4]
let newArr4 = [0].concat(arr4)
console.log(newArr4)