let allQuestions = [];
let selectedQuestions = [];
let userAnswers = []; // Store user's selected answers (index or null)
let currentQuestionIndex = 0;
let timerInterval;
let timeLeft = 45 * 60;
let quizEnded = false;

// DOM elements
const quizContainer = document.getElementById("quiz-container");
const correctionContainer = document.getElementById("correction-container");
const resultBanner = document.getElementById("result-banner");
const questionCounter = document.getElementById("question-counter");
const timerText = document.getElementById("timer-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const quizNav = document.getElementById("quiz-nav");

function validateQuestionsShape(data) {
    if (!Array.isArray(data)) {
        throw new Error("Invalid embedded questions: expected an array.");
    }
    for (const [idx, q] of data.entries()) {
        if (!q || typeof q !== "object") throw new Error(`Invalid question at index ${idx}: expected an object.`);
        if (typeof q.question !== "string") throw new Error(`Invalid question at index ${idx}: missing 'question' string.`);
        if (!Array.isArray(q.answers)) throw new Error(`Invalid question at index ${idx}: missing 'answers' array.`);
        if (typeof q.correct !== "number") throw new Error(`Invalid question at index ${idx}: missing 'correct' number.`);
        if (typeof q.theme !== "string") throw new Error(`Invalid question at index ${idx}: missing 'theme' string.`);
    }
}

function initQuestions() {
    if (typeof QUESTIONS === "undefined") {
        throw new Error(
            "QUESTIONS is not defined. Make sure index.html loads questions.js before script.js."
        );
    }
    validateQuestionsShape(QUESTIONS);
    allQuestions = QUESTIONS;
}

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function selectQuestionsByTheme() {
    const themes = [...new Set(allQuestions.map(q => q.theme))];
    selectedQuestions = [];

    if (themes.length === 0) {
        return;
    }

    const targetTotal = 40;
    const perTheme = Math.ceil(targetTotal / themes.length);

    themes.forEach(theme => {
        const themeQuestions = allQuestions.filter(q => q.theme === theme);
        const shuffled = shuffle(themeQuestions);
        selectedQuestions.push(...shuffled.slice(0, perTheme));
    });

    selectedQuestions = shuffle(selectedQuestions).slice(0, targetTotal);
    userAnswers = new Array(selectedQuestions.length).fill(null);
}

function renderCurrentQuestion() {
    const q = selectedQuestions[currentQuestionIndex];
    const selectedAnswer = userAnswers[currentQuestionIndex];

    quizContainer.innerHTML = `
        <div class="question-card animate">
            <div class="question-theme">${q.theme}</div>
            <p class="question-text">${currentQuestionIndex + 1}. ${q.question}</p>
            <div class="answers-list">
                ${q.answers.map((answer, i) => `
                    <div class="answer-option ${selectedAnswer === i ? 'selected' : ''}" data-index="${i}">
                        <input type="radio" name="current-question" value="${i}" ${selectedAnswer === i ? 'checked' : ''}>
                        <span>${answer}</span>
                    </div>
                `).join("")}
            </div>
        </div>
    `;

    // Add click listeners to answer options
    const answerOptions = quizContainer.querySelectorAll(".answer-option");
    answerOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
            e.stopPropagation();
            const index = parseInt(option.dataset.index, 10);
            selectAnswer(index);
        });
    });

    updateNavigation();
}

function selectAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;

    // Update UI directly without re-rendering (prevents animation glitch)
    const answerOptions = quizContainer.querySelectorAll(".answer-option");
    answerOptions.forEach((option, i) => {
        const radio = option.querySelector("input[type='radio']");
        if (i === answerIndex) {
            option.classList.add("selected");
            radio.checked = true;
        } else {
            option.classList.remove("selected");
            radio.checked = false;
        }
    });
}

function updateNavigation() {
    const total = selectedQuestions.length;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} / ${total}`;
    prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === total - 1) {
        nextBtn.hidden = true;
        submitBtn.hidden = false;
    } else {
        nextBtn.hidden = false;
        submitBtn.hidden = true;
    }
}

function goToPrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderCurrentQuestion();
    }
}

function goToNextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        renderCurrentQuestion();
    }
}

function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerText.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function submitQuiz() {
    clearInterval(timerInterval);
    quizEnded = true;

    let score = 0;
    selectedQuestions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            score++;
        }
    });

    const total = selectedQuestions.length;
    const passed = score >= 32;

    resultBanner.hidden = false;
    resultBanner.className = `result-banner ${passed ? 'success' : 'failed'}`;
    resultBanner.innerHTML = `
        ${passed ? '✓ Félicitations ! Vous avez réussi le test.' : '✗ Vous n\'avez pas atteint le score requis.'}
        <span class="score">${score} / ${total}</span>
    `;

    quizContainer.hidden = true;
    quizNav.hidden = true;

    showCorrection();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCorrection() {
    correctionContainer.hidden = false;

    let html = `<h2>Correction du test</h2>`;

    selectedQuestions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.correct;
        const itemClass = isCorrect ? 'correct-answer' : 'wrong-answer';

        html += `
            <div class="correction-item ${itemClass}">
                <div class="q-theme">${q.theme}</div>
                <div class="q-text">${index + 1}. ${q.question}</div>
                <div class="q-answers">
                    ${q.answers.map((answer, i) => {
                        let answerClass = 'neutral';
                        if (i === q.correct) {
                            answerClass = 'correct';
                        } else if (i === userAnswer && userAnswer !== q.correct) {
                            answerClass = 'wrong-selected';
                        }
                        return `<div class="q-answer ${answerClass}">${answer}</div>`;
                    }).join("")}
                </div>
            </div>
        `;
    });

    correctionContainer.innerHTML = html;
}

function startQuiz() {
    quizEnded = false;
    currentQuestionIndex = 0;
    timeLeft = 45 * 60;

    resultBanner.hidden = true;
    correctionContainer.hidden = true;
    correctionContainer.innerHTML = "";

    quizContainer.hidden = false;
    quizNav.hidden = false;

    selectQuestionsByTheme();
    renderCurrentQuestion();
    startTimer();
}

// Event listeners
prevBtn.addEventListener("click", goToPrevQuestion);
nextBtn.addEventListener("click", goToNextQuestion);
submitBtn.addEventListener("click", submitQuiz);
restartBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    startQuiz();
});

// Initialize and start
try {
    initQuestions();
    startQuiz();
} catch (err) {
    console.error(err);
    quizContainer.innerHTML = `<p style="color:#b00020"><strong>Erreur :</strong> ${String(err.message || err)}</p>`;
}
