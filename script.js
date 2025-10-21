let quizContainer = document.getElementById("quiz-container");
let questionText = document.getElementById("question-text");
let ul = document.getElementById("options");
let nxtQuesBtn = document.getElementById("next-question");
let resultContainer = document.getElementById("result-container");
let score = document.getElementById("score");
let resetQuizBtn = document.getElementById("reset-quiz");
let startQuizBtn = document.getElementById("start-quiz");

const questions = [
  {
    choices: ["Paris", "London", "Berlin", "Madrid"],
    question: "1.What is the capital of France?",
    correct: "Paris",
  },
  {
    choices: ["Mars", "Venus", "Jupiter", "Saturn"],
    question: "2.Which planet is known as the Red Planet?",
    correct: "Mars",
  },
  {
    choices: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
    question: "3.Who wrote 'Hamlet'?",
    correct: "William Shakespeare",
  },
  {
    question: "4.What is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correct: "Pacific Ocean",
  },
  {
    question: "5.Which element has the chemical symbol 'O'?",
    choices: ["Gold", "Oxygen", "Osmium", "Oxide"],
    correct: "Oxygen",
  },
  {
    question: "6.What is the currency of Japan?",
    choices: ["Yuan", "Yen", "Won", "Dollar"],
    correct: "Yen",
  },
  {
    question: "7.Which country hosted the 2016 Summer Olympics?",
    choices: ["China", "Brazil", "UK", "Russia"],
    correct: "Brazil",
  },
  {
    question: "8.What is the smallest prime number?",
    choices: ["0", "1", "2", "3"],
    correct: "2",
  },
  {
    question: "9.Which gas do plants absorb from the atmosphere?",
    choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    correct: "Carbon Dioxide",
  },
  {
    question: "10.Who painted the Mona Lisa?",
    choices: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correct: "Leonardo da Vinci",
  },
];

let count = 0;
let currIndexValue = 0;

function renderQuestions({choices, question, correct}) {
    ul.innerHTML = "";
    questionText.innerText = question;
    choices.forEach((choice) => {
      let li = document.createElement("li");
      li.innerText = choice;
      li.setAttribute("option", choice);
 
      li.addEventListener("click", () => {
        const name = li.getAttribute("option");
        if (name == correct) {
            count += 1;
        }
        nxtQuesBtn.classList.remove("hidden");
        li.innerText = `${name} (Locked)`;
        disableChoices();
      })
      ul.appendChild(li);
    });
}

function disableChoices() {
    const allChoices = ul.querySelectorAll("li");
    allChoices.forEach((c) => {
        c.style.pointerEvents = "none";
    })
}

function startQuiz() {
  count = 0;
  currIndexValue = 0;
  resultContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  nxtQuesBtn.classList.add("hidden");
  renderQuestions(questions[currIndexValue]);
}

startQuizBtn.addEventListener("click", () => {
  startQuizBtn.remove();
  startQuiz();
});

nxtQuesBtn.addEventListener("click", () => {
    currIndexValue++;
    if(currIndexValue < questions.length) {
        nxtQuesBtn.classList.add("hidden");
        renderQuestions(questions[currIndexValue]);
    } else {
        quizContainer.classList.add("hidden")
        resultContainer.classList.remove("hidden");
        score.innerText = `${count} out of ${questions.length}`
    }
})

resetQuizBtn.addEventListener("click", () => {
    startQuiz();
})