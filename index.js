// Write your code here!

// index.js

// Remove the <main> element with the id 'main'
document.getElementById('main').remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text inside the <h1> element
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the new <h1> element to the body (or any other desired location)
document.body.appendChild(newHeader);
