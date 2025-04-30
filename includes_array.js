// The includes() method is used to determine if an array contains a specific element. 
// It returns true if the element is found, and false otherwise.

//  Syntax : 
// array.includes(element, [fromIndex])

// Parameters:

// element: The value to search for in the array
// fromIndex (optional): The position in the array to start searching from (defaults to 0)

// Key Points to Remember: 


// includes() is case-sensitive
// It can search for any data type, not just strings
// It uses strict equality (===) for comparison
// It properly handles NaN values (unlike indexOf)


const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana'));

// Using fromIndex parameter: 
const numbers1 = [10,20,30,40,50];
console.log(numbers1.includes(30, 2)); // true (starts searching from index 2):
console.log(numbers1.includes(10, 1)); // false ( starts searching from index 1)

// Case sensitivity:

const names = ["John", 'Mary', "Alex"];
console.log(names.includes('john')); // false (case - insensitive)

// Working with numbers : 
console.log([1,2,3].includes(2)); // true
console.log([1,2,3].includes(4)); // false


// NaN handling (special case)
console.log([1, 2, NaN].includes(NaN)); // true


// find if an element is present in an array :
 
