const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "What is the color of the sky?",
        options: ["Green", "Blue", "Red", "Yellow"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.querySelector('.question');
const optionsEl = document.querySelectorAll('.option');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const quizEl = document.getElementById('quiz');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.forEach((option, index) => {
        option.textContent = currentQuiz.options[index];
        option.classList.remove('selected', 'correct', 'wrong');
    });
}

optionsEl.forEach((option, index) => {
    option.addEventListener('click', () => {
        optionsEl.forEach(btn => btn.classList.remove('selected'));
        option.classList.add('selected');
    });
});

nextBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption) {
        alert('Please select an option!');
        return;
    }
    const answer = Array.from(optionsEl).indexOf(selectedOption);
    if (answer === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        quizEl.classList.add('hidden');
        resultEl.classList.remove('hidden');
        scoreEl.textContent = `${score} / ${quizData.length}`;
    }
});

restartBtn.addEventListener('click', () => {
    score = 0;
    currentQuestion = 0;
    quizEl.classList.remove('hidden');
    resultEl.classList.add('hidden');
    loadQuestion();
});

// Initialize the quiz
loadQuestion();
