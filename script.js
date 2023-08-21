

// Select the <span> element with the ID "typing-text"
const typingText = document.getElementById("typing-text");

// Store the original text content of the <span> element
const originalText = typingText.textContent;

// Initialize a variable to keep track of the current index of characters
let index = 0;

// Define the function that simulates the typing effect
function typeText() {
  // Set the text content of the <span> element to a substring of the original text
  // The substring includes characters from index 0 to the current value of 'index'
  typingText.textContent = originalText.slice(0, index);

  // Increment the index to move to the next character
  index++;

  // Check if the index is less than or equal to the length of the original text
  // If there are characters remaining, schedule the next typing update using setTimeout
  if (index <= originalText.length) {
    setTimeout(typeText, 100); // Adjust the typing speed (milliseconds)
  }
}

// Start the typing effect by calling the 'typeText' function
typeText();



// const typingText = document.getElementById("typing-text");
// const originalText = typingText.textContent;
// let index = 0;

// function typeText() {
//   typingText.textContent = originalText.slice(0, index);
//   index++;

//   if (index <= originalText.length) {
//     setTimeout(typeText, 100); // Adjust the typing speed (milliseconds)
//   }
// }

// typeText();