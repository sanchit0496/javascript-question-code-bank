console.log('hello')


// Object.keys


// 1) Task: Given an object { name: "Alice", age: 25, city: "New York" }, use Object.keys to get an array of its property names.
let obj = { name: "Alice", age: 25, city: "New York" };
console.log(Object.keys(obj))

// 2) Task: Given a nested object { user: { id: 1, name: "Alice" }, role: "admin" }, use Object.keys to get the top-level keys.
let obj1 = { user: { id: 1, name: "Alice" }, role: "admin" };
console.log(Object.keys(obj1))

// 3) Task: Use Object.keys on an array [1, 2, 3].
let arr = [1, 2, 3];
console.log(Object.keys(arr))

// 4) Task: Given an object { greet: function() {}, name: "Alice" }, use Object.keys to get the keys.
let obj2 = { greet: function() {}, name: "Alice" };
console.log(Object.keys(obj2))


// Object.values

// 1) Task: Given an object { name: "Bob", age: 30, city: "San Francisco" }, use Object.values to get an array of its values.
let obj4 = { name: "Bob", age: 30, city: "San Francisco" };
console.log(Object.values(obj4))

// 2) Task: Given a nested object { user: { id: 1, name: "Bob" }, role: "user" }, use Object.values to get the top-level values.
let obj5 = { user: { id: 1, name: "Bob" }, role: "user" };
console.log(Object.values((obj5)))


// Object.entries

// 1) Task: Given an object { name: "Charlie", age: 35, city: "Chicago" }, use Object.entries to get an array of its [key, value] pairs.
let obj6 = { name: "Charlie", age: 35, city: "Chicago" };
console.log(Object.entries(obj6))

// 2) Task: Dynamically add properties to an object and use Object.entries to retrieve the [key, value] pairs after each addition.

let obj7 = {
    a : '1'
}
obj7.b = '2'

console.log(obj7)
console.log(Object.entries(obj7))

// 3) Task: Given an object { person: { name: "Dave", age: 45 }, city: "Miami" }, use Object.entries to retrieve the top-level [key, value] pairs.
let obj8  = {name: 'hello', address: {street: 'there', road: 12}}
console.log(Object.entries(obj8))

// 4) Task: Use Object.entries on an object that contains both data properties and methods to retrieve the entries.

let obj9 = {
    name: 'hello',
    greet: function(){
        console.log('whatsup')
    } 
}
console.log(Object.entries(obj9))

// Object.assign

// 1) Task: [Modifies the target object] Use Object.assign to merge two objects { a: 1, b: 2 } and { c: 3, d: 4 } into a new object.
let obj10 = {
    'a': 1,
    'b': 2
}

let obj11 = {
    'c': 4,
    'd': 5
}
let obj12 = Object.assign(obj10, obj11)
console.log(obj10)
console.log(obj11)
console.log(obj12)

// 2) Task: [Keep the target object intact only] Use Object.assign to merge two objects { a: 1, b: 2 } and { c: 3, d: 4 } into a new object.
let obj14 = {
    'a': 1,
    'b': 2
}

let obj15 = {
    'c': 4,
    'd': 5
}
let obj16 = Object.assign({},obj14, obj15) // adding extra object ensures that 
console.log(obj14)
console.log(obj15)
console.log(obj16)

// 3) Task: Use Object.assign to copy properties from { b: 3, c: 4 } to { a: 1, b: 2 }, overwriting the property b.

let target = { a: 1, b: 2 };
let source = { b: 3, c: 4 };
console.log(Object.assign(target, source))
// automatically overrides the property b (the source keeps precedence over target)

// 4) Task: Use Object.assign to merge properties from three source objects { a: 1 }, { b: 2 }, and { c: 3 } into one target object.
let target1 = {}
let s1 = {a : '1'}
let s2 = {b : '2'}
let s3 = {c : '3'}
let s4 = {d : '4'}
console.log(Object.assign(target, s1,s2,s3,s4))

