// Array destructuring allows you to extract values from arrays and assign them to variables in a concise and elegant way,
// Instead of accessing array elements using indices, you can unpack the values directly into named variables.

// Basic Array Destructring: 

// The Fundamentals
// The basic syntax for array destructuring uses square brackets on the left side of the assignment:

/*
const numbers2 = [1,2,3,4,5];
const [first, second, third] = numbers2;

console.log(first); 
console.log(second);
console.log(third);
*/
// Skipping Elements
// You can skip elements you're not interested in by using commas:

/*
const colors = ["red", "green", "blue", "yellow"];

const [primary, , tertiary] = colors

console.log(primary);
console.log(tertiary);

*/
// Advanced Destructuring Techniques

//Rest Pattern
//The rest pattern (...) collects the remaining elements into a new array:


const fruits1 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const [favorite, second, ...others] = fruits1

console.log(favorite);
console.log(second);
console.log(others);

//Default Values
//You can provide default values for variables in case the array doesn't have enough elements:

const [a, b, c = "default"] = [1, 2];

console.log(a); // 1
console.log(b); // 2
console.log(c); // 'default'



// Swapping Variables :
// Destructuring provides an elegant way to swap variables without a temporary variable:

let x = 10;
let y = 20;


[x, y] = [y, x];

console.log(x); // 20 
console.log(y); // 10


// Nested Array Destructuring
// You can destructure nested arrays by nesting the destructuring patterns:

const coordinates = [10, 20, [30, 40]];
const [x1, y1, [z, w]] = coordinates;

console.log(x1); // 10
console.log(y1); // 20 
console.log(z); // 30 
console.log(w); // 40 


// Practical Applications
// Function Returns
// Destructuring is particularly useful with functions that return arrays:

function getCoordinates() {
    return [33.4, -112.5];
}

const [lat, lng] = getCoordinates();

console.log(`Latitude: ${lat} , longitude : ${lng}`);

// Iterator Destructuring
// Destructuring works with any iterable, including strings:

const [first, second3, third] = "abc";


console.log(first) // "a"
console.log(second3) // "b"
console.log(third) // "c"



// With Array Methods
// Destructuring shines when used with array methods:

const entries  = [['name', 'John'], ['age', 30], ['city', 'New York']];

// Using map with destructuring: 

// entries.map()