let database = ["turtle", "cat", "dog", "bird"];
console.log(database);
console.log(database.length);

let animal = database[0];
console.log(animal);

database[0] = "dinosaur";
console.log(database);

const last = database[database.length - 1];
console.log(last);

database.push("lizard");
console.log(database);

database.pop();
console.log(database);

// passing by reference

let scores = [10, 20, 10];

let i = 0;

while (i < scores.length) {
  scores[i]++;
  i++;
}

console.log(scores);

for (i = 0; i < scores.length; i++) {
  scores[i]++;
}

console.log(scores);

scores.forEach(function (entry, index) {
  scores[index]++;
  console.log(entry, index);
});

console.log(scores);

let catalog = [
  {
    title: "HTML for Beinngers",
    author: "Zenva",
    copies: 1,
  },
  {
    title: "CSS for Beinngers",
    author: "xyz",
    copies: 1,
  },
  {
    title: "JS for Beinngers",
    author: "Zenva",
    copies: 1,
  },
];

catalog.forEach(function (entry) {
  console.log(entry);
  if (entry.author === "Zenva") {
    entry.copies++;
  }
});

console.log(catalog);

// multidimensional arrays

let a = [
  [1, 2, 3],
  [4, 5, 6, 7],
];

console.log(a);

console.log(a[0][1]);
console.log(a[1][2]);

let terrains = [
  ["desert", "desert", "grass", "grass"],
  ["desert", "grass", "water", "grass"],
  ["grass", "grass", "water", "water"],
  ["grass", "grass", "grass", "grass"],
];

console.log(terrains);
