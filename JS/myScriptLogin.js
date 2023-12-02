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
  const passwordElement = document.getElementById("password");
  passwordElement.value = randomPassword;

  // Add the new user and password to the validCredentials array
  validCredentials.push({ username: username, password: randomPassword });

  // Display a confirmation message (you can customize this)
  alert(`New password for ${username}: ${randomPassword}`);

  passwordElement.value = randomPassword;
}

function validateForm() {
  const usernameElement = document.getElementById("username");
  const passwordElement = document.getElementById("password");
  var username = usernameElement.value;
  var password = passwordElement.value;

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
      return (window.location.href = "../HTML/Home.html");
    }
  }

  // If no match is found, show an alert and prevent form submission
  alert("Invalid username or password. Please try again.");

  // Clear the username and password fields
  usernameElement.value = "";
  passwordElement.value = "";

  return false;
}
