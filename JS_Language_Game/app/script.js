//object for question
const question = {
  title: "gato",
  alternatives: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};
console.log(question);

const app = {
  start: function () {
    //get alternatives
    const alternatives = document.querySelectorAll(".alternative");

    alternatives.forEach(function (element, index) {
      element.addEventListener("click", function () {
        //check correct answers
        this.checkAnswer(index);
        console.log("check correct answer");
      });
    });
    //show first question
    this.showQuestion(question);
  },

  showQuestion: function (question) {
    //keep track of current question
    this.currentQuestion = question;

    //show question title
    const titleDiv = document.getElementById("title");
    titleDiv.textContent = question.title;

    //show alternatives
    const alternatives = document.querySelectorAll(".alternative");

    alternatives.forEach(function (element, index) {
      element.textContent = question.alternatives[index];
    });
  },

  checkAnswer: function (userSelected) {
    if (this.currentQuestion.correctAnswer === userSelected) {
      //correct
    } else {
      //not correct
    }
  },
};

// start app
app.start();

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("Clicked!");
});
