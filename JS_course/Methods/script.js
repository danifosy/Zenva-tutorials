const player = {
  health: 100,
  fun: 0,
  eat: function (food) {
    if (food === "apple") {
      // this gives the context
      // context inside a method is the object that owns method
      this.health += 10;
    } else if (food === "candy") {
      this.health -= 5;
      this.fun += 5;
    }
  },
  play: function () {
    this.fun += 10;
  },
};

player.play();
console.log(player);

player.eat("apple");
console.log(player);
