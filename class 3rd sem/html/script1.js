const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: "Paris",
    level: 1
  },
  {
    question: "What is the result of 12 * 12?",
    options: ["124", "144", "132", "120"],
    answer: "144",
    level: 2
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<src>"],
    answer: "<a>",
    level: 3
  }
];

let currentIndex = 0;
let totalScore = 0;
let selectedAnswers = [];
let timeLeft = 30;
let timer;
let attempted = false;

const quizContainer = document.getElementById("quiz");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");
const timeEl = document.getElementById("time");

function loadQuestion(index) {
  clearInterval(timer);
  timeLeft = 30;
  timeEl.innerText = timeLeft;

  const question = quizData[index];
  quizContainer.innerHTML = `
    <div class="question">${index + 1}. ${question.question}</div>
    <div class="options">
      ${question.options.map(opt => `
        <label><input type="radio" name="option" value="${opt}"> ${opt}</label>
      `).join('')}
    </div>
  `;

  startTimer();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeEl.innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function nextQuestion() {
  // Store selected answer
  const selected = document.querySelector('input[name="option"]:checked');
  const answer = selected ? selected.value : null;
  selectedAnswers.push(answer);

  currentIndex++;
  if (currentIndex < quizData.length) {
    loadQuestion(currentIndex);
  } else {
    endQuiz();
  }
}

function endQuiz() {
  if (attempted) return;
  attempted = true;
  clearInterval(timer);

  // Score Calculation
  selectedAnswers.forEach((ans, i) => {
    if (ans === quizData[i].answer) {
      totalScore += quizData[i].level;
    }
  });

  quizContainer.innerHTML = "";
  nextBtn.disabled = true;
  resultEl.innerText = `Quiz Over! Your Score:" ${totalScore}`;
}

nextBtn.addEventListener("click", () => {
  nextQuestion();
});

// Initialize
loadQuestion(currentIndex);