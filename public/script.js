let questionBlocks = document.querySelectorAll(".question-answer");
let arrow = document.querySelectorAll(".arrow");
let answers = document.querySelectorAll(".answer");
let question = document.querySelectorAll(".question-inactive");
let que = document.querySelectorAll(".border-b");

for (let i = 0; i < questionBlocks.length; i++) {
  questionBlocks[i].addEventListener("click", () => {
    closeAll();
    showAnswer(i);
  });
}

function showAnswer(i) {
  answers[i] = answers[i].classList.toggle("answer-active");
  question[i] = question[i].classList.toggle("question-active");
  arrow[i] = arrow[i].classList.toggle("arrow-active");
  que[i] = que[i].classList.toggle("border-b");
}

function closeAll(){
    for (let i = 0; i < questionBlocks.length; i++) {
        answers[i] = answers[i].classList.remove("answer-active");
        question[i] = question[i].classList.remove("question-active");
        arrow[i] = arrow[i].classList.remove("arrow-active");
        que[i] = que[i].classList.add("border-b");   
    }
}