function saveResponseAndRedirect(nextQuestionURL, selectedOption) {
            // Save the selected option to sessionStorage
            sessionStorage.setItem('selectedOption', selectedOption);

            // Redirect to the next question
            window.location.href = nextQuestionURL;
        }