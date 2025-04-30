// Js spread operator (...)
// the spread operator(...) is a powerful feature in js, 
// that allows you to expand or 'sprea' an iterable (like an array or object) 
// into individual elements.

// Example 1: Array Combination: 

const breakfast = ['eggs', 'toast', 'coffee'];
const lunch = ['sandwich', 'soup', 'juice'];


// Create an array called 'meals' that contains all items from both arrays
const meals = [...breakfast, ...lunch];

console.log(meals);


// Example 2: Copying and Extending Arrays

const originalScores = [85, 92, 78, 90];

const updatedScores = [...originalScores, 88, 92];

console.log(updatedScores); // Output: [85, 92, 78, 90, 88, 92]

// Example 3: Object Merging 

const personDetails = {
    name: "Alex",
    age: 25,
};

const contactInfo = {

    email: "6eE0A@example.com",
    phone: "1234567890"
}

// Create a combined object called 'profile'

const profile = { ...personDetails, ...contactInfo };

console.log(profile);

// Exercise 4: Overriding properties:

const defaultSetting = {
    theme: "light",
    fontSize: 12,
    showNotifications: true,
}



// Create a new settings object that uses defaults but changes theme to dark

const userSettings = { ...defaultSetting, theme: "dark" }

console.log(userSettings);

// Exercise 5: Function  Arguments 

function calculateTotal(x, y, z) {
    return x + y + z;

}


const prices = [10, 20, 30];


// Call calculateTotal using the spread operator
const total = calculateTotal(...prices);

console.log(`Total: $${total}`);


// Challenge Exercise : Unique Values 

// Create a function that combines multiple arrays and returns only unique values.

function combineUnique(...arrays) {

    const combined = [].concat(...arrays);

    return [...new Set(combined)];
}

console.log(combineUnique([1, 2, 3], [2, 3, 4], [3, 4, 5]));


/* 
Parameter collection with rest syntax:

...arrays collects all arguments into an array
arrays becomes [[1, 2, 3], [2, 3, 4], [3, 4, 5]]


Array flattening with spread operator:

[].concat(...arrays) expands to [].concat([1, 2, 3], [2, 3, 4], [3, 4, 5])
This creates a single flat array: [1, 2, 3, 2, 3, 4, 3, 4, 5]
combined now holds this array with duplicates


Removing duplicates with Set:

new Set(combined) creates a Set from the array
Sets only store unique values, so duplicate values are automatically removed
The Set becomes Set(5) {1, 2, 3, 4, 5}


Converting back to array with spread operator:

[...new Set(combined)] spreads the Set values into a new array
This produces the final result: [1, 2, 3, 4, 5]
*/


// 1. mergeUnique Function
// This function takes multiple arrays and returns a single array with all elements from all arrays, without duplicates:
// javascriptfunction mergeUnique(...arrays) {
//   // First, use spread to flatten all arrays into one combined array
//   const combined = [].concat(...arrays);
  
//   // Use Set to remove duplicates and spread again to convert back to array
//   return [...new Set(combined)];
// }

// // Test
// console.log(mergeUnique([1, 2], [2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]

// 2. transformObject Function
// This function takes an object and returns a new object with transformed properties:

