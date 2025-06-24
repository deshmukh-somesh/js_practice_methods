// Example 1: Flattening a simple nested array

const simpleNested = [1, 2, [3, 4], 5, [6, 7, 8]];
console.log("Example 1 result: ", simpleNested.flat());
// console.log(typeof(simpleNested.flat()));

// Example 2 : Flattening with different depths: 
const deepNested = [1, [2, [3, [4, 5]]]]
console.log("Default depth (1) :", deepNested.flat());
console.log("Depth 2: ", deepNested.flat(2));
console.log("Depth 3:", deepNested.flat(3));
console.log("infinite depth:", deepNested.flat(Infinity));


// Example 3: Handling emtpy slots: 
const sparseArray = [1, 2, , 4, [5, , 7]];
console.log("Original sparse array:", sparseArray);
console.log("After flat():", sparseArray.flat());


// Example 4 : Practical use case  - flattening a dataset: 

const userData = [
    { id: 1, name: "Alice", skills: ["JavaScript", "HTML", "CSS"] },
    { id: 2, name: "Bob", skills: ["Python", "SQL"] },
    { id: 3, name: "Charlie", skills: ["Java", "C++", "Ruby"] }
];


// Get all skills as a single flattened array
const allSkills = userData.map(user => user.skills).flat();
console.log("All skills (flattened):", allSkills);

// Example 5: Alternative using flatMap: (introduced at the same time);
const allSkillsFlatMap = userData.flatMap(user => user.skills);
console.log("All skills (flatMap):", allSkillsFlatMap);


// flatMap() - equivalenet but more efficient:  

// basic flatMap example 
const numbers = [1,2, 3];

/* 
 * SIMPLE DEFINITIONS
 * ==================
 */

// flat() - Makes nested arrays flat
// flatMap() - Transform each element, then make it flat

/* 
 * FLAT() - Simple Definition
 * =========================
 */

// What it does: Removes one or more levels of nesting from an array
// How to use: array.flat(depth)

const nested = [1, [2, 3], [4, [5, 6]]];

console.log("Original:", nested);
console.log("flat():", nested.flat());           // Goes 1 level deep
console.log("flat(2):", nested.flat(2));         // Goes 2 levels deep

// Simple rule: flat() "unpacks" arrays inside arrays

/* 
 * FLATMAP() - Simple Definition  
 * =============================
 */

// What it does: Changes each element, then flattens the result
// How to use: array.flatMap(function)

const numbers = [1, 2, 3];

// Transform each number into an array, then flatten
const result = numbers.flatMap(x => [x, x * 2]);
console.log("flatMap result:", result);  // [1, 2, 2, 4, 3, 6]

// Simple rule: flatMap() = map() + flat()

/* 
 * QUICK COMPARISON
 * ===============
 */

const data = [1, 2, 3];

// Using map + flat (2 steps)
const step1 = data.map(x => [x, x * 10]);     // [[1, 10], [2, 20], [3, 30]]
const step2 = step1.flat();                   // [1, 10, 2, 20, 3, 30]

// Using flatMap (1 step)
const oneStep = data.flatMap(x => [x, x * 10]); // [1, 10, 2, 20, 3, 30]

console.log("Two steps:", step2);
console.log("One step:", oneStep);

/* 
 * WHEN TO USE EACH?
 * ================
 */

// Use flat() when:
// - You have nested arrays that need flattening
// - You want to control how deep to flatten

// Use flatMap() when:  
// - You want to transform AND flatten at the same time
// - You're doing map().flat() - use flatMap() instead

/* 
 * SIMPLE EXAMPLES
 * ==============
 */

// flat() example
const letters = [['a', 'b'], ['c', 'd'], ['e', 'f']];
console.log("Letters flattened:", letters.flat());
// Output: ['a', 'b', 'c', 'd', 'e', 'f']

// flatMap() example  
const words = ['hello', 'world'];
const chars = words.flatMap(word => word.split(''));
console.log("Characters:", chars);
// Output: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

/* 
 * ARRAY.PROTOTYPE.FLAT() DEFINITION
 * ================================
 */

// Syntax: array.flat([depth])
// Parameters:
//   - depth (optional): The depth level specifying how deep a nested array 
//     structure should be flattened. Defaults to 1.
// Returns: A new array with all sub-array elements concatenated into it 
//          recursively up to the specified depth.

/**
 * The flat() method creates a new array with all sub-array elements 
 * concatenated into it recursively up to the specified depth.
 * 
 * @param {number} [depth=1] - The depth level specifying how deep a nested 
 *                             array structure should be flattened
 * @returns {Array} A new flattened array
 */

// Basic definition examples:
const nested = [1, 2, [3, 4, [5, 6]]];

// Default depth of 1
console.log("flat():", nested.flat());
// Output: [1, 2, 3, 4, [5, 6]]

// Specific depth
console.log("flat(2):", nested.flat(2));
// Output: [1, 2, 3, 4, 5, 6]

