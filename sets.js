// 1. Creating a Set
// -----------------
// Basic creation

const emptySet = new Set();
console.log("Empty Set:", emptySet);

// Create from an array
const numbersSet = new Set([1, 2, 3, 4, 5]);
console.log("Set from array:", numbersSet);

// Sets only store unique values
const duplicatesSet = new Set([1, 1, 2, 2, 3, 3]);
console.log("Set with duplicates removed:", duplicatesSet);


// 2. Adding and Deleting Elements 
// ---------------------------------
// Adding elements
const fruitSet = new Set();
fruitSet.add("apple");
fruitSet.add("banana");
fruitSet.add("orange");
console.log("Fruit set after adding elements: ", fruitSet);


// Adding duplicates has no effect: 
fruitSet.add("apple");
console.log("Fruit set after adding duplicates: ", fruitSet);


// Deleting elements:
fruitSet.delete("banana");
console.log("Fruit set after deleting banana", fruitSet);


// Clear all elements: 

const tempSet = new Set([1, 2, 3]);
tempSet.clear();
console.log("Set after clearing: ", tempSet);

// 3. checking for elemets 
// ------------------------

const colorSet = new Set(['red', 'green', 'blue']);
console.log("Does colorSet have 'red'? ", colorSet.has('red')); // true
console.log("Does colorSet have 'yellow'?", colorSet.has("yellow")); // false


// 4. Set Size 
// ------------
console.log("Size of colorSet:", colorSet.size); //3


// 5. Iterating through a Set 
// --------------------------
// Using forEach 

console.log("Iterating with forEach:");
colorSet.forEach(color => {
    console.log(color);
});

// Using for...of 

console.log("Iterating with for...of:");
for (const color of colorSet) {
    console.log(color);
}

//  6. Converting between Sets and Arrays
// --------------------------------------
// Set to Array 

const setToArray = [...colorSet];
console.log("Set converted to array:", setToArray);

// Array to Set (remove duplicates);
const arrayToSet = new Set(["apple", "banana", "apple", "orange"]);
console.log("Array converted to set:", arrayToSet);

// 7. Set Operations
// -----------------
// Union of Sets (A U B)

function union(setA, setB) {
    return new Set([...setA, ...setB]);
}


// Intersection of Sets ( A n B)

function intersection(setA, setB) {
    return new Set([...setA].filter(element => !setB.has(element)));
}


// Difference of Sets (A-B)
function difference(setA, setB) {
    return new Set([...setA].filter(element => !setB.has(element)));
}

// Example Usage: 

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

console.log("Set A: ", setA);
console.log("Set B:", setB);
console.log("Union:", union(setA, setB));
console.log("Intersection", intersection(setA, setB));
console.log("Difference (A-B):", difference(setA, setB));


// 8. Practice Exercies 
// ---------------------

// Excerise 1: Count unique characters in a strings 

function countUniqueChars(str) {
    return new Set(str).size;

}

console.log("Unique characters in 'hello world': ", countUniqueChars('hello world'))

// Exercise 2: Find unique elements from multiple arrays: 

function findUniqueElements(...arrays) {
    return [...new Set(arrays.flat())]
}

console.log("Unique elements:", findUniqueElements([1, 2, 3], [4, 5, 6], [7, 8, 9]));


// Exercise 3: Remove duplicates while preserving order: 

function removeDuplicates(array) {
    return [...new Set(array)];
}

console.log("Array with duplicates removed: ", removeDuplicates([1, 2, 2, 3, 4, 4, 5]))


// Exercise 4: Check if two arrays have any common elements: 

function hasCommonElements(array1, array2) {
    const set1 = new Set(array1);
    return array2.some(item => set1.has(item));

}

console.log("Arrays [1,2,3] and [4,5,6] have common elements:", hasCommonElements([1, 2, 3], [4, 5, 6]));
console.log("Arrays [1,2,3] and [3,4,5] have common elements:", hasCommonElements([1, 2, 3], [3, 4, 5]));


// Exercise 5: Implement a function to find all common elements in multiple arrays

function findCommonElements(...arrays) {

    // console.log(arrays.length); 3 
    if (arrays.length === 0) return new Set();
    if (arrays.length === 1) return new Set(arrays[0]);

    const result = new Set(arrays[0]);

    for (let i = 1; i < arrays.length; i++) {
        const currentSet = new Set(arrays[i]);
        
        for (const element of result) {
            if (!currentSet.has(element)) {
                result.delete(element);
            }
        }
    }

}


console.log("Common elements:", findCommonElements([1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]));