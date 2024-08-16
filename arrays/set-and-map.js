console.log('hello')

// set

// 1) Question 1: Add Unique Elements to a Set
let arr = [1,2,2,3,4,5,5]
let set = new Set([...arr])
console.log(set)

// 2) Question 2: Remove an Element from a Set
set.delete(1)
console.log(set)

// 3) Question 3: Check the Presence of an Element
console.log(set.has(2))

// 4) Question 4: Iterate Over a Set
set.forEach((item)=> console.log(item))

// 5) Question 5: Convert a Set to an Array
let arr1 = [...set]
console.log(arr1)

// 6) Task: Create two Set objects, one containing [1, 2, 3, 4] and the other containing [3, 4, 5, 6]. Find the intersection of these two sets.
let s1 = new Set([1,2,3,4])
let s2 = new Set([3, 4, 5, 6])

let s3 = new Set([...s1].filter((item) => s2.has(item)))
console.log(s3)

// 7) Task: Create two Set objects, one with [1, 2, 3] and the other with [3, 4, 5]. Find the union of these two sets.
let s4 = new Set([1,2,3])
let s5 = new Set([3, 4, 5])
console.log(new Set([...s4, ...s5]))

// 8) Question 8: Find the Difference Between Two Sets
let s6 = new Set([1,2,3,4])
let s7 = new Set([3, 4, 5,6])
let s8 = new Set([...s6].filter((item) => !s7.has(item)))
console.log(s8)

// 9) Question 9: Remove All Elements from a Set
s8.clear()
console.log(s8)

// 10) Question 10: Compare Two Sets for Equality
let s9 = new Set([1,2,3,4,5])
let s10 = new Set([1,2,4,5,3])
console.log([...s9].every((item) => s10.has(item)) && s9.size === s10.size)


