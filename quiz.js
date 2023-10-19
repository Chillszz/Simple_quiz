$(document).ready(function () {
    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: 2,
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Mercury"],
            correctAnswer: 0,
        },
        {
            question: "What is the largest mammal in the world?",
            choices: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
            correctAnswer: 2,
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correctAnswer: 1,
        },
        {
            question: "What is the chemical symbol for gold?",
            choices: ["Ag", "Ge", "Au", "Fe"],
            correctAnswer: 2,
        },
    ];

    const quizContainer = $("#quiz");
    const resultsContainer = $("#results");
    const nextButton = $("#next");
    const questionContainer = $("#question-container");
    const scoreContainer = $("#score");
    let currentQuestion = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    function showQuestion() {
        questionContainer.empty();
        const question = questions[currentQuestion];
        const choices = question.choices.map((choice, i) =>
            `<label data-index="${i}">${choice}</label>`
        );

        questionContainer.append(
            `<div class="question">${question.question}</div>
            <div class="choices">${choices.join("")}</div>`
        );

        questionContainer.find("label").on("click", function () {
            const selected = $(this).data("index");
            if (selected == question.correctAnswer) {
                $(this).addClass("correct");
                correctAnswers++;
            } else {
                $(this).addClass("wrong");
                questionContainer.find(`label[data-index="${question.correctAnswer}"]`).addClass("correct");
                incorrectAnswers++;
            }

            questionContainer.find("label").off("click");
            nextButton.removeClass("hidden");
        });
    }

    function showResults() {
        resultsContainer.empty();
        scoreContainer.text(`Correct: ${correctAnswers} | Incorrect: ${incorrectAnswers}`);
        resultsContainer.append(scoreContainer);
        resultsContainer.append('<p>Thank you for taking the quiz!</p>');
    }

    nextButton.on("click", function () {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
            nextButton.addClass("hidden");
        } else {
            showResults();
        }
    });

    showQuestion();
});
