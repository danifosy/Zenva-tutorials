const questions = [
  {
    title: "gato",
    alternatives: ["dog", "cat", "bird", "fish"],
    correctAnswer: 1,
  },
  {
    title: "ave",
    alternatives: ["mouse", "hamster", "lizard", "bird"],
    correctAnswer: 3,
  },
  {
    title: "rata",
    alternatives: ["cat", "fish", "rat", "shark"],
    correctAnswer: 2,
  },
  {
    title: "mosca",
    alternatives: ["fly", "puma", "fish", "dog"],
    correctAnswer: 0,
  },
];

const app = {
  start: function () {
    this.currentPosition = 0;

    //get alternatives
    const alternatives = document.querySelectorAll(".alternative");

    //with .bind(this) you can pass context within or turn your functions into arrow functions

    alternatives.forEach((element, index) => {
      element.addEventListener("click", () => {
        //check correct answers
        this.checkAnswer(index);
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
      console.log(this);

      element.textContent = question.alternatives[index];
    });
  },

  checkAnswer: function (userSelected) {
    if (this.currentQuestion.correctAnswer === userSelected) {
      //correct
      console.log("correct");
    } else {
      //not correct
      console.log("wrong");
    }
  },
};

// start app
app.start();

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("Clicked!");
});
