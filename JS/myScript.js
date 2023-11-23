function saveResponseAndRedirect(nextQuestionURL, selectedOption) {
  // Save the selected option to sessionStorage
  sessionStorage.setItem("selectedOption", selectedOption);

  window.location.href = nextQuestionURL;
}

var validCredentials = [
  { username: "Ariam", password: "pass1" },
  { username: "Meet", password: "pass2" },
  { username: "Hunter", password: "pass3" },
  { username: "Rutvik", password: "pass4" },
  { username: "Yazz", password: "pass5" },
];

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return false;
  }

  for (var i = 0; i < validCredentials.length; i++) {
    if (
      username === validCredentials[i].username &&
      password === validCredentials[i].password
    ) {
      alert("Login successful!");

      window.location.href = "HTML/Home.html";

      return true; // Proceed with form submission
    }
  }

  // If no match is found, show an alert and prevent form submission
  alert("Invalid username or password. Please try again.");
  usernameInput.value = ""; // Clear the username field
  passwordInput.value = ""; // Clear the password field
  return false;
}

let data = {
  q1: {
    pointCount: 0,
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined,
  },
  q2: {
    pointCount: 0,
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined,
  },
  q3: {
    pointCount: 0,
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined,
  },
  q4: {
    pointCount: 0,
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined,
  },
  q5: {
    pointCount: 0,
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined,
  },
  q6: {
    pointCount: 0,
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined,
  },
  q7: {
    pointCount: 0,
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined,
  },
  q8: {
    pointCount: 0,
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined,
  },
  q9: {
    pointCount: 0,
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined,
  },
  q10: {
    pointCount: 0,
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined,
  },
  q11: {
    pointCount: 0,
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined,
  },
};

/*function saveResponseAndRedirect(nextPage, questionId, selectedOption) {
  // Retrieve existing responses from localStorage or initialize an empty array
  var responses = JSON.parse(localStorage.getItem("responses")) || data;

  if (responses[questionId] && responses[questionId][selectedOption]) {
    alert("This option has already been selected. Please choose a different option.");
    return;
  }

  // Determine the points based on the order of the option clicked
  const pointCount = responses[questionId].pointCount;
  // Check if all four options are selected

  const points = pointCount + 1;

  // Add the current response to the array
  responses[questionId][selectedOption] = points;
  responses[questionId].pointCount++;

  // Save the updated responses back to localStorage
  localStorage.setItem("responses", JSON.stringify(responses));

  // Change the color of the clicked option
  var clickedOption = document.activeElement;
  clickedOption.classList.add("selected");

  if (responses[questionId].pointCount === 4) {
    // Redirect to the next page
    window.location.href = nextPage;
  }
}*/

function saveResponseAndRedirect(nextPage, questionId, selectedOption) {
  // Retrieve existing responses from localStorage or initialize an empty object
  var responses = JSON.parse(localStorage.getItem("responses")) || {};

  // Check if the option has already been selected
  if (responses[questionId] && responses[questionId][selectedOption]) {
    alert(
      "This option has already been selected. Please choose a different option."
    );
    return;
  }

  // Determine the points based on the order of the option clicked
  const pointCount = responses[questionId]
    ? responses[questionId].pointCount || 0
    : 0;

  const points = pointCount + 1;

  // Initialize the question in responses if it doesn't exist
  if (!responses[questionId]) {
    responses[questionId] = { pointCount: 0 };
  }

  // Add the current response to the object
  responses[questionId][selectedOption] = points;
  responses[questionId].pointCount++;

  // Save the updated responses back to localStorage
  localStorage.setItem("responses", JSON.stringify(responses));

  // Change the color of the clicked option
  var clickedOption = document.activeElement;
  clickedOption.classList.add("selected");

  if (responses[questionId].pointCount === 4) {
    // Redirect to the next page
    window.location.href = nextPage;
  }
}
