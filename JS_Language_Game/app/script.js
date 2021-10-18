const question = {
  title: "gato",
  alternatives: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};
console.log(question);

const app = {
  start: function () {
    const alternatives = document.querySelectorAll(".alternatives");

    alternatives.forEach(function (element, index) {
      element.addEventListener("click", function () {
        console.log("check correct answer");
      });
    });
    this.showQuestion(question);
  },

  showQuestion: function (question) {
    const titleDiv = document.getElementById("title");
    const alternatives = document.querySelectorAll(".alternatives");

    titleDiv.textContent = question.title;

    alternatives.forEach(function (element, index) {
      element.textContent = question.alternatives[index];
    });
  },
};

app.start();

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("Clicked!");
});
