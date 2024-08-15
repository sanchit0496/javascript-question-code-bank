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

// 3) remove element from end of array 
let arr5 = [1,2,3,4]
let removedElement = arr5.pop()
console.log(arr5)
console.log(removedElement)

let  arr6 = [1,2,3,4]
arr6.length = arr6.length -1
console.log(arr6)

let  arr7 = [1,2,3,4]
let removedElement1 = arr7.splice(-1, 1)
console.log(arr7)
console.log(removedElement1)

let arr8 = [1,2,3,4]
let newArr8 = arr8.slice(0, arr8.length-1)
console.log(newArr8)

// 4) Remove an element from the beginning of an array.

let arr9 = [1,2,3,4]
let removedElement9 = arr9.shift()
console.log('arr9', arr9)
console.log('removedElement9', removedElement9)

let arr10 = [1,2,3,4]
let removedElement10 = arr10.splice(0,1)
console.log(arr10)
console.log(removedElement10)

let arr11 = [1,2,3,4]
let newArray11 = arr11.slice(1)
console.log(newArray11)

let arr12 = [1,2,3,4]
let newArr12 = arr12.filter((item, index) => index !== 0)
console.log(newArr12)

// 5) Modify an existing element in an array.
let arr13 = [1,2,3,4]
arr13[1] = 100
console.log(arr13)

let arr14 = [1,2,3,4]
let newArr14 = arr14.map((item, index) => {
    if(item === 2){
        return 100
    }
    return item
})
console.log(newArr14)

let arr15 = [1,2,3,4]
for(let i = 0 ; i < arr15.length; i++){
    if(i === 1){
        arr15[i] = 100
    }
}
console.log(arr15)