# Quiz Game

**creating a quiz game reqiures the following steps.**
***Step 1: Set up the HTML structure***
***Step 2: Define the questions and answers***
***Step 3: Display questions and handle user input***
***Step 4: Style your quiz game***
***Step 5: Test your quiz game***

## Step 1: Set up the HTML structure
Create an HTML file (index.html) with the standard boilerplate, then add the basic structure for your quiz game.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## Step 2: Define the questions and answers
In your JavaScript file (quiz.js), define an array of quiz questions along with their choices and correct answers:
- This array stores objects, each representing a question in the trivia game.
   - Each question object contains:
     - `question`: The text of the question.
     - `choices`: An array of strings representing the possible choices for the answer.
     - `correctAnswer`: A string representing the correct answer among the choices.

## Step 3: Display questions and handle user input
On javascript, write code to display questions and user input:

2. **Variables**:
   - `questionElement`, `choicesElement`, `submitButton`, and `resultElement`: These variables store references to HTML elements in the document. They are obtained using `document.getElementById()`.
   - `currentQuestionIndex`: This variable keeps track of the index of the current question being displayed.
   - `score`: This variable keeps track of the player's score.


## Step 4: Style your quiz game
Create a CSS file (quiz.css) to style your quiz game:

## Step 5: Test your quiz game
Test your quiz game by opening the HTML file in a web browser. The questions should be displayed one by one. After answering all questions, the final score will be shown.

## This is just a draft/
![quize-game draft alt text](Quiz-game.jpg)