// Complete flattening
console.log("flat(Infinity):", nested.flat(Infinity));
// Output: [1, 2, 3, 4, 5, 6]

/* 
 * ARRAY.PROTOTYPE.FLATMAP() DEFINITION
 * ===================================
 */

// Syntax: array.flatMap(callback[, thisArg])
// Parameters:
//   - callback: Function that produces an element of the new Array
//   - thisArg (optional): Value to use as 'this' when executing callback
// Returns: A new array formed by applying the callback function to each 
//          element and then flattening the result by one level.

/**
 * The flatMap() method first maps each element using a mapping function, 
 * then flattens the result into a new array. It is identical to a map() 
 * followed by a flat() of depth 1.
 * 
 * @param {Function} callback - Function that produces an element of the new Array
 * @param {*} [thisArg] - Value to use as 'this' when executing callback
 * @returns {Array} A new flattened array
 */

// Basic definition examples:
const numbers = [1, 2, 3, 4];

// Using flatMap to double and create pairs
const doubled = numbers.flatMap(x => [x, x * 2]);
console.log("flatMap result:", doubled);
// Output: [1, 2, 2, 4, 3, 6, 4, 8]

// Equivalent to map().flat()
const mapFlat = numbers.map(x => [x, x * 2]).flat();
console.log("map().flat() equivalent:", mapFlat);
// Output: [1, 2, 2, 4, 3, 6, 4, 8]

/* 
 * FORMAL SPECIFICATIONS
 * ====================
 */

// flat() specification:
Array.prototype.flat = function(depth = 1) {
    // Simplified implementation concept:
    // 1. Convert to object
    // 2. Get length property
    // 3. Iterate through elements
    // 4. If element is array and depth > 0, recursively flatten
    // 5. Otherwise, add element to result
    // 6. Return new array
};

// flatMap() specification:
Array.prototype.flatMap = function(callback, thisArg) {
    // Simplified implementation concept:
    // 1. Map each element using callback
    // 2. Flatten result by depth of 1
    // 3. Return new array
    // Equivalent to: this.map(callback, thisArg).flat(1)
};

/* 
 * KEY CHARACTERISTICS
 * ==================
 */

console.log("\n=== KEY CHARACTERISTICS ===");

// 1. Both methods return NEW arrays (immutable)
const original = [1, [2, 3]];
const flattened = original.flat();
console.log("Original unchanged:", original);
console.log("New flattened array:", flattened);

// 2. flat() removes empty slots in sparse arrays
const sparse = [1, , 3, [4, , 6]];
console.log("Sparse array:", sparse);
console.log("After flat():", sparse.flat());

// 3. flatMap() only flattens one level deep
const deep = [1, 2];
const deepResult = deep.flatMap(x => [x, [x * 2, [x * 3]]]);
console.log("flatMap with nested arrays:", deepResult);

// 4. Type conversion behavior
const mixed = [1, "2", [3, "4"]];
console.log("Mixed types flattened:", mixed.flat());

/* 
 * CALLBACK FUNCTION SIGNATURE FOR FLATMAP
 * =======================================
 */

// The callback function receives three arguments:
// callback(currentValue, index, array)

const letters = ['a', 'b', 'c'];
const withIndex = letters.flatMap((letter, index, array) => {
    console.log(`Processing: ${letter} at index ${index} of array [${array}]`);
    return [letter, letter.toUpperCase()];
});
console.log("With index processing:", withIndex);

/* 
 * ERROR CASES AND EDGE CASES
 * ==========================
 */

console.log("\n=== EDGE CASES ===");

// 1. Non-array elements are preserved
const mixedTypes = [1, "hello", [2, 3], null, undefined, [4]];
console.log("Mixed types flat():", mixedTypes.flat());

// 2. Empty arrays are removed
const withEmpties = [1, [], [2, 3], [], 4];
console.log("With empty arrays:", withEmpties.flat());

// 3. Negative depth is treated as 0
const negativeDepth = [1, [2, [3]]];
console.log("Negative depth flat(-1):", negativeDepth.flat(-1));

// 4. NaN depth is treated as 0
console.log("NaN depth flat(NaN):", negativeDepth.flat(NaN));

/* 
 * BROWSER COMPATIBILITY
 * ====================
 */

console.log("\n=== COMPATIBILITY ===");
console.log("Both methods were introduced in ES2019 (ES10)");
console.log("Supported in:");
console.log("- Chrome 69+ (2018)");
console.log("- Firefox 62+ (2018)");
console.log("- Safari 12+ (2018)");
console.log("- Edge 79+ (2020)");
console.log("- Node.js 11+ (2018)");

// Polyfill check
if (!Array.prototype.flat) {
    console.log("flat() not supported - polyfill needed");
}
if (!Array.prototype.flatMap) {
    console.log("flatMap() not supported - polyfill needed");
}
