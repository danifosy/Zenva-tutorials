const question = {
  title: "gato",
  alternatives: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};
console.log(question);

showQuestion(question);

function showQuestion(q) {
  const titleDiv = document.getElementById("title");
  const alternatives = document.querySelectorAll(".alternatives");

  titleDiv.textContent = q.title;

  alternatives.forEach(function (element, index) {
    element.textContent = q.alternatives[index];

    element.addEventListener("click", function () {
      if (q.correctAnswer === index) {
        console.log("correct answer");
      } else {
        console.log("wrong answer");
      }
    });
  });
}

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("Clicked!");
});
