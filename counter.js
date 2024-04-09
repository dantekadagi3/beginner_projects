// Get references to the elements
const counterDisplay = document.querySelector('.counter--container p');
const increaseBtn = document.querySelectorAll('.function')[0];
const decreaseBtn = document.querySelectorAll('.function')[1];
const resetBtn = document.querySelectorAll('.function')[2];

// Initialize counter value
let counter = 0;

// Function to update the counter display
function updateCounter() {
    counterDisplay.textContent = counter;
}

// Function to increase the counter
function increaseCounter() {
    counter++;
    updateCounter();
}

// Function to decrease the counter
function decreaseCounter() {
    counter--;
    updateCounter();
}

// Function to reset the counter to zero
function resetCounter() {
    counter = 0;
    updateCounter();
}

// Event listeners for the buttons
increaseBtn.addEventListener('click', function(event) {
    event.preventDefault();
    increaseCounter();
});
decreaseBtn.addEventListener('click', function(event) {
    event.preventDefault();
    decreaseCounter();
});
resetBtn.addEventListener('click', function(event) {
    event.preventDefault();
    resetCounter();
});

// Initial display
updateCounter();
