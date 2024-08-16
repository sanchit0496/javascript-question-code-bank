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

// weakset

// 1) Task: Create a WeakSet and add three different object references to it. Check if one of the objects is in the WeakSet.

let weakset = new WeakSet();

// Create object references
let obj1 = { name: "Object 1" };
let obj2 = { name: "Object 2" };
let obj3 = { name: "Object 3" };

weakset.add(obj1);
weakset.add(obj2);
weakset.add(obj3);

console.log(weakset.has(obj2));

// 2) Task: Create a WeakSet with two objects, obj1 and obj2. Delete obj1 and check if it is still in the WeakSet.

let weakset1 = new WeakSet();

let obj11 = { name: "Object 1" };
let obj22 = { name: "Object 2" };

weakset.add(obj11);
weakset.add(obj22);
weakset.delete(obj11)

console.log(weakset.has(obj11))

// 3) Task: Try adding a primitive value (like a string or number) to a WeakSet and observe the result.

let weakset2 = new WeakSet();

let obj15 = { name: "Object 1" };  
let obj25 = { name: "Object 2" };
weakset2.add(obj15)
weakset2.add(obj25)
// weakset.add('hello')
console.log(weakset2)
//The operation should throw a TypeError since WeakSet only accepts objects.

// 4) Task: Add the same object reference multiple times to a WeakSet and check if the WeakSet still has only one entry for that object.
weakset2.add(obj25)
console.log(weakset2)
//Expected Output: The WeakSet should still only contain one instance of the object.

// 5) Task: Add an object to a WeakSet, then dereference the object (set it to null). Check if the object still exists in the WeakSet.
let obj35 =  {name: 'Object 3'}
weakset2.add(obj35)

obj35 = null
console.log(weakset2)
//Expected Output: The object should be garbage collected, and the WeakSet should no longer contain it.

// 6)  Task: Attempt to iterate over a WeakSet to list all objects it contains.
// for([key, value] of weakset2){
//     console.log(key)
// }
// TypeError: weakset2 is not iterable


// 7) Task: Create two WeakSet objects with the same object references and check if they are equal.
// Create an object reference
let obj10 = { name: 'Object 1' };
let obj20 = { name: 'Object 2' };

// Create two WeakSet objects
let weakSet11 = new WeakSet();
let weakSet22 = new WeakSet();

// Add the same object references to both WeakSet objects
weakSet11.add(obj10);
weakSet11.add(obj20);

weakSet22.add(obj10);
weakSet22.add(obj20);

console.log(weakSet11.has(obj10) && weakSet22.has(obj10));
console.log(weakSet11.has(obj20) && weakSet22.has(obj20));

// weakmap 


// 1) Task: Create a WeakMap and set key-value pairs where the keys are objects and the values are strings. Retrieve the value for one of the keys.

let key1 = {greet: 'hello'}
let key2 = {greet: 'world'}
let wmp = new WeakMap([
    [key1, 'w1'],
    [key2, 'w2']
])

console.log(wmp.get(key1))

// 2) Task: Create a WeakMap with two key-value pairs. Delete one of the key-value pairs and check if the key still exists in the WeakMap.
wmp.delete(key1)
console.log(wmp)

// 3) Task: Attempt to use a primitive value (like a string or number) as a key in a WeakMap.
// wmp.set(['key3', '2'])
// console.log(wmp)

// 4) Task: Add several key-value pairs to a WeakMap. Check if a specific key exists in the WeakMap.
console.log(wmp.has(key2))

// 5) Task: Add a key-value pair to a WeakMap, then dereference the key object. Check if the key-value pair is still in the WeakMap.

let key3 = {greet: 'hey'}
let key4 = {greet: 'there'}
wmp.set(key3, 'w3')
wmp.set(key4, 'w4')

key4 = null

console.log(wmp)
//The key-value pair should be garbage collected and removed from the WeakMap.


console.log(wmp)
//WeakMap does not have a size property, so this operation is not applicable.