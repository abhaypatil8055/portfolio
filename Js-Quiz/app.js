var numberOfQuestions = 6;
var countAnswer = 0;
var option = [];
var currentQuestionIndex = 0; // Initialize the index

var selectOption1 = () => {
    resetOption();
    if (option[0].IsCorrect == true) {
        document.querySelector("#firstOption").style.backgroundColor = "Greenyellow";
        countAnswer++;
    } else {
        document.querySelector("#firstOption").style.backgroundColor = "red";
    }
    setTimeout(() => {
        generateQuestion();
    }, 1000);
}

var selectOption2 = () => {
    resetOption();
    if (option[1].IsCorrect == true) {
        document.querySelector("#secondOption").style.backgroundColor = "Greenyellow";
        countAnswer++;
    } else {
        document.querySelector("#secondOption").style.backgroundColor = "red";
    }
    setTimeout(() => {
        generateQuestion();
    }, 1000);
}

var selectOption3 = () => {
    resetOption();
    if (option[2].IsCorrect == true) {
        document.querySelector("#thirdOption").style.backgroundColor = "Greenyellow";
        countAnswer++;
    } else {
        document.querySelector("#thirdOption").style.backgroundColor = "red";
    }
    setTimeout(() => {
        generateQuestion();
    }, 1000);
}

var selectOption4 = () => {
    resetOption();
    if (option[3].IsCorrect == true) {
        document.querySelector("#fourthOption").style.backgroundColor = "Greenyellow";
        countAnswer++;
    } else {
        document.querySelector("#fourthOption").style.backgroundColor = "red";
    }
    setTimeout(() => {
        generateQuestion();
    }, 1000);
}

var resetOption = () => {    // clear the value
    document.querySelector("#firstOption").style.backgroundColor = "";
    document.querySelector("#secondOption").style.backgroundColor = "";
    document.querySelector("#thirdOption").style.backgroundColor = "";
    document.querySelector("#fourthOption").style.backgroundColor = "";
}

var generateQuestion = () => {
    option = [];
    var questionArray = ["What does HTML stand for?", "What is the correct HTML element for the largest heading?", "What does CSS stand for?", "Which property is used to change the background color?", "What is JavaScript?", "Which of the following is not a data type in JavaScript?"];
    if (currentQuestionIndex < questionArray.length) {
        var randomQuestion = questionArray[currentQuestionIndex];
        document.querySelector(".question span").innerHTML = randomQuestion;

        if (randomQuestion === "What does HTML stand for?") {
            option = [
                { value: "A : Hyper Text Markup Langauge", IsCorrect: true },
                { value: "B : Hyper Text Makeup Langauge", IsCorrect: false },
                { value: "C : Hyper Text My Langauge", IsCorrect: false },
                { value: "D : High Text Markup Langauge", IsCorrect: false }
            ];
        }
        if (randomQuestion === "What is the correct HTML element for the largest heading?") {
            option = [
                { value: "A : <h1>", IsCorrect: false },
                { value: "B : <headings>", IsCorrect: false },
                { value: "C : <h6>", IsCorrect: true },
                { value: "D : <large>", IsCorrect: false }
            ];
        }
        if (randomQuestion === "What does CSS stand for?") {
            option = [
                { value: "A : Case Style Sheet", IsCorrect: false },
                { value: "B : Cascading Style Sheet", IsCorrect: true },
                { value: "C : Cascading Style Set", IsCorrect: false },
                { value: "D : Cascading Set Style", IsCorrect: false }
            ];
        }
        if (randomQuestion === "Which property is used to change the background color?") {
            option = [
                { value: "A : color", IsCorrect: false },
                { value: "B : background-color", IsCorrect: true },
                { value: "C : bgcolor", IsCorrect: false },
                { value: "D : back-color", IsCorrect: false }
            ];
        }
        if (randomQuestion === "What is JavaScript?") {
            option = [
                { value: "A : A programming language", IsCorrect: true },
                { value: "B : A markup language", IsCorrect: false },
                { value: "C : A stylesheet language", IsCorrect: false },
                { value: "D : A machine Learning language", IsCorrect: false }
            ];
        }
        if (randomQuestion === "Which of the following is not a data type in JavaScript?") {
            option = [
                { value: "A : Boolean", IsCorrect: false },
                { value: "B : String", IsCorrect: false },
                { value: "C : Integer", IsCorrect: true },
                { value: "D : Null", IsCorrect: false }
            ]
        }
        // Update option values
        document.querySelector("#firstOption").value = option[0].value;
        document.querySelector("#secondOption").value = option[1].value;
        document.querySelector("#thirdOption").value = option[2].value;
        document.querySelector("#fourthOption").value = option[3].value;

        resetOption();

        currentQuestionIndex++;
    } else {
        // Display a message when all questions are answered
        document.querySelector(".question span").innerHTML = `You Gave ${countAnswer} Correct Answers out of 6`;
        document.querySelector(".answers").style.display = "none";
        document.querySelector("#retake").style.display = "block";
    }
}

var retakeQuiz = () => {
    location.reload();
}

$(document).ready(() => {
    generateQuestion();
});
