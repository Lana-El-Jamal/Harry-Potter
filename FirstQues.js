class FirstQues {
  constructor() {
    this.question =
      "You are standing at a crossroad. which path will you take?";
    this.answers = [
      "A narrow path through the forest",
      "A well-lit road to a castle",
      "A hidden trail behind a waterfall",
      "A steep staircase into the mountains",
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
    const defaultColor = "#795548";
    const hoverColor = "#4D4035";

 
    //to arrange buttons in 2 columns and 2 rows so I created a loop 
    for (let i = 0; i < this.answers.length; i++) {
      let btn = createButton(this.answers[i]);
      let row = Math.floor(i / 2);
      let col = i % 2;
      
      //this is what I followed
      //i = 0 → row 0, col 0 
      //i = 1 → row 0, col 1 
      //i = 2 → row 1, col 0
      //i = 3 → row 1, col 1
      
     
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
      btn.style("font-family", "potterFont");
      btn.style("transition", "all 0.2s ease-in-out");

      btn.mouseOver(() => {
        btn.style("background-color", hoverColor);
      });

      btn.mouseOut(() => {
        btn.style("background-color", defaultColor);
      });

      btn.mousePressed(() => {
        this.handleAnswer(i);
      });

      this.buttons.push(btn);
    }

    this.buttonsCreated = true;
  }

  handleAnswer(index) {
    if (index === 0) houseScores.Gryffindor++;
    else if (index === 1) houseScores.Ravenclaw++;
    else if (index === 2) houseScores.Hufflepuff++;
    else if (index === 3) houseScores.Slytherin++;

    for (let btn of this.buttons) {
      btn.hide();
    }

    sceneId = 4; 
  }

  display() {
    image(quizbg, 0, 0, width, height);

    textSize(35);
    textFont(subFont);
    textAlign(CENTER);
    fill(0);
    text(this.question, width / 2, 120);

    if (!this.buttonsCreated && sceneId === 3) {
      this.createButtons();
    }

    for (let btn of this.buttons) {
      if (sceneId === 3) {
        btn.show();
      } else {
        btn.hide();
      }
    }
  }
}
