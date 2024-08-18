// Create an array in JavaScript
const arr = ['a','b']
console.log(arr)

const arr1 = new Array('c', 'd')
console.log(arr1)

const arr2 = []
arr2.push('hello')
arr2.push('world')
console.log(arr2)

const str = 'hello'
const arr3 =  Array.of(str)
console.log(arr3)

const str1 = 'hello world'
const arr4 =  Array.from(str1)
console.log('arr4',arr4)

const arr5 = [...'hello']
console.log(arr5)

const arr6 = new Array(5)
console.log(arr6)

const arr7 = new Array(5).fill('hello')
console.log(arr7)


// create an array of number from 1 to 100 
const arr8 = new Array(100).fill().map((item,index) => index + 1)
console.log(arr8)