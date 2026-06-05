const questions = [
    {
        question: "Which language is used for web page styling?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: "CSS"
    },
    {
        question: "Which tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Google", "Microsoft", "Netscape", "Apple"],
        answer: "Netscape"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
    selectedAnswer = "";

    const current = questions[currentQuestion];

    questionElement.textContent = current.question;
    optionsElement.innerHTML = "";

    current.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");

        button.addEventListener("click", () => {
            selectedAnswer = option;

            document.querySelectorAll(".option").forEach(btn => {
                btn.style.background = "ivory";
                btn.style.color = "black";
            });

            button.style.background = "#007bff";
            button.style.color = "white";
        });

        optionsElement.appendChild(button);
    });
}

nextButton.addEventListener("click", () => {
    if (selectedAnswer === "") {
        alert("Please select an answer.");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById("quiz").classList.add("hide");
    document.getElementById("result").classList.remove("hide");

    document.getElementById("score").textContent =
        `${score} out of ${questions.length}`;
}

loadQuestion();