function hasDuplicates(arr) {
    const counts = {};


    // Count occurrences of each element: 
    for (const item of arr) {
        counts[item] = (counts[item] || 0) + 1;


        // As soon as we find an element with count > 1, return true;
        if (counts[item] > 1) {
            return true;
        }


    }
    // If we've gone through the entire array without finding duplicates
    return false;
}



hasDuplicates([1, 2, 2, 3, 4]);


