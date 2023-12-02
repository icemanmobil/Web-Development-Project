document.addEventListener("DOMContentLoaded", function () {
  const textToType = `Welcome to The True Colors Personality Test!!!`;
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
  typeText();
});

function nextQuestion(nextPage) {
  window.location.href = nextPage;
  return false; // Prevent the form from submitting (to avoid page reload)
}
