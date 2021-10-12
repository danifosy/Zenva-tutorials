const player = {
  age: 99,
  name: "Louie",
  isActive: true,
  outfit: {
    color: "blue",
    size: "M",
    cost: 100,
    isNew: true,
  },
};
console.log(player);

player.isActive = false;
console.log(player);

player.health = 100;
console.log(player);

// delete player.health

console.log(player.outfit.color);

player.outfit.size = "S";
console.log(player);
