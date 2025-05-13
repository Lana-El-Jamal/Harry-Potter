class SeventhQues {
  constructor() {
    this.question = "Which magical creature would you most want as a companion?";
    this.answers = [
      "Phoenix",         // Gryffindor
      "Dragon",          // Slytherin
      "Hippogriff",      // Ravenclaw
      "Niffler"          // Hufflepuff
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
    // answer based on which button was pressed
    if (index === 0) houseScores.Gryffindor++;  // Phoenix
    else if (index === 1) houseScores.Slytherin++; // Dragon
    else if (index === 2) houseScores.Ravenclaw++; // Hippogriff
    else if (index === 3) houseScores.Hufflepuff++; // Niffler

    // Hide the buttons after an answer is selected
    for (let btn of this.buttons) {
      btn.hide();
    }

    sceneId = 10; 
  }

  display() {
    image(quizbg, 0, 0, width, height);

    textSize(35);
    textFont(subFont);
    textAlign(CENTER);
    fill(0);
    text(this.question, width / 2, 120);

    if (!this.buttonsCreated && sceneId === 9) {  
      this.createButtons();
    }

    
    for (let btn of this.buttons) {
      if (sceneId === 9) {
        btn.show();
      } else {
        btn.hide();
      }
    }
  }
}
