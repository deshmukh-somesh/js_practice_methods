/* 
 * FOREACH() - COMPLETE GUIDE
 * ==========================
 * From Basic Definition to Interview Level
 */

/* 
 * 1. BASIC DEFINITION
 * ==================
 */

// What is forEach()?
// forEach() executes a provided function once for each array element
// It does NOT return a new array (returns undefined)
// It does NOT modify the original array (unless you explicitly do so)

// Syntax: array.forEach(callback(currentValue, index, array), thisArg)

/* 
 * 2. BASIC USAGE
 * =============
 */

const fruits = ['apple', 'banana', 'orange'];

// Simple forEach - just the value
fruits.forEach(fruit => {
    console.log(fruit);
});
// Output: apple, banana, orange

// With index
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// Output: 0: apple, 1: banana, 2: orange

// With all parameters
fruits.forEach((fruit, index, array) => {
    console.log(`${index}: ${fruit} (total: ${array.length})`);
});

/* 
 * 3. CALLBACK FUNCTION PARAMETERS
 * ==============================
 */

// The callback function receives three arguments:
// 1. currentValue - the current element being processed
// 2. index - the index of the current element (optional)
// 3. array - the array forEach was called upon (optional)

const numbers = [10, 20, 30];

numbers.forEach(function(value, index, arr) {
    console.log(`Value: ${value}`);
    console.log(`Index: ${index}`);
    console.log(`Array: [${arr}]`);
    console.log('---');
});

/* 
 * 4. RETURN VALUE - IMPORTANT!
 * ============================
 */

// forEach() ALWAYS returns undefined
const result = [1, 2, 3].forEach(x => x * 2);
console.log("forEach return value:", result); // undefined

// This is different from map()
const mapResult = [1, 2, 3].map(x => x * 2);
console.log("map return value:", mapResult); // [2, 4, 6]

/* 
 * 5. COMMON INTERVIEW QUESTION: FOREACH VS MAP
 * ============================================
 */

console.log("\n=== forEach vs map ===");

const data = [1, 2, 3, 4, 5];

// forEach - for side effects (logging, modifying external variables)
let sum = 0;
data.forEach(num => {
    sum += num; // Side effect - modifying external variable
});
console.log("Sum using forEach:", sum);

// map - for transformation (creating new array)
const doubled = data.map(num => num * 2);
console.log("Doubled using map:", doubled);

// WRONG: Using forEach when you need transformation
const wrongWay = [];
data.forEach(num => {
    wrongWay.push(num * 2); // Anti-pattern!
});

// RIGHT: Use map for transformation
const rightWay = data.map(num => num * 2);

/* 
 * 6. BREAKING OUT OF FOREACH - COMMON GOTCHA
 * ==========================================
 */

console.log("\n=== Breaking forEach ===");

// You CANNOT break or continue in forEach
const largeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// This WON'T work - no break statement allowed
/*
largeArray.forEach(num => {
    if (num === 5) {
        break; // SyntaxError!
    }
    console.log(num);
});
*/

// return only skips current iteration (like continue)
largeArray.forEach(num => {
    if (num % 2 === 0) {
        return; // Skip even numbers
    }
    console.log("Odd number:", num);
});

// If you need to break, use for...of or regular for loop
for (const num of largeArray) {
    if (num === 5) {
        break; // This works!
    }
    console.log("Before 5:", num);
}

/* 
 * 7. THISARG PARAMETER
 * ===================
 */

console.log("\n=== thisArg usage ===");

const calculator = {
    multiplier: 3,
    processNumbers: function(numbers) {
        // Without thisArg - 'this' would be undefined in strict mode
        numbers.forEach(function(num) {
            console.log(num * this.multiplier); // Error or NaN
        }, this); // Pass 'this' as second argument
        
        // With arrow function - 'this' is lexically bound
        numbers.forEach(num => {
            console.log(num * this.multiplier); // Works fine
        });
    }
};

calculator.processNumbers([1, 2, 3]);

/* 
 * 8. MODIFYING ARRAY DURING ITERATION - DANGEROUS!
 * ================================================
 */

console.log("\n=== Modifying array during iteration ===");

// Modifying elements is OK
const modifyElements = [1, 2, 3, 4, 5];
modifyElements.forEach((value, index, arr) => {
    arr[index] = value * 2; // This is fine
});
console.log("Modified elements:", modifyElements);

// Adding/removing elements during iteration is problematic
const problematic = [1, 2, 3, 4, 5];
let iterations = 0;
problematic.forEach((value, index, arr) => {
    iterations++;
    if (value === 3) {
        arr.push(6); // Adding element - forEach won't process it
    }
    console.log(`Iteration ${iterations}: ${value}`);
});
console.log("Final array:", problematic);
console.log("Total iterations:", iterations); // Still 5, not 6

/* 
 * 9. SPARSE ARRAYS BEHAVIOR
 * =========================
 */

console.log("\n=== Sparse arrays ===");

// forEach skips empty slots
const sparseArray = [1, , , 4, , 6];
console.log("Sparse array:", sparseArray);

