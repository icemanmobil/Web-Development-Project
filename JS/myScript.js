var validCredentials = [
  { username: "Ariam", password: "pass1" },
  { username: "Meet", password: "pass2" },
  { username: "Hunter", password: "pass3" },
  { username: "Rutvik", password: "pass4" },
  { username: "Yazz", password: "pass5" },
];

function generateRandomPassword() {
  // Get the username from the username input field
  const username = document.getElementById("username").value;

  // Check username
  if (!username) {
    alert("Please enter a username.");
    return;
  }

  // Define the characters
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  const passwordLength = 10;

  // Generate the random password
  let randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomPassword += characters.charAt(randomIndex);
  }

  // Fill in the password field with the generated password
  document.getElementById("password").value = randomPassword;

  // Add the new user and password to the validCredentials array
  validCredentials.push({ username: username, password: randomPassword });

  // Display a confirmation message (you can customize this)
  alert(`New password for ${username}: ${randomPassword}`);

  getElementById("password").value = randomPassword;
}

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return false;
  }

  if (username === "") {
    generateRandomPassword();
    // Generate a random password
    return false;
  }

  for (var i = 0; i < validCredentials.length; i++) {
    if (
      username === validCredentials[i].username &&
      password === validCredentials[i].password
    ) {
      alert("Login successful!");

      // Redirect to Home.html
      window.location.href = "HTML/Home.html";

      return true; // Proceed with form submission
    }
  }

  // If no match is found, show an alert and prevent form submission
  alert("Invalid username or password. Please try again.");

  // Clear the username and password fields
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

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

function calculateOptionSums() {
  var responses = JSON.parse(localStorage.getItem("responses")) || {};

  // Initialize option sums
  var optionSums = { a: 0, b: 0, c: 0, d: 0 };

  // Iterate through questions
  for (var questionId in responses) {
    var question = responses[questionId];

    // Iterate through options in the question
    for (var option in question) {
      // Check if it's an option (not pointCount)
      if (option !== "pointCount") {
        // Add the points to the corresponding option sum
        optionSums[option] += question[option];
      }
    }
  }

  // Print or use the option sums as needed
  console.log("Option Sums:", optionSums);

  localStorage.setItem("optionSums", JSON.stringify(optionSums));
}

function updateResults() {
  var optionSums = JSON.parse(localStorage.getItem("optionSums")) || {};

  // Iterate through the option sums and update the corresponding table cells
  for (var option in optionSums) {
    var optionSumElement = document.getElementById(
      "option" + option.toUpperCase() + "Sum"
    );
    if (optionSumElement) {
      optionSumElement.textContent = optionSums[option];
    }
  }

  // Determine the option with the maximum sum
  var maxOption = Object.keys(optionSums).reduce(function (a, b) {
    return optionSums[a] > optionSums[b] ? a : b;
  });
  var sameSumColors = Object.keys(optionSums).filter(function (color) {
    return optionSums[color] === optionSums[maxOption] && color !== maxOption;
  });

  //Set background color based on the color with the most points
  if (sameSumColors.length > 0) {
    //Set gradient background if there are multiple colors with the same sum
    setGradientBackground(sameSumColors);
    updateAdditionalInfo(sameSumColors);
  } else {
    //Set background color based on the color with the most points
    document.body.style.backgroundColor = getColorForOption(maxOption);
    updateAdditionalInfo(maxOption);
  }
}

// Helper function to map option letters to corresponding colors
function getColorForOption(option) {
  var colorMap = { a: "Orange", b: "Green", c: "Blue", d: "Gold" };
  return colorMap[option];
}

function updateAdditionalInfo(colors) {
  var additionalInfoElement = document.getElementById("additionalInfo");
  var infoContent = "";

  // Add information based on the color
  if (colors.length === 1) {
    switch (colors[0]) {
      case "a":
        infoContent =
          "<h1>Are you…Orange?</h1><br><h3>Witty…Charming…Spontaneous?<br>Impulsive…Generous…Impactful?<br>Optimistic…Eager…Bold?<br>Physical…Immediate…Courageous?<br>At school…<br>I learn by doing and experiencing, rather than by listening and reading.<br>I like being physically involved in the learning process and am motivated by my own natural competitive self and sense of fun.<br>I am a natural performer.<br>I like doing tasks that allow me to be independent and free.";
        break;
      case "b":
        infoContent =
          "<h1>Are you…Green?</h1><br><h3>Analytical…Global…Conceptual?<br>Cool…Calm…Collected?<br>Inventive…Logical…Problem Solver?<br>Abstract…Creative…Investigative?<br>At school…<br>I am conceptual and am an independent thinker.<br>For me, work is play.<br>I am drawn to constant challenge.<br>I like to develop models and explore ideas.";
        break;
      case "c":
        infoContent =
          "<h1>Are you…Blue?</h1><br><h3>Enthusiastic…Sympathetic…Personal?<br>Warm…Communicative…Compassionate?<br>Idealistic…Spiritual…Sincere?<br>Peaceful…Flexible…Imaginative?<br>At school…<br>I have a strong desire to be a role model for my classmates.<br>I am skilled at motivating and interacting with others – I make friends easily and like having friends.<br>I respond well to encouragement rather than competition.<br>I like being artistic, communicating with people, and helping people.";
        break;
      case "d":
        infoContent =
          "<h1>Are you…Gold?</h1><br><h3>Loyal…Dependable…Prepared?<br>Thorough…Sensible…Punctual?<br>Faithful…Stable…Organized?<br>Caring…Concerned…Helper?<br>At school…<br>I am stable and organized.<br>I am detailed-oriented and predictable.<br>I believe that work comes before play, even if I must work overtime to complete the job.<br>I understand and respect authority and am comfortable with how school goes.";
        break;
    }
  } else if (colors.length > 1) {
    // Display a generic message for a mix of two colors
    infoContent = "<h1>You are a Mix of Several Colors!</h1><br>";
  }
  // Update the content
  additionalInfoElement.innerHTML = infoContent;
}

// // Helper function to set gradient background for multiple colors
function setGradientBackground(colors) {
  var gradientColors = colors.map((color) => getColorForOption(color));
  document.body.style.backgroundImage = `linear-gradient(to right, ${gradientColors.join(
    ", "
  )})`;
}

document.addEventListener("DOMContentLoaded", function () {
  calculateOptionSums();
  updateResults();
});
