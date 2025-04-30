// Get the input box and result area from HTML
const searchBox = document.getElementById('searchBox');
const result = document.getElementById('result');

// Store the timeout ID for later use
let timeoutId = null;

// Add an event listener for when user types 
searchBox.addEventListener('input', function() {
    result.textContent = "Typing: " + searchBox.value;


    // Clear any existing timeout
    if(timeoutId){
        clearTimeout(timeoutId);
    }

    // Set  a new timeout (500 ms = half a second); 

    timeoutId = setTimeout(function(){
        // this code runs only after user stops typing for 500ms
        result.textContent = "Search result for: " + searchBox.value;
    }, 500);
});
