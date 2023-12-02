// Helper function to map option letters to corresponding colors
function getColorForOption(option) {
  var colorMap = { a: "Orange", b: "Green", c: "Blue", d: "Gold" };
  return colorMap[option];
}

function updateAdditionalInfo(colors) {
  let additionalInfoElement = document.getElementById("additionalInfo");
  let infoContent = "";
  const texts = {
    a: "<h1>Are you…Orange?</h1><br><h3>Witty…Charming…Spontaneous?<br>Impulsive…Generous…Impactful?<br>Optimistic…Eager…Bold?<br>Physical…Immediate…Courageous?<br>At school…<br>I learn by doing and experiencing, rather than by listening and reading.<br>I like being physically involved in the learning process and am motivated by my own natural competitive self and sense of fun.<br>I am a natural performer.<br>I like doing tasks that allow me to be independent and free.",
    b: "<h1>Are you…Green?</h1><br><h3>Analytical…Global…Conceptual?<br>Cool…Calm…Collected?<br>Inventive…Logical…Problem Solver?<br>Abstract…Creative…Investigative?<br>At school…<br>I am conceptual and am an independent thinker.<br>For me, work is play.<br>I am drawn to constant challenge.<br>I like to develop models and explore ideas.",
    c: "<h1>Are you…Blue?</h1><br><h3>Enthusiastic…Sympathetic…Personal?<br>Warm…Communicative…Compassionate?<br>Idealistic…Spiritual…Sincere?<br>Peaceful…Flexible…Imaginative?<br>At school…<br>I have a strong desire to be a role model for my classmates.<br>I am skilled at motivating and interacting with others – I make friends easily and like having friends.<br>I respond well to encouragement rather than competition.<br>I like being artistic, communicating with people, and helping people.",
    d: "<h1>Are you…Gold?</h1><br><h3>Loyal…Dependable…Prepared?<br>Thorough…Sensible…Punctual?<br>Faithful…Stable…Organized?<br>Caring…Concerned…Helper?<br>At school…<br>I am stable and organized.<br>I am detailed-oriented and predictable.<br>I believe that work comes before play, even if I must work overtime to complete the job.<br>I understand and respect authority and am comfortable with how school goes.",
  };

  colors.forEach((color) => {
    infoContent += texts[color];
  });

  // Update the content
  additionalInfoElement.innerHTML = infoContent;
}

// // Helper function to set gradient background for multiple colors
function setGradientBackground(colors) {
  var gradientColors = colors.map((color) => getColorForOption(color));
  if (gradientColors.length === 1) {
    document.body.style.background = gradientColors[0];
  } else {
    document.body.style.backgroundImage = `linear-gradient(to right, ${gradientColors
      .join(", ")
      .toLowerCase()})`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  calculateOptionSums();
  updateResults();
});
