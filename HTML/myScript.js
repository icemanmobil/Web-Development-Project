
// document.addEventListener("DOMContentLoaded", function () {
//     const submitBtn = document.getElementById("submitBtn");
//     const errorDiv = document.getElementById("error-message");

//     submitBtn.addEventListener("click", function () {
//         const question1Value = document.getElementById("question1").value;
        
//         if (question1Value.trim() === "") {
//             errorDiv.innerHTML = "Please answer the question before submitting.";
//         } else {
//             // Process the answer here if needed
//             // Redirect to the next question or submit the entire questionnaire
//         }
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    const startTestButton = document.getElementById("startTestButton");

    startTestButton.addEventListener("click", function () {
        // Specify the URL of the first question page
        const question1Url = "Q1.html";

        // Open the question page in a new window or tab
        window.open(question1Url, "_blank");
    });
});

