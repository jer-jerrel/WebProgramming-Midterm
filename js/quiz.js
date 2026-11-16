var correctAnswers = ["b", "c", "a", "b"];
var answerTexts = ["Rembrandt van Rijn", "Amsterdam", "Johannes Vermeer", "2013"];

var questions = document.querySelectorAll(".question");
var quizButton = document.getElementById("quizButton");
var resetButton = document.getElementById("resetButton");
var quizResult = document.getElementById("quizResult");

function checkQuiz() {
  var score = 0;

  for (var i = 0; i < questions.length; i++) {
    var chosen = questions[i].querySelector("input:checked");
    var feedback = questions[i].querySelector(".feedback");

    questions[i].classList.remove("correct");
    questions[i].classList.remove("wrong");

    if (chosen !== null && chosen.value === correctAnswers[i]) {
      score = score + 1;
      questions[i].classList.add("correct");
      feedback.textContent = "Correct!";
    } else {
      questions[i].classList.add("wrong");
      feedback.textContent = "Not quite. The right answer is " + answerTexts[i] + ".";
    }
  }

  quizResult.textContent = "You scored " + score + " out of " + correctAnswers.length + ".";
}

function resetQuiz() {
  for (var i = 0; i < questions.length; i++) {
    var chosen = questions[i].querySelector("input:checked");
    if (chosen !== null) {
      chosen.checked = false;
    }
    questions[i].classList.remove("correct");
    questions[i].classList.remove("wrong");
    questions[i].querySelector(".feedback").textContent = "";
  }
  quizResult.textContent = "";
}

quizButton.addEventListener("click", checkQuiz);
resetButton.addEventListener("click", resetQuiz);
