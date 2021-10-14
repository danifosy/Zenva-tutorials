let fuel = 1000;
let distance = 0;

while (fuel > 0) {
  distance++;
  if (distance >= 100 && distance <= 200) {
    //ends current iteration and jumps to top line
    continue;
  }

  fuel--;

  if (distance === 500) {
    //ends the loop
    break;
  }
}

console.log(distance, fuel);

let years = 10;

let population = 100;
// population = population * 1.05

// let i = 0;

// while (i < 10) {
//   population *= 1.05;
//   i++;
// }

// console.log(population);

for (let i = 0; i < 10; i++) {
  population *= 1.05;
}

console.log(population);
