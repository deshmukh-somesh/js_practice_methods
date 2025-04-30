// The reduce function in JavaScript is a powerful array method that allows you to 
// "reduce" an array to a single value by applying a function to each element.

// Syntax: 
// array.reduce(callback, initialValue)

// The callback function takes four parameters (though typically only the first two are used):

// Accumulator - the value accumulated so far
// Current value - the current element being processed
// Current index (optional)
// Source array (optional)


// Example 1: Sum an array of numbers

/*
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
 return accumulator + currentValue;
}, 0 ); // 0 is the initial value of the accumulator

console.log(sum); // Output: 15

*/


const numbers5 = [1, 2, 3, 4, 5];


const sum = numbers5.reduce((accmulator, currentValue) => {
    return accmulator + currentValue;
}, 0)


console.log(sum);


// Example 2: Finding the maximum value in an array: 

const numbers6 = [5, 10, 15, 20, 25];

const max = numbers6.reduce((max, current) => {

    return current > max ? current : max
}, numbers6[0])


console.log(max); // Output: 25
