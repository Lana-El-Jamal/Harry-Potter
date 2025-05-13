class Wand {
  constructor() {
    this.wands = [wand1, wand2, wand3, wand4, wand5, wand6];
    this.wandWidth = 100;
    this.wandHeight = 300;
    this.spacing = 30;
    this.startX = (width - (this.wands.length * (this.wandWidth + this.spacing) - this.spacing)) / 2;
    this.y = 200;
  }

  display() {
    background(wandbg);

    // Title
    textAlign(CENTER);
    textSize(40);
    fill(0);
    textFont("subFont");
    text("Choose your wand", width / 2, 100);

    // Show wands
    for (let i = 0; i < this.wands.length; i++) {
      let x = this.startX + i * (this.wandWidth + this.spacing);
      image(this.wands[i], x, this.y, this.wandWidth, this.wandHeight);


      if (
        mouseIsPressed &&
        mouseX > x &&
        mouseX < x + this.wandWidth &&
        mouseY > this.y &&
        mouseY < this.y + this.wandHeight
      ) {
        this.selectWand(i);
      }
    }
  }

selectWand(index) {
  console.log("Wand", index + 1, "selected!");
  selectedWandIndex = index; // NEW: Store which wand was chosen
  sceneId = 13;
}

}
