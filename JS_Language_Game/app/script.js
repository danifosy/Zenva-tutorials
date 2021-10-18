let question = {
  title: "gato",
  alternatives: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};
console.log(question);

showQuestion(question);

function showQuestion(q) {
  let titleDiv = document.getElementById("title");
  let alternatives = document.querySelectorAll(".alternatives");

  titleDiv.textContent = q.title;

  alternatives.forEach(function (element, index) {
    element.textContent = q.alternatives[index];
  });
}
