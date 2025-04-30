
function findDuplicateElements(arr) {
    const counts = {};
    const duplicates = [];


    for (const item of arr) {
        counts[item] = (counts[item] || 0) + 1;

        console.log("counts item", counts[item]);
        console.log(counts);

    }

    for (const item in counts) {
        if (counts[item] > 1) {
            duplicates.push(Number(item));
        }
    }

    return duplicates;
}


console.log("duplicates are as follows:", findDuplicateElements([1, 2, 2, 3, 4, 4, 5, 5, 5, 7]))


// Set approach to find duplicates: 

function findDuplicatesWithSets(arr) {
    const seen = new Set();
    const duplicate = new Set();


    // Add elements to seen set, or to duplication if already seen 
    for (const item of arr) {
        if (seen.has(item)) {
            duplicate.add(item);
        } else {
            seen.add(item);
        }
    }

    // Convert the set of duplicates to an array
    // return Array.from(duplicate);
    return [...duplicate];

}

console.log("the dupli", findDuplicatesWithSets([1, 2, 2, 3, 3, 4, 5,]));



// guide for the object and the arrays:
// Quick memory trick:
// "IN" = Keys IN an object
// "OF" = Elements OF an array


// ex: 
const obj = { a: 1, b: 2 };

for (const key in obj) {
    console.log(obj[key]);
}


const arr = [1, 2, 3];

for (const value of arr) {
    console.log(value);
}

