class FinalScreen {
  constructor() {
    this.buttonWidth = 150;
    this.buttonHeight = 50;
    this.buttonX = width / 2 - this.buttonWidth / 2;
    this.buttonY = height - 150;
    this.buttonColor = color(95, 55, 20);
    this.buttonHoverColor = color(200, 150, 50);
    this.buttonTextColor = color(255);
    this.buttonText = "Replay";
    this.fontSize = 18;
  }

  display() {
    background(letterBg);

    this.displayCompletionMessage();

    this.displayReplayButton();
  }

  displayCompletionMessage() {
    fill(0);
    textFont(subFont);
    textSize(70);
    textAlign(CENTER, CENTER);
    text("Your Magic is Complete!", width / 2, height / 2 + 20);
  }

  //hoover effect
  displayReplayButton() {
    let isHovered =
      mouseX > this.buttonX &&
      mouseX < this.buttonX + this.buttonWidth &&
      mouseY > this.buttonY &&
      mouseY < this.buttonY + this.buttonHeight;

    fill(isHovered ? this.buttonHoverColor : this.buttonColor);
    rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight, 10);

    fill(this.buttonTextColor);
    textSize(this.fontSize);
    textAlign(CENTER, CENTER);
    text(this.buttonText, width / 2, this.buttonY + this.buttonHeight / 2);

    if (isHovered && mouseIsPressed) {
      this.replayGame();
    }
  }

  replayGame() {
    if (this.button) {
      this.button.hide();
    }

    sceneId = 0;
    console.log("Restarting the game...");
  }
}
