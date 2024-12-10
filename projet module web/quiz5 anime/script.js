const quizData = [
    {
        question: "who is this carecter?",
        options: ["naruto", "luffi", "cakachi", "goku"],
        correct: 2
    },
    {
        question: "whish anime has this opening?",
        options: ["attack on titan", "tokyo ghoul", "conan", "one pice"],
        correct: 1
    },
    {
        question: "whish anime caracteur has this eyes?",
        options: ["a", "b", "c", "d"],
        correct: 1
    },
    {
        question: "ma9oula?",
        options: ["a", "b", "c", "d"],
        correct: 1
    },
    {
        question: "al esteslamo ya9tolo el nas 3endama yansa enaso el istislama yaksebona a5irn al 7a9a fl 7ayat ?",
        options: ["1", "2", "3", "4"],
        correct: 1
    },
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
