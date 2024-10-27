//your JS code here. If required.
// Function to convert the input text to uppercase on blur
function capitalizeName() {
    // Get the input field by its id
    const inputField = document.getElementById('fname');
    
    // Convert the input text to uppercase
    inputField.value = inputField.value.toUpperCase();
}

// Attach the capitalizeName function to the blur event of the input field
document.getElementById('fname').addEventListener('blur', capitalizeName);
