// addition

let a = 1 + 1;
console.log(a);

let b = 10;
let c = a + b;
console.log(c);

b = b + 1;
b += 1;
console.log(b);

// substraction

let x = 10 - 5;
console.log(x);

let y = b + x;
console.log(y);

x -= 1;
console.log(x);

// multiplication

let unitPrice = 2;
let units = 10;
let total = unitPrice * units;
console.log(total);

// division

let n = 10;
let result = n / 2;
console.log(result);

// modulus

let r = 5 % 2;
console.log(r);

let baseWeight = 10000;
let foodWeight = 100;
let passangerWeight = 10;

let fuelUnitWeight = 2;
let fuelUnits = 100;

const fuelWeight = fuelUnitWeight * fuelUnits;

const totalWeight = baseWeight + foodWeight + passangerWeight + fuelWeight;
console.log(totalWeight);