sparseArray.forEach((value, index) => {
    console.log(`Index ${index}: ${value}`);
});
// Only prints: Index 0: 1, Index 3: 4, Index 5: 6

/* 
 * 10. PERFORMANCE CONSIDERATIONS
 * =============================
 */

console.log("\n=== Performance notes ===");

// forEach is generally slower than for loops but more readable
const bigArray = Array.from({length: 1000000}, (_, i) => i);

// Fastest - traditional for loop
console.time("for loop");
for (let i = 0; i < bigArray.length; i++) {
    // Do something
}
console.timeEnd("for loop");

// Fast - for...of
console.time("for...of");
for (const item of bigArray) {
    // Do something
}
console.timeEnd("for...of");

// Slower but more functional - forEach
console.time("forEach");
bigArray.forEach(item => {
    // Do something
});
console.timeEnd("forEach");

/* 
 * 11. INTERVIEW QUESTIONS & ANSWERS
 * ================================
 */

console.log("\n=== Common Interview Questions ===");

// Q1: What does forEach return?
console.log("Q1: forEach returns:", typeof [1,2,3].forEach(x => x));

// Q2: Can you break out of forEach?
console.log("Q2: No, you cannot break out of forEach. Use for...of instead.");

// Q3: When would you use forEach vs map?
console.log("Q3: Use forEach for side effects, map for transformations");

// Q4: What happens with sparse arrays?
const sparse = [1, , 3];
let count = 0;
sparse.forEach(() => count++);
console.log("Q4: forEach skips empty slots. Count:", count); // 2, not 3

// Q5: Difference between forEach and for...in?
const arr = [10, 20, 30];
arr.customProp = 'hello';

console.log("forEach (values only):");
arr.forEach(val => console.log(val)); // 10, 20, 30

console.log("for...in (keys including inherited):");
for (const key in arr) {
    console.log(key); // 0, 1, 2, customProp
}

/* 
 * 12. BEST PRACTICES
 * =================
 */

console.log("\n=== Best Practices ===");

// ✅ Good: Use forEach for side effects
const users = [{name: 'John', age: 25}, {name: 'Jane', age: 30}];
users.forEach(user => {
    console.log(`Hello, ${user.name}!`); // Side effect: logging
});

// ✅ Good: Use arrow functions for simple operations
[1, 2, 3].forEach(n => console.log(n * 2));

// ✅ Good: Use regular function when you need 'this' context
function Processor() {
    this.prefix = 'Item: ';
    this.process = function(items) {
        items.forEach(function(item) {
            console.log(this.prefix + item);
        }, this); // Pass 'this' context
    };
}

// ❌ Bad: Using forEach when you need a new array
const badTransform = [];
[1, 2, 3].forEach(n => badTransform.push(n * 2)); // Use map instead!

// ✅ Good: Use map for transformations
const goodTransform = [1, 2, 3].map(n => n * 2);

// ❌ Bad: Trying to return values from forEach
const badReturn = [1, 2, 3].forEach(n => n * 2); // Returns undefined!

/* 
 * 13. ADVANCED CONCEPTS
 * ====================
 */

// Async forEach gotcha
console.log("\n=== Async forEach gotcha ===");

const asyncArray = [1, 2, 3];

// This WON'T wait for promises
console.log("Starting async forEach...");
asyncArray.forEach(async (num) => {
    await new Promise(resolve => setTimeout(resolve, 100));
    console.log("Processed:", num);
});
console.log("forEach finished immediately"); // This runs first!

// For async operations, use for...of with await
async function processAsync() {
    console.log("Starting proper async processing...");
    for (const num of asyncArray) {
        await new Promise(resolve => setTimeout(resolve, 100));
        console.log("Properly processed:", num);
    }
    console.log("All async operations complete");
}

// processAsync(); // Uncomment to see the difference

/* 
 * 14. POLYFILL (HOW FOREACH WORKS INTERNALLY)
 * ===========================================
 */

// Simplified forEach implementation
if (!Array.prototype.forEachCustom) {
    Array.prototype.forEachCustom = function(callback, thisArg) {
        if (this == null) {
            throw new TypeError('Array.prototype.forEach called on null or undefined');
        }
        
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        
        const O = Object(this);
        const len = parseInt(O.length) || 0;
        
        for (let i = 0; i < len; i++) {
            if (i in O) { // Skip sparse array holes
                callback.call(thisArg, O[i], i, O);
            }
        }
        
        return undefined; // Always returns undefined
    };
}

// Test the custom implementation
[1, 2, 3].forEachCustom((val, idx) => {
    console.log(`Custom forEach: ${idx} = ${val}`);
});

/* 
 * 15. SUMMARY FOR INTERVIEWS
 * ==========================
 */

console.log("\n=== Interview Summary ===");
console.log("✓ forEach() executes a function for each array element");
console.log("✓ Always returns undefined");
console.log("✓ Cannot break or continue (use return to skip)");
console.log("✓ Use for side effects, not transformations");
console.log("✓ Skips empty slots in sparse arrays");
console.log("✓ Slower than for loops but more readable");
console.log("✓ Doesn't work well with async/await");
console.log("✓ Different from map() - map returns new array, forEach doesn't");