// 5) Task: Use Object.assign to create a shallow copy of the object { name: "Alice", age: 25 }.
let obj18 = { name: "Alice", age: 25 };
console.log(Object.assign({}, obj18))



// Object.create

// 1) Task: Use Object.create to create a new object that inherits from a prototype object { greet() { return "Hello"; } }.
 let protoObj = {
    greet: function(){
        return 'hello'
    }
 }
 let obj20 = Object.create(protoObj)
 console.log(obj20.greet())

// 2) Task: Use Object.create to create a new object that inherits from a prototype and also has its own properties { name: "Alice" }.
let proto1 = {
    greet: function(){
        return 'hello'
    }
}
let obj21 = Object.create(proto1, {
    name: {value: 'whatsup'}
})
console.log(obj21)


// 3) Task: Use Object.create(null) to create an object that does not inherit from Object.prototype.
let obj22 = Object.create(null)
obj22.key = 'value'
console.log(obj22)

// Object.freeze

// 1) Task: Use Object.freeze to freeze an object { name: "Alice", age: 30 }, preventing any modifications.
let obj23 = {
    name: 'alice'
}
console.log(obj23); //The empty object {} is logged because console.log only shows own properties of the object
console.log(obj23.name); // it will return "alice" because it is inherited from proto2
Object.freeze(obj23)
obj23.name  = 'a'
console.log(obj23)

// 2) Question 2: Attempt to Add Properties to a Frozen Object
let obj24 = { name: "Alice" };
obj24.age = 12
obj24.greet = 'hello'
Object.freeze(obj24)
obj24.marks = 40
Object.freeze(obj24)
console.log(obj24)

// 3) Question 3: Attempt to Delete Properties from a Frozen Object
delete obj24.greet
console.log(obj24)

// 4) Task: After freezing an object using Object.freeze, check if the object is actually frozen using Object.isFrozen.
console.log(Object.isFrozen(obj24))


//  Object.seal

// 1) Task: Use Object.seal to seal an object { name: "Alice", age: 30 }, preventing new properties from being added but allowing modification of existing properties.
let obj25 = {
    name: 'hello'
}
console.log(obj25)
Object.seal(obj25)
obj25.name ='there'
obj25.marks = 25
console.log(obj25)

// 2) Task: After sealing an object using Object.seal, check if the object is actually sealed using Object.isSealed.
console.log(Object.isSealed(obj25))


// Object.fromEntries

// 1) Task: Use Object.fromEntries to convert an array of key-value pairs [["name", "Alice"], ["age", 30]] into an object.
let entries = [["name", "Alice"], ["age", 30]];
console.log(Object.fromEntries(entries))


// Object.is

// 1) Task: Use Object.is to compare two primitive values 5 and 5.
let a = 5;
let b = 5;
console.log((Object.is(a, b)))

// 2) Task: Use Object.is to compare two different object instances that have the same properties.
let obj26 = { name: "Alice" };
let obj27 = { name: "Alice" };
console.log(Object.is(obj26, obj27))

// 3) Task: Use Object.is to compare an object with itself.
let obj28 = { name: "Alice" };
console.log(Object.is(obj28, obj28))

// 4) Task: Use Object.is to compare "hello" and "Hello".
console.log(Object.is('hello', 'Hello'))


// 4) Task: Use Object.is to compare "hello" and "hello".
console.log(Object.is('hello', 'hello'))


// Object.getPrototypeOf

// 1) Task: Use Object.getPrototypeOf to retrieve the prototype of an object created with Object.create({}).
let proto = {
    greet() {
        return 'hello'
    }
}
let obj29 = Object.create(proto)
let obj29Proto = Object.getPrototypeOf(obj29)
console.log(obj29Proto)


// Object.setPrototypeOf

// 1) Task: Use Object.setPrototypeOf to change the prototype of an object to { greet() { return "Hello"; } }.
let proto2 = {
    greet() {
        return 'hello' 
    }
}
let obj35  = {}
Object.setPrototypeOf(obj35, proto2)

console.log(obj35.greet())