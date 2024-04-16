# Node.js Quiz Application

This is a simple Node.js quiz application that allows users to take a quiz and submit their answers. The application consists of a backend server built with Express.js and a frontend interface built with HTML, CSS, and JavaScript.

## Getting Started

To run this application locally, follow these steps:

1. **Clone the repository:**

git clone <repository_url> 2. **Navigate to the project directory:**

cd nodejs-quiz-application 3. **Install dependencies:**
npm install

4. **Start the server:**
   npm start

This will start the server on port 3000 by default. If you want to specify a different port, you can do so by setting the `PORT` environment variable:

PORT=5000 npm start

5. **Access the application in your browser:**

Open your web browser and go to [http://localhost:3000](http://localhost:3000) (or the port you specified). You should see the Node.js quiz application running.

## Usage

- Once the application is running, you can take the quiz by answering the questions provided.
- After answering all the questions, click the "Submit Answers" button to submit your answers.
- You will then see your quiz result displayed on the page.

## Dependencies

- Express.js: Web framework for Node.js
- body-parser: Middleware for parsing request bodies
- nodemon (development only): Automatically restarts the server when changes are made

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
