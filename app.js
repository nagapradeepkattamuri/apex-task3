const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "HighText Machine Language"
    ],
    correct: 0
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    correct: 2
  },
  {
    question: "What does DOM stand for in JavaScript?",
    options: [
      "Document Object Model",
      "Display Object Management",
      "Digital Ordinance Model",
      "Data Object Management"
    ],
    correct: 0
  },
  {
    question: "Which symbol is used for comments in CSS?",
    options: ["//", "#", "<!-- -->", "/* */"],
    correct: 3
  },
  {
    question: "Which method is used to fetch an API in JavaScript?",
    options: ["getAPI()", "retrieve()", "fetch()", "request()"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.querySelector(".quiz-question").textContent = q.question;
  const optionsDiv = document.querySelector(".quiz-options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].correct;
  if (selected === correct) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-question").textContent = "Quiz Completed!";
    document.querySelector(".quiz-options").innerHTML = "";
    document.querySelector(".quiz-result").textContent = `Final Score: ${score}/${questions.length}`;
  }
}

loadQuestion();

async function fetchWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "917b086bdbbc9de57605bd627ab71091"; 
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();
    if (data.cod === 200) {
      document.getElementById("weatherResult").textContent =
        `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
    } else {
      document.getElementById("weatherResult").textContent = "City not found.";
    }
  } catch (error) {
    document.getElementById("weatherResult").textContent = "Error fetching data.";
  }
}
