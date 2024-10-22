const questions = [
    {
        question: "What's your ideal date like?",
        options: ["Dinner at a fancy restaurant", "A fun adventure outdoors", "A quiet night in", "Going to a concert"],
        answer: 0
    },
    {
        question:"What type of music do you like?",
        options: ["Pop", "Rock", "Jazz", "Classical"],
        answer: 1
    },
    {
        question: "What's your favorite movie genre?",
        options: ["Romantic", "Action", "Comedy", "Documentary"],
        answer: 2
    },
    {
        question: "Which hobby interests you the most?",
        options: ["Cooking", "Sports", "Reading", "Traveling"],
        answer: 3
    }
];

const celebrities = ["Ariana Grande", "Tyla", "Ayra Starr", "Beyonce"];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = 
document.getElementById('question');
const optionsElement = 
document.getElementById('options');
const nextButton =
document.getElementById('nextBtn');
const resultElement =
document.getElementById('result');
const celebrityElement =
document.getElementById('celebrity');
const restartButton =
document.getElementById('restartBtn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.remove('hidden');
    resultElement.classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    const currentQuestion =
    questions[currentQuestionIndex];
    questionElement.innerText =
    currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index)=> {
        const button = 
        document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(button);
    });
}

function selectOption(index) {
    if (index ===
        questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
}

function showResult() {
    nextButton.classList.add('hidden');
    resultElement.classList.remove('hidden');
    celebrityElement.innerText = celebrities[score];
}

nextButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', startQuiz);

// Start the quiz on load
startQuiz();