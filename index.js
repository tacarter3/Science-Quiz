//let quizQuestion = ['What is the lightest element?', 'What is the hardest substance in the human body?']

// quizQuestion.textContent = document.createElement('question');


// newQuestion = document.createElement(".question");
// newQuestion.innerText = quizQuestion;
// document.body.appendChild(newQuestion);

//document.getElementsByClassName("question")[0].textContent = quizQuestion;

// Array with questions

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value + "<br>";
// }

// random question picker
//const months = ["January", "February", "March", "April", "May", "June", "July"];

// const random = Math.floor(Math.random() * months.length);
// console.log(random, months[random]);

const quizQuestion = ['Question 1?', 'Question 2?', 'Question 3?', 'Question 4?', 'Question 5?']

const randomQues = Math.floor(Math.random() * quizQuestion.length);
console.log(quizQuestion[randomQues])

// newQuestion = document.createElement(".question");
// newQuestion.innerText = quizQuestion;
// document.body.appendChild(newQuestion);

document.getElementsByClassName("question")[0].textContent = quizQuestion[randomQues];



// Iterate through question choices

// Array with answer choices

const quizAnswer = ['Answer 1']
//  Iterate through answer choices
const answerChoices = Math.floor(Math.random() * quizAnswer.length);
document.getElementsByClassName("answer1")[0].textContent = quizAnswer[answerChoices];

// Associate question with correct answer



// Event listener for player question response


// Visual response to correct answer

// Audio response to correct answer

// Visual response to incorrect answer 

// Audio response to incorrect answer

// Delay to next question

// Card flip with answer

// Animation transition to new card/question

// Response to new question