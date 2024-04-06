// Function to fetch quiz questions from the server
async function fetchQuiz() {
    const response = await fetch('/quiz'); // Sending a GET request to '/quiz' endpoint to fetch quiz data
    const quiz = await response.json(); // Parsing the JSON response
    displayQuiz(quiz); // Displaying the fetched quiz questions
}

// Function to display quiz questions on the webpage
function displayQuiz(quiz) {
    const quizContainer = document.getElementById('quiz'); // Getting the container element to display quiz questions
    let html = ''; // Initializing an empty string to store HTML markup
    
    // Looping through each question in the quiz
    quiz.forEach((question, index) => {
        html += `<div class="quizSection">
                    <p class="question">${index + 1}. ${question.question}</p>
                    <ul>`;
        // Looping through each option for the current question
        question.options.forEach(option => {
            html += `<li><input type="radio" name="question${index}" value="${option}">${option}</li>`;
        });
        html += `</ul>
                </div>`;
    });

    // Setting the HTML content of the quiz container
    quizContainer.innerHTML = html;
}

// Function to submit user answers to the server
async function submitAnswers() {
    const quiz = document.getElementById('quiz'); // Getting the quiz container element
    const inputs = quiz.querySelectorAll('input[type=radio]:checked'); // Selecting all checked radio inputs
    const answers = Array.from(inputs).map(input => input.value); // Extracting values of checked inputs

    // Sending a POST request to '/submit' endpoint with user answers
    const response = await fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Specifying JSON content type
        },
        body: JSON.stringify({ answers }) // Sending user answers in JSON format
    });

    const result = await response.json(); // Parsing the JSON response
    displayResult(result); // Displaying the quiz result
}

// Function to display the quiz result on the webpage
function displayResult(result) {
    const resultContainer = document.getElementById('result'); // Getting the result container element
    let html = '<h2>Quiz Result</h2>'; // Initial HTML markup for result display
    html += `<p class="score"> Score: ${result.score}/${result.feedback.length}</p>`; // Displaying user score
    html += '<ul>';

    // Looping through each feedback item
    result.feedback.forEach(feedback => {
        html += '<li>';
        // Displaying whether the answer was correct or incorrect, along with correct answer if incorrect
        html += feedback.correct ? 'Correct' : `Incorrect. Correct answer: ${feedback.correctAnswer}`;
        html += '</li>';
    });

    html += '</ul>';
    // Setting the HTML content of the result container
    resultContainer.innerHTML = html;
}

// Fetch quiz questions when the page loads
fetchQuiz();
