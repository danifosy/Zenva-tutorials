function hourToMinutes(hours) {
  let result = hours * 60;
  console.log(result);
  return result;
}

const a = hourToMinutes(10);
const b = hourToMinutes(20);

const dayToHours = function (days) {
  return days * 24;
};

const c = dayToHours(3);
console.log(c);

let balance = 100;
let stock = 50;
let price = 5;

function sellItem(quantity) {
  if (quantity <= stock) {
    stock = stock - quantity;
    balance = balance + price * quantity;
    console.log(
      `purchase completed! New balance is ${balance}, new stock is ${stock}`
    );
  } else {
    console.log("purchase failed");
  }
}

sellItem(10);
sellItem(50);
