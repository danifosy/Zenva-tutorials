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
    this.score = 0;

    //get alternatives
    const alternatives = document.querySelectorAll(".alternative");

    //with .bind(this) you can pass context within or turn your functions into arrow functions

    alternatives.forEach((element, index) => {
      element.addEventListener("click", () => {
        //check correct answers
        this.checkAnswer(index);
      });
    });

    this.updateStats();

    //show first question
    this.showQuestion(questions[this.currentPosition]);
  },

  showQuestion: function (question) {
    //keep track of current question

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
    const currentQuestion = questions[this.currentPosition];

    if (currentQuestion.correctAnswer === userSelected) {
      //correct
      console.log("correct");
      this.score++;
    } else {
      //not correct
      console.log("wrong");
    }
    //refresh stats
    this.updateStats();
    // increase position
    this.increasePosition();

    //show next
    this.showQuestion(questions[this.currentPosition]);
  },

  // if I use a fat arrow here, it doesn't update the question
  increasePosition: function () {
    this.currentPosition++;

    if (this.currentPosition === questions.length) {
      this.currentPosition = 0;
    }
  },

  updateStats: function () {
    let scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Your score: ${this.score}`;
  },
};

// start app
app.start();

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("Clicked!");
});
