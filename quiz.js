// Create questionAndAnswer array that stores objects representing a question in the trivia game.
// question: ""
// choices: ["","","",""]
// correctAnswer: ""

// Add variable that keeps track of player score and question being displayed.

// Create variables to store references to HTML elements.
// `questionElement`, `choicesElement`, `submitButton`, and `resultElement`:
// add cache element reference `document.getElementById()`

/*--------------------------------------------- Constants -----------------------------------------------*/

const questionAndAnswer = [
    {
        question: "What is the chemical formula for water?",
        choices: ["C6H1206", "H2O", "CO2", "H2O2"],
        correctAnswer: "H2O"
    },
    {
        question: "What is the largest human organ?",
        choices: ["Skin", "Liver", "Heart", "Lungs"],
        correctAnswer: "Skin"
    },
    
    {
        question: "There are apple pie and cherry pie but this Pi will have you counting...",
        choices: ["Cheese", "Swedish", "3.14", "not real"],
        correctAnswer: "3.14"
    },
    {
        question: "what continent will you not find bees?",
        choices: ["Europe","Asia","Antarctica","Australia"],
        correctAnswer: "Antarctica"
    },
    {
        question: "What fruit has the highest concentration of Vitamin C per serving?",
        choices: ["Orange", "Guava", "Kiwi", "Grapefruit"],
        correctAnswer: "Guava"
    },
    {
        question: "Which oath of ethics taken by doctors is named after an Ancient Greek physician?",
        choices: ["The Hippocratic Oath","The Oath of Devotion","The Coronation Oath","Oath Of Honor"],
        correctAnswer: "The Hippocratic Oath"
    },
    {
        question: "What does DNA stand for?",
        choices: ["National Dyslexic Association", "Ddala Nze Akuzala", "Dark Native Apostle", "Deoxyribonucleic acid"],
        correctAnswer: "Deoxyribonucleic acid"
    },
    {
        question: "In what year was Gray’s Anatomy first published?",
        choices: ["1920", "2000", "1858", "2020"],
        correctAnswer: "1858"
    },
    {
        question: "The medulla oblongata is found in which part of the body?",
        choices: ["Brain", "Heart", "Kidney", "Lungs"],
        correctAnswer: "Brain"
    },
    {
        question: "What was the first effective antibiotic used in medicine?",
        choices: ["Macrolides", "Clindamycin", "Sulfonamide", "Penicillin"],
        correctAnswer: "Penicillin"
    }
];

/*--------------------------------------------------- Variables --------------------------------------------*/

let currentQuestionIndex = 0;
let score = 0;

const audio = document.getElementById('audio');
const muteButton = document.getElementById('muteButton');

muteButton.addEventListener('click', function() {
    audio.muted = !audio.muted;
    // Change button text based on muted state
    if (audio.muted) {
        muteButton.textContent = "🔊"; // Unmuted state
    } else {
        muteButton.textContent = "🔇"; // Muted state
    }
});


/*------------------------------------------- Cached Element References --------------------------------------*/

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");


 /*-------------------------------------- Functions And Event Listeners -------------------------------------*/


function displayQuestion() {
    const currentQuestion = questionAndAnswer[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    resultElement.textContent = "";

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", () => checkAnswer(choice));
        choicesElement.appendChild(choiceButton);
    });
}

// Create function to check the selected answer
function checkAnswer(selectedAnswer) {
    const currentQuestion = questionAndAnswer[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++; // Increment score if the answer is correct
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect!";
    }
    
    choicesElement.querySelectorAll("button").forEach(button => {
        button.removeEventListener("click", checkAnswer);
        button.disabled = true;
    });
   submitButton.disabled = true; // Disable submit button after answering
    // Move to the next question or end the game
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questionAndAnswer.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }, 1000);
}

// Function to display the final result
function displayResult() {
    questionElement.textContent = ""; // Clear question area
    choicesElement.innerHTML = ""; // Clear choices area
    resultElement.textContent = `You scored ${score} out of ${questionAndAnswer.length}!`;
}

// Display the first question when the page loads
displayQuestion();

