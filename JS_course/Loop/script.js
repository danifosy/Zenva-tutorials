let fuel = 1000;
let distance = 0;

while (fuel > 0) {
  distance++;
  if (distance >= 100 && distance <= 200) {
    //ends current iteration and jumps into the next
    continue;
  }

  fuel--;

  if (distance === 500) {
    //ends the loop
    break;
  }
}

console.log(distance, fuel);
