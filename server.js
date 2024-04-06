// Import required modules
const express = require('express'); // Importing the Express framework
const bodyParser = require('body-parser'); // Importing bodyParser middleware to parse request bodies

// Create Express app
const app = express(); // Initializing an Express application
const PORT = process.env.PORT || 3000; // Setting the port number to listen on, defaulting to 3000 if not provided by environment

// Sample quiz questions and answers (JSON format)
const quiz = [ // Array containing sample quiz questions and answers in JSON format
    {
        question: "What does Node.js allow you to do?", // Question 1
        options: ["Build backend applications", "Build frontend applications", "Both"], // Multiple options for Question 1
        answer: "Build backend applications" // Correct answer for Question 1
    },
    {
        question: "Which of the following is a core module in Node.js?",
        options: ["http", "express", "angular"],
        answer: "http"
    },
    {
        question: "What is the event loop in Node.js?",
        options: ["A loop that keeps handling asynchronous tasks", "A loop that runs only once", "A loop for handling synchronous tasks"],
        answer: "A loop that keeps handling asynchronous tasks"
    },
    {
        question: "What is npm in Node.js?",
        options: ["A. Node Package Manager", "B. Node Programming Module", "C. Node Process Manager"],
        answer: "A. Node Package Manager"
    },
    {
        question: "What is the purpose of package.json in a Node.js project?",
        options: ["A. To store metadata about the project and manage dependencies", "B. To execute JavaScript code in Node.js", "C. To define routes for Express.js applications"],
        answer: "A. To store metadata about the project and manage dependencies"
    },
    {
        question: "Which Node.js module is commonly used for handling file operations?",
        options: ["A. fs (File System)", "B. http", "C. path"],
        answer: "A. fs (File System)"
    },
    {
        question: "What does the EventEmitter class in Node.js allow you to do?",
        options: ["A. Emit events and handle asynchronous operations", "B. Create custom HTTP servers", "C. Define middleware functions in Express.js"],
        answer: "A. Emit events and handle asynchronous operations"
    },
    {
        question: "What is the purpose of the `require` function in Node.js?",
        options: ["A. To include external modules or files", "B. To execute JavaScript code asynchronously", "C. To define middleware functions in Express.js"],
        answer: "A. To include external modules or files"
    },
    {
        question: "How can you handle errors in Node.js applications?",
        options: ["A. Using try...catch blocks", "B. Using the error event of EventEmitter", "C. Both A and B"],
        answer: "C. Both A and B"
    },
    {
        question: "What is the difference between `setImmediate()` and `setTimeout()` in Node.js?",
        options: ["A. `setImmediate()` executes the callback immediately after the current event loop iteration, while `setTimeout()` schedules the callback to be executed after a specified delay.", "B. `setImmediate()` always executes before `setTimeout()`.", "C. There is no difference between them."],
        answer: "A. `setImmediate()` executes the callback immediately after the current event loop iteration, while `setTimeout()` schedules the callback to be executed after a specified delay."
    },
    {
        question: "What is the role of the `process` object in Node.js?",
        options: ["A. To provide information about the current Node.js process", "B. To create child processes", "C. Both A and B"],
        answer: "C. Both A and B"
    },
    {
        question: "How can you handle asynchronous operations in Node.js?",
        options: ["A. Using callbacks", "B. Using promises", "C. Using async/await", "D. All of the above"],
        answer: "D. All of the above"
    },
    {
        question: "What is the purpose of the `Buffer` class in Node.js?",
        options: ["A. To handle binary data", "B. To represent arrays in Node.js", "C. To define middleware functions in Express.js"],
        answer: "A. To handle binary data"
    }
];

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // Setting up middleware to parse URL-encoded bodies

// Middleware to parse JSON bodies
app.use(bodyParser.json()); // Setting up middleware to parse JSON bodies

// Set view engine and static file directory
app.set('view engine', 'ejs'); // Setting the view engine to EJS
app.use(express.static('public')); // Serving static files from the 'public' directory

// Define routes

// Route for the home page
app.get('/', (req, res) => { 
    res.render('Home'); // Render the index.ejs file in views directory when the root URL is accessed
});

// Route to serve quiz questions
app.get('/quiz', (req, res) => {
    res.json(quiz); // Return the quiz questions in JSON format when /quiz route is accessed
});

// Route to handle user submissions
app.post('/submit', (req, res) => {
    const answers = req.body.answers; // Extracting answers from the request body
    let score = 0; // Initializing score counter
    const feedback = []; // Array to store feedback on user's answers

    // Loop through each question and compare user's answers
    for (let i = 0; i < quiz.length; i++) {
        if (answers[i] === quiz[i].answer) { // If user's answer matches the correct answer
            score++; // Increment score
            feedback.push({ question: quiz[i].question, correct: true }); // Push correct feedback
        } else {
            feedback.push({ question: quiz[i].question, correct: false, correctAnswer: quiz[i].answer }); // Push incorrect feedback with correct answer
        }
    }

    // Return user's score and feedback
    res.json({ score, feedback });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Start the server and log a message indicating the port it's running on
});
