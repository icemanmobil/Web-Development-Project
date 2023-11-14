// JavaScript code for typing effect
const textToType = "The True Colors Personality Test!!!";
let index = 0;
const typingElement = document.getElementById("typing-text");

function typeText() {
  if (index < textToType.length) {
    typingElement.innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeText, 100); // Adjust the typing speed by changing the timeout value
  }
}

// Trigger the typing effect when the page loads
window.onload = typeText;

document.addEventListener("DOMContentLoaded", function () {
  const startTestButton = document.getElementById("startTestButton");
  debugger;

  startTestButton.addEventListener("click", function () {
    // Specify the URL of the first question page
    const question1Url = "Questions/Q1.html";

    // Open the question page in a new window or tab
    window.open(question1Url, "_blank");
  });
});

function nextQuestion(nextPage) {
  window.location.href = nextPage;
  return false; // Prevent the form from submitting (to avoid page reload)
}
