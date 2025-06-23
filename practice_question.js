const str = "hello";
const reversed = str.split('').reverse().join('');
console.log(reversed); // "olleh"

// ===== STRING MANIPULATION =====

// 1. Check if a string is a palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
// Alternative: Two-pointer approach
function isPalindromeOptimal(str) {
    const cleaned = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let left = 0, right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }
    return true;
}

// 2. Find first non-repeating character
function firstNonRepeatingChar(str) {
    const charCount = {};
    
    // Count occurrences
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find first with count 1
    for (let char of str) {
        if (charCount[char] === 1) return char;
    }
    return null;
}

// 3. Count occurrences of each character
function countCharacters(str) {
    const count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

// 4. Remove duplicates from string
function removeDuplicates(str) {
    return [...new Set(str)].join('');
}
// Alternative: Using filter
function removeDuplicatesFilter(str) {
    return str.split('').filter((char, index) => str.indexOf(char) === index).join('');
}

// 5. Capitalize first letter of each word
function capitalizeWords(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

// ===== ARRAY OPERATIONS =====

// 1. Remove duplicates from array
function removeDuplicatesArray(arr) {
    return [...new Set(arr)];
}
// Alternative: Using filter
function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// 2. Find largest/smallest number in array
function findLargest(arr) {
    return Math.max(...arr);
}
function findSmallest(arr) {
    return Math.min(...arr);
}
// Alternative: Using reduce
function findLargestReduce(arr) {
    return arr.reduce((max, current) => current > max ? current : max, arr[0]);
}

// 3. Rotate array left/right
function rotateLeft(arr, positions) {
    const n = positions % arr.length;
    return arr.slice(n).concat(arr.slice(0, n));
}
function rotateRight(arr, positions) {
    const n = positions % arr.length;
    return arr.slice(-n).concat(arr.slice(0, -n));
}

// 4. Flatten nested array
function flattenArray(arr) {
    return arr.flat(Infinity);
}
// Alternative: Recursive approach
function flattenRecursive(arr) {
    return arr.reduce((flat, item) => 
        Array.isArray(item) ? flat.concat(flattenRecursive(item)) : flat.concat(item), []
    );
}

// 5. Find intersection of two arrays
function arrayIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
// Remove duplicates from intersection
function arrayIntersectionUnique(arr1, arr2) {
    return [...new Set(arr1.filter(item => arr2.includes(item)))];
}

// ===== NUMBER PROBLEMS =====

// 1. Check if number is prime
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// 2. Find factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
// Iterative version
function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 3. Generate Fibonacci sequence
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Optimized iterative version
function fibonacciIterative(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
// Generate sequence up to n terms
function fibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence.slice(0, n);
}

// 4. Reverse digits of a number
function reverseNumber(num) {
    const isNegative = num < 0;
    const reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''));
    return isNegative ? -reversed : reversed;
}

// 5. Check if number is perfect square
function isPerfectSquare(num) {
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}

// ===== OBJECT/DATA STRUCTURE QUESTIONS =====

// 1. Deep clone object
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (Array.isArray(obj)) return obj.map(deepClone);
    
    const cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}
// Using JSON (limited - doesn't handle functions, dates, etc.)
function deepCloneJSON(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// 2. Merge two objects
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
// Deep merge
function deepMerge(obj1, obj2) {
    const result = { ...obj1 };
    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key])) {
                result[key] = deepMerge(result[key] || {}, obj2[key]);
            } else {
                result[key] = obj2[key];
            }
        }
    }
    return result;
}

// 3. Group array of objects by property
function groupBy(arr, key) {
    return arr.reduce((groups, item) => {
        const group = item[key];
        groups[group] = groups[group] || [];
        groups[group].push(item);
        return groups;
    }, {});
}

// 4. Implement simple stack
class Stack {
    constructor() {
        this.items = [];
    }
    
    push(item) {
        this.items.push(item);
    }
    
    pop() {
        return this.items.pop();
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
}

// 5. Implement simple queue
class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(item) {
        this.items.push(item);
    }
    
