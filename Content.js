class Content {
  constructor(userName) {
    this.userName = userName;
    this.textLines = [
      "Dear " + this.userName + ",",
      "We are pleased to inform you that you have been accepted at Hogwarts",
      "School of Witchcraft and Wizardry. Your wizard story begins now.",
      "Please prepare for the Sorting Ceremony where your true house shall be ",
      "revealed. We look forward to welcoming you at Hogwarts.",
    ];
    this.currentLine = 0;
    this.timer = 0;
    this.lineDelay = 50;

    this.x = width / 2;
    this.leftX = 100;
    this.rightX = width - 100;
    this.baseY = 250;
    this.lineSpacing = 55;

    this.button = null;
  }

  display() {
    image(letterBg, 0, 0, width, height);

    textSize(35);
    fill(0);
    textFont(subFont);
    textAlign(LEFT);

    let y = this.baseY;

    //all lines starting from left
    for (let i = 0; i <= this.currentLine && i < this.textLines.length; i++) {
      text(this.textLines[i], this.leftX, y + i * this.lineSpacing);
    }

    //  line speed
    if (
      ++this.timer > this.lineDelay &&
      this.currentLine < this.textLines.length
    ) {
      this.currentLine++;
      this.timer = 0;
    }

    //   a button is shown after the text display is done
    if (this.currentLine === this.textLines.length && this.button === null) {
      this.createTransitionButton();
    }

    //  signature
    if (this.currentLine === this.textLines.length) {
      let sincerelyX = 700;
      let sincerelyY = height - 100;

      textAlign(LEFT);
      text("Sincerely,", sincerelyX, sincerelyY);

      let signatureX = 690;
      let signatureY = sincerelyY + 15;
      image(signature, signatureX, signatureY, 150, 80);
    }
  }

  createTransitionButton() {
    this.button = createButton("Start Quiz");
    this.button.position(width / 2 - 150, height - 100);
    this.button.size(200, 60);
    this.button.style("background-color", "#2A130B");
    this.button.style("color", "#FFFFFF");
    this.button.style("font-size", "20px");
    this.button.style("border", "none");
    this.button.style("border-radius", "0px");
    this.button.style("font-family", "subFont");

    // Hover effect
    let defaultColor = "#2A130B";
    let hoverColor = "#4E1B0D";

    this.button.mouseOver(() => {
      this.button.style("background-color", hoverColor);
    });

    this.button.mouseOut(() => {
      this.button.style("background-color", defaultColor);
    });

    this.button.mousePressed(() => {
      this.button.hide();
      sceneId = 3;
    });
  }
}
