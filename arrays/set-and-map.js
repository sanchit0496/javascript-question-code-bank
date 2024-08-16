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


// map


// 1) Task: Create a Map and set the key-value pairs ('a', 1), ('b', 2), and ('c', 3). Then retrieve the value associated with key b.
let mapp = new Map([
    ['a', '1'],
    ['b', '2'],
    ['c', '3'],
])
console.log(mapp.get('b'))

// 2) Task: Create a Map with key-value pairs ('name', 'John'), ('age', 30). Update the value for the key age to 31.
let person = new Map([
    ['name', 'hello'],
    ['age', '20'],
])

person.set('age', '10')
console.log(person)

// 3) Task: Create a Map with key-value pairs ('apple', 'red'), ('banana', 'yellow'), and ('grape', 'purple'). Delete the key-value pair for apple.
let fruits = new Map([
    ['apple', 'red'],
    ['banana', 'yellow'],
    ['grape', 'purple'],
])
fruits.delete('apple')
console.log(fruits)

// 4) Task: Create a Map with key-value pairs ('x', 10), ('y', 20), ('z', 30). Check if the key y exists in the Map.
let keyVal = new Map([
    ['x', 20],
    ['y', 10]
])
console.log(keyVal.has('y'))

// 5) Task: Create a Map with key-value pairs ('1', 'one'), ('2', 'two'), ('3', 'three'). Iterate over the Map and concatenate all keys and values into a string.
let keyVal1 = new Map([
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'three'],
    ['4', 'four']
])

let str = ''

for(let [key, value] of keyVal1){
    str += `${key}${value}`
}
console.log(str)

// 6) Task: Create a Map with key-value pairs ('a', 1), ('b', 2), and ('c', 3). Return the size of the Map.

console.log(keyVal1.size)

// 7) Task: Create a Map with key-value pairs ('dog', 'bark'), ('cat', 'meow'), ('cow', 'moo'). Convert the Map to an array of key-value pairs.
let keyVal2 = new Map([
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'three'],
    ['4', 'four']
])
let arr12 = []
for([item, key] of keyVal2){
    arr12.push([item, key])
}
console.log(arr12)

// 8) Task: Given an array of key-value pairs [ ['name', 'Alice'], ['age', 25], ['city', 'NY'] ], convert the array to a Map.
let arr14 = [ ['name', 'Alice'], ['age', 25], ['city', 'NY'] ]
let hm = new Map()
arr14.forEach(([key, value]) => {
    hm.set(key,value)
})
console.log(hm)

let hm1 = new Map(arr14)
console.log(hm1)

// 9) Task: Create two Map objects: one with key-value pairs ('a', 1) and ('b', 2) and the other with ('b', 3) and ('c', 4). Merge the two maps into a new map, with the second map's values taking precedence in case of key collisions.

let keyVal4 = new Map([
    ['a', '1'],
    ['b', '2']
])

let keyVal5 = new Map([
    ['b', '3'],
    ['c', '4']
])

let hm6 = new Map([...keyVal4, ...keyVal5])
console.log(hm6)

// 10) Task: Create a Map with key-value pairs ('one', 1), ('two', 2), ('three', 3). Remove all entries from the Map.

let keyVal6 = new Map([
    ['b', '3'],
    ['c', '4']
])
keyVal6.clear()
console.log(keyVal6)