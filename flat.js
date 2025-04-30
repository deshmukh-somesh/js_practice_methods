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

// Using map() and flat() separately 