class FifthQues {
  constructor() {
    this.question = "How would you like to be known to history?";
    this.answers = [
  "The Great",
  "The Wise",
  "The Good",
  "The Bold"
];

    this.buttons = [];
    this.buttonWidth = 300;
    this.buttonHeight = 70;
    this.spacing = 30;
    this.startX = width / 2 - this.buttonWidth - this.spacing / 2;
    this.startY = 250;
    this.buttonsCreated = false;
  }

  createButtons() {
    let defaultColor = "#5D4037";
    let hoverColor = "#3E2723";
    let self = this;

    for (let i = 0; i < this.answers.length; i++) {
      let btn = createButton(this.answers[i]);
      let row = Math.floor(i / 2);
      let col = i % 2;

      btn.position(
        this.startX + col * (this.buttonWidth + this.spacing),
        this.startY + row * (this.buttonHeight + this.spacing)
      );
      btn.size(this.buttonWidth, this.buttonHeight);

      btn.style("background-color", defaultColor);
      btn.style("color", "#FFFFFF");
      btn.style("font-size", "16px");
      btn.style("border", "none");
      btn.style("border-radius", "12px");
      btn.style("font-family", "Georgia");
      btn.style("transition", "all 0.2s ease-in-out");

      btn.mouseOver(() => {
        btn.style("background-color", hoverColor);
      });
      btn.mouseOut(() => {
        btn.style("background-color", defaultColor);
      });

      ((index) => {
        btn.mousePressed(() => {
          self.handleAnswer(index);
        });
      })(i);

      this.buttons.push(btn);
    }

    this.buttonsCreated = true;
  }

  handleAnswer(index) {
  if (index === 0) houseScores.Slytherin++;    // The Great
  else if (index === 1) houseScores.Ravenclaw++; // The Wise
  else if (index === 2) houseScores.Hufflepuff++; // The Good
  else if (index === 3) houseScores.Gryffindor++; // The Bold

  for (let btn of this.buttons) {
    btn.hide();
  }

  sceneId = 8; 
}


  display() {
    image(quizbg, 0, 0, width, height);

    textSize(40);
    textFont(subFont);
    textAlign(CENTER);
    fill(0);
    text(this.question, width / 2, 120);

    if (!this.buttonsCreated && sceneId === 7) {
      this.createButtons();
    }

    for (let btn of this.buttons) {
      if (sceneId === 7) {
        btn.show();
      } else {
        btn.hide();
      }
    }
  }
}
