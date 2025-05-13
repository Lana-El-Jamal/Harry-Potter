class SecondQues {
  constructor() {
    this.question = "You meet a strange figure offering you something. What do you accept?";
    this.answers = [
      "A glowing potion that might grant powers",   // Slytherin
      "An old map to a forgotten place",           // Gryffindor
      "A mysterious key with no lock",             // Hufflepuff
      "A worn book full of secrets"                // Ravenclaw
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
    const defaultColor = "#5D4037";
    const hoverColor = "#3E2F26";
    const self = this;

    for (let i = 0; i < this.answers.length; i++) {
      const btn = createButton(this.answers[i]);
      const row = Math.floor(i / 2);
      const col = i % 2;

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

      // Hover effects using arrow functions
      btn.mouseOver(() => {
        btn.style("background-color", hoverColor);
      });

      btn.mouseOut(() => {
        btn.style("background-color", defaultColor);
      });

      // Click behavior
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
    if (index === 0) houseScores.Slytherin++;     // Potion
    else if (index === 1) houseScores.Gryffindor++; // Map
    else if (index === 2) houseScores.Hufflepuff++; // Key
    else if (index === 3) houseScores.Ravenclaw++;  // Book


    for (let btn of this.buttons) {
      btn.hide();
    }

    sceneId = 5; 
  }

  display() {
    image(quizbg, 0, 0, width, height);

    textSize(35);
    textFont(subFont);
    textAlign(CENTER);
    fill(0);
    text(this.question, width / 2, 120);

    if (!this.buttonsCreated && sceneId === 4) {
      this.createButtons();
    }

    for (let btn of this.buttons) {
      if (sceneId === 4) {
        btn.show();
      } else {
        btn.hide();
      }
    }
  }
}