    dequeue() {
        return this.items.shift();
    }
    
    front() {
        return this.items[0];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
}

// 6. Find duplicate values in array of objects
function findDuplicates(arr, key) {
    const seen = new Set();
    const duplicates = new Set();
    
    arr.forEach(item => {
        const value = item[key];
        if (seen.has(value)) {
            duplicates.add(value);
        } else {
            seen.add(value);
        }
    });
    
    return Array.from(duplicates);
}

// ===== LOGIC PUZZLES =====

// 1. FizzBuzz
function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push('FizzBuzz');
        else if (i % 3 === 0) result.push('Fizz');
        else if (i % 5 === 0) result.push('Buzz');
        else result.push(i);
    }
    return result;
}

// 2. Find missing number in array 1 to n
function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
// Alternative: Using Set
function findMissingNumberSet(arr, n) {
    const numSet = new Set(arr);
    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) return i;
    }
    return null;
}

// 3. Check if two strings are anagrams
function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
// Alternative: Character count approach
function areAnagramsCount(str1, str2) {
    const count1 = countCharacters(str1.toLowerCase().replace(/[^a-z]/g, ''));
    const count2 = countCharacters(str2.toLowerCase().replace(/[^a-z]/g, ''));
    
    const keys1 = Object.keys(count1);
    const keys2 = Object.keys(count2);
    
    if (keys1.length !== keys2.length) return false;
    
    return keys1.every(key => count1[key] === count2[key]);
}

// 4. Basic calculator
function calculator(expression) {
    // Remove spaces
    expression = expression.replace(/\s/g, '');
    
    // Simple evaluation (be careful with eval in production!)
    try {
        return Function('"use strict"; return (' + expression + ')')();
    } catch (error) {
        return 'Error: Invalid expression';
    }
}

// Safer calculator without eval
function safeCalculator(num1, operator, num2) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        default: return 'Error: Invalid operator';
    }
}

// 5. Find longest word in sentence
function findLongestWord(sentence) {
    const words = sentence.split(' ');
    return words.reduce((longest, current) => 
        current.length > longest.length ? current : longest, ''
    );
}
// Return all longest words if there are ties
function findAllLongestWords(sentence) {
    const words = sentence.split(' ');
    const maxLength = Math.max(...words.map(word => word.length));
    return words.filter(word => word.length === maxLength);
}

// ===== EXAMPLE USAGE =====

// Test the functions
console.log('=== STRING MANIPULATION ===');
console.log('isPalindrome("racecar"):', isPalindrome("racecar"));
console.log('firstNonRepeatingChar("hello"):', firstNonRepeatingChar("hello"));
console.log('countCharacters("hello"):', countCharacters("hello"));
console.log('removeDuplicates("hello"):', removeDuplicates("hello"));
console.log('capitalizeWords("hello world"):', capitalizeWords("hello world"));

console.log('\n=== ARRAY OPERATIONS ===');
console.log('removeDuplicatesArray([1,2,2,3]):', removeDuplicatesArray([1,2,2,3]));
console.log('findLargest([1,5,3,9,2]):', findLargest([1,5,3,9,2]));
console.log('rotateLeft([1,2,3,4,5], 2):', rotateLeft([1,2,3,4,5], 2));
console.log('flattenArray([1,[2,3],[4,[5]]]):', flattenArray([1,[2,3],[4,[5]]]));

console.log('\n=== NUMBER PROBLEMS ===');
console.log('isPrime(17):', isPrime(17));
console.log('factorial(5):', factorial(5));
console.log('fibonacciSequence(8):', fibonacciSequence(8));
console.log('reverseNumber(12345):', reverseNumber(12345));

console.log('\n=== LOGIC PUZZLES ===');
console.log('fizzBuzz(15):', fizzBuzz(15));
console.log('findMissingNumber([1,2,4,5], 5):', findMissingNumber([1,2,4,5], 5));
console.log('areAnagrams("listen", "silent"):', areAnagrams("listen", "silent"));
console.log('findLongestWord("The quick brown fox"):', findLongestWord("The quick brown fox"));
