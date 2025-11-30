const quizQuestions = [
    {
        question: "What is the capital of France", answers: "Paris"
    },
    {
        question: "who is current cheif justice of supreme court in india", answers: "Justice Surya Kant"
    },
    {
        question: "What is the largest planet in our solar system?", answers: "Jupiter"
    },
    { question: "Who wrote 'To Kill a Mockingbird'?", answers: "Harper Lee"  

    },
    {
        question: "What is the chemical symbol for gold?", answers: "Au"
    },
    {
        question: "Who painted the Mona Lisa?", answers: "Leonardo da Vinci"
    },
    {
        question: "What is the smallest prime number?", answers: "2"
    },
    {
        question: "In which year did the Titanic sink?", answers: "1912"
    },
    {
        question: "What is the hardest natural substance on Earth?", answers: "Diamond"
    },
    {
        question: "Who is known as the 'Father of Computers'?", answers: "Charles Babbage"
    },
    {
        question: "What is the capital city of Japan?", answers: "Tokyo"
    },
    {
        question: "Which element has the atomic number 1?", answers: "Hydrogen"
    }
];


function runQuiz() {
    let score = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
        const userAnswer = prompt(quizQuestions[i].question);
        if (userAnswer && userAnswer.trim().toLowerCase() === quizQuestions[i].answers.toLowerCase()) {
            score++;
            alert("Correct!");
        } else {
            alert(`Wrong! The correct answer is: ${quizQuestions[i].answers}`);
        }

    }
    alert(`Quiz Over! Your total score is: ${score} out of ${quizQuestions.length}`);
}       
runQuiz();  


