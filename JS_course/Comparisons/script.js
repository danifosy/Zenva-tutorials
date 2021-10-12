let item = "engine";
if (item == "engine") {
  console.log("engine");
}

let item1 = "window";
if (item1 != "engine") {
  console.log("not engine");
}

let score = 60;
if (score >= 60) {
  console.log("pass");
} else {
  console.log("not passed");
}

let isEngine = item == "engine";
console.log(isEngine);

// challenge

let balance = 100;
let itemPrice = 10;

if (balance >= itemPrice) {
  console.log("item can be purchased");
  balance = balance - itemPrice;
  console.log(`new balance is ${balance}`);
} else {
  console.log("you don't have enough money");
}

// Boolean Logic

let distance = 80;
let fuel = 100;
//boolean variable
let distanceCondition = distance <= 200 && distance >= 100;
let isEngineBroken = true;

if (isEngineBroken || distance > 200) {
  console.log("You won't make it");
  // if first distance is true and every other  is true, whole statement is true
} else if (distanceCondition && fuel >= 100) {
  console.log("You will make it");
} else if (distance <= 100 && fuel >= 25) {
  console.log("you will make it");
}
