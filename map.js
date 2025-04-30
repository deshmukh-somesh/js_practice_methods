// ==========================================
// PART 1: BASIC SYNTAX
// ==========================================

// The map() method creates a new array by applying a function 
// to each element of the original array

const numbers4 = [1, 2, 3, 4, 5];

const transformed = numbers4.map((currentValue, index, array) => {
    console.log(`Current Value: ${currentValue}`);
    console.log(`Index: ${index}`);
    console.log(`Array: ${array}`);

    return currentValue * 2;
})

console.log(transformed);

// If you run this code, for each element in the array:

// currentValue will be the number (1, then 2, then 3, etc.)
// index will be the position (0, then 1, then 2, etc.)
// array will always be the entire original array [1, 2, 3, 4, 5]

// The final result would be a new array [2, 4, 6, 8, 10].

const products = [

    { id: 101, name: "Laptop", price: 999 },
    { id: 102, name: "Phone", price: 699 },
    { id: 103, name: "Tablet", price: 499 },
    { id: 104, name: "Headphones", price: 199 }
]


const formattedProducts = products.map((currentPrice, index, array) => {

    const discount = currentPrice.price > 500 ? 0.1 : 0.05;
    const discountedPrice = currentPrice.price * (1 - discount);


    // using display to add a index number: 
    const displayNum = index + 1;

    // Using array to determine if this is the most expensive item: 
    const mostExpensive = Math.max(...array.map((price) => price.price));


    return {
        displayNum: displayNum,
        ...currentPrice,
        originalPrice: currentPrice.price,
        discount: discount * 100 + "%",
        finalPrice: discountedPrice.toFixed(2),
        isHighestPrice: mostExpensive,


    }



})

console.log(formattedProducts);


// PRACTICE PROBLEM 3:
// Given an array of movie objects, transform it to include:
// 1. A "category" based on rating: "Family" (G/PG), "Teen" (PG-13), "Adult" (R)
// 2. Apply a discount of 20% for movies older than 5 years (releaseYear < 2020)
// 3. Add a "popular" flag if views are above the average views of all movies
// 4. Add a "lengthCategory" based on duration: "Short" (<90 min), "Standard" (90-120 min), "Long" (>120 min)

const movies = [
    { id: 1, title: "Adventure Time", rating: "PG", price: 9.99, releaseYear: 2022, views: 5000, duration: 105 },
    { id: 2, title: "Dark Night", rating: "R", price: 14.99, releaseYear: 2018, views: 8000, duration: 150 },
    { id: 3, title: "Cartoon Fun", rating: "G", price: 12.99, releaseYear: 2023, views: 3000, duration: 85 },
    { id: 4, title: "Teen Drama", rating: "PG-13", price: 11.99, releaseYear: 2019, views: 6500, duration: 110 }
];

// Write your solution here:
const processedMovies = movies.map((movie, index, array) => {
    // Your code here
    const movieCategory = movie.rating === "G" || movie.rating === "PG" ? "Family" : movie.rating ==="PG-13" ? "Teen":"Adult";

const discount = movie.releaseYear < 2020 ? 0.2 : 0;

const discountedPrice = movie.price * (1 - discount);

const averageViews  = array.reduce((acc, curr)=> acc + curr.views, 0) /array.length;

});

// 