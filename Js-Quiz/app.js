var NumberOfQuestions = 5;
var countAnswer = 0;
var options = [];
var currentQuestionIndex = 0; // Initialize the index
var selectOption1 = () => {   // onclick Event
    resetOption();
    if (options[0].IsCorrect == true) {
        document.querySelector("#firstOption").style.backgroundColor = "greenyellow";
        countAnswer++;
    }
    else {
        document.querySelector("#firstOption").style.backgroundColor = "red";
    }
    setTimeout(() => {
        generateQuestion();  // automatically move to next question after 1 sec delay
    }, 1000);
}
var selectOption2 = () => {
    resetOption();
    if (options[1].IsCorrect == true) {
        document.querySelector("#secondOption").style.backgroundColor = "greenyellow";
        countAnswer++;
    }
    else {
        document.querySelector("#secondOption").style.backgroundColor = "red";
    }
    setTimeout(() => {
        generateQuestion();  // automatically move to next question after 1 sec delay
    }, 1000);
}
var selectOption3 = () => {
    resetOption();
    if (options[2].IsCorrect == true) {
        document.querySelector("#thirdOption").style.backgroundColor = "greenyellow";
        countAnswer++;
    }
    else {
        document.querySelector("#thirdOption").style.backgroundColor = "red";
    }
    setTimeout(() => {
        generateQuestion(); // automatically move to next question after 1 sec delay
    }, 1000);
}
var selectOption4 = () => {
    resetOption();
    if (options[3].IsCorrect == true) {
        document.querySelector("#forthOption").style.backgroundColor = "greenyellow";
        countAnswer++;
    }
    else {
        document.querySelector("#forthOption").style.backgroundColor = "red";
    }
    setTimeout(() => {
        generateQuestion();   // automatically move to next question after 1 sec delay
    }, 1000);
}

var resetOption = () => {    // clear the value
    document.querySelector("#firstOption").style.backgroundColor = "";
    document.querySelector("#secondOption").style.backgroundColor = "";
    document.querySelector("#thirdOption").style.backgroundColor = "";
    document.querySelector("#forthOption").style.backgroundColor = "";
}

var generateQuestion = () => {
    options = [];
    var questionArray = [  // array of questions
        "HTML Stands for?", "CSS stands for?", "JSON stands for?", "Max value of heading tag is?", "onclick is a?"
    ];

    // Check if there are more questions
    if (currentQuestionIndex < questionArray.length) {
        var randomQuestion = questionArray[currentQuestionIndex];
        document.querySelector(".question span").innerHTML = randomQuestion;

        // Update options based on the question
        if (randomQuestion === "HTML Stands for?") {
            options = [
                { value: "A: Hyper Text Markup Langauge", IsCorrect: true },
                { value: "B: Hyper Text Makeup Langauge", IsCorrect: false },
                { value: "C: Hyper Text My Langauge", IsCorrect: false },
                { value: "D: High Text Markup Langauge", IsCorrect: false }
            ];

        }
        if (randomQuestion === "CSS stands for?") {
            options = [
                { value: "A: Case Style Sheet", IsCorrect: false },
                { value: "B: Cascading Style Sheet", IsCorrect: true },
                { value: "C: Cascading Style Set", IsCorrect: false },
                { value: "D: Cascading Set Style", IsCorrect: false }
            ];
        }
        if (randomQuestion === "JSON stands for?") {
            options = [
                { value: "A: Java Script Object Notation", IsCorrect: true },
                { value: "B: Java Script Over Notation", IsCorrect: false },
                { value: "C: Java Script Object Note", IsCorrect: false },
                { value: "D: Java Search Object Notation", IsCorrect: false }
            ];
        }
        if (randomQuestion === "Max value of heading tag is?") {
            options = [
                { value: "A: H5", IsCorrect: false },
                { value: "B: H6", IsCorrect: true },
                { value: "C: H8", IsCorrect: false },
                { value: "D: H9", IsCorrect: false },
            ];
        }
        if (randomQuestion === "onclick is a?") {
            options = [
                { value: "A: String", IsCorrect: false },
                { value: "B: Tag", IsCorrect: false },
                { value: "C: Array", IsCorrect: false },
                { value: "D: Method", IsCorrect: true }
            ];
        }
        
        // Update option values
        document.querySelector("#firstOption").value = options[0].value;
        document.querySelector("#secondOption").value = options[1].value;
        document.querySelector("#thirdOption").value = options[2].value;
        document.querySelector("#forthOption").value = options[3].value;


        resetOption();

        // Increment the current question index for the next question
        currentQuestionIndex++;
    } else {
        // Display a message when all questions are answered
        var correctAnswer = countAnswer;
        var percentage = correctAnswer / NumberOfQuestions * 100;
        var grade;
        if (percentage > 50) {
            grade = "Conguratulations !! You are on the right Path";
        } else {
            grade = "Oops..You need more parctice";
        }
        document.querySelector("span").innerHTML = `You Gave ${countAnswer} Correct Answers out of 5`;
        document.querySelector(".footer div").style.color = "Green";
        document.querySelector(".footer div").style.fontSize = "2rem";
        document.querySelector(".footer div").innerHTML = `Got Percentage : ${percentage} %`;
        document.querySelector(".footer span").innerHTML = `${grade}`;
        document.querySelector(".retake").style.display = "Block";
        document.querySelector(".main").style.backgroundColor = "white";
        document.querySelector("span").style.color = "red";
        document.querySelector(".answer").style.display = "none";

    }

}
generateQuestion();
var retakeQuiz = () => {
    location.reload();

}