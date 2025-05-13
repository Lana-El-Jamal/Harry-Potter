class ThirdQues {
  constructor() {
    this.question = "You discover a secret door in Hogwarts. What do you hope is inside?";
    this.answers = [
      "A hidden library filled with ancient books",
      "A vault with magical artifacts and spells",
      "A warm room with cozy chairs and enchanted tea",
      "A training arena for dueling and adventure"
    ];
    this.buttons = [];
    this.buttonWidth = 300;
    this.buttonHeight = 70;
    this.spacing = 30;
    this.startX = width / 2 - this.buttonWidth - this.spacing / 2;
    this.startY = 250;
    this.buttonsCreated = false; // Prevent re-creating buttons
  }
createButtons() {
  var defaultColor = "#795548";
  var hoverColor = "#4D4035";
  var self = this;

  for (var i = 0; i < this.answers.length; i++) {
    var btn = createButton(this.answers[i]);
    var row = Math.floor(i / 2);
    var col = i % 2;

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

    // Hover effects with proper button reference
    btn.mouseOver(function () {
      this.style("background-color", hoverColor);
    });

    btn.mouseOut(function () {
      this.style("background-color", defaultColor);
    });

    // Click event
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
    if (index === 0) houseScores.Ravenclaw++;  // Hidden library -> Ravenclaw
    else if (index === 1) houseScores.Slytherin++;  // Vault with artifacts -> Slytherin
    else if (index === 2) houseScores.Hufflepuff++;  // Cozy room -> Hufflepuff
    else if (index === 3) houseScores.Gryffindor++;  // Training arena -> Gryffindor

    // Hide the buttons after selection
    for (let btn of this.buttons) {
      btn.hide();
    }

    // Switch to the next scene (results or next question)
    sceneId = 6; 
  }

  display() {
    image(quizbg, 0, 0, width, height);

    textSize(35);
    textFont(subFont);
    textAlign(CENTER);
    fill(0);
    text(this.question, width / 2, 120);

    if (!this.buttonsCreated && sceneId === 5) { // Fix to check sceneId === 5
      this.createButtons();
    }

    
    for (let btn of this.buttons) {
      if (sceneId === 5) { // Fix to check sceneId === 5
        btn.show();
      } else {
        btn.hide();
      }
    }
  }
}
