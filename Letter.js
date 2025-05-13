class Letter {
  constructor() {
    this.input = createInput("");
    this.input.position(350, 360);
    this.input.attribute("placeholder", "Enter your name");
    this.input.hide();

    // Input styling
    this.input.style("font-size", "20px");
    this.input.style("padding", "10px");
    this.input.style("text-align", "center");
    this.input.style("font-family", "potterFont");
    this.input.style("border", "2px solid #F5DEB3");
    this.input.style("background-color", "#F5DEB3");
    this.input.style("color", "#4B3621");
    this.input.style("outline", "2px solid #795548");

    this.videoPlayed = false;
    this.timer = 0;

    this.showInputDelay = 5000; // 5 seconds
    this.showButtonDelay = 7000; // 7 seconds

    this.openLetterButton = createButton("Open Letter");
    this.openLetterButton.position(400, 500);
    this.openLetterButton.hide();
    this.openLetterButton.mousePressed(() => this.transitionToContent());

    // Button styling
    this.openLetterButton.style("background-color", "#4B3621");
    this.openLetterButton.style("color", "#F5DEB3");
    this.openLetterButton.style("font-size", "20px");
    this.openLetterButton.style("font-family", "PotterFont");
    this.openLetterButton.style("border", "2px solid #F5DEB3");
    this.openLetterButton.style("padding", "10px 20px");
    this.openLetterButton.style("border-radius", "8px");
    this.openLetterButton.style("cursor", "pointer");
    this.openLetterButton.style("text-align", "center");

    // Hover effect
    this.openLetterButton.mouseOver(() => {
      this.openLetterButton.style("background-color", "#795548");
    });
    this.openLetterButton.mouseOut(() => {
      this.openLetterButton.style("background-color", "#4B3621");
    });
  }

  display() {
    if (!this.videoPlayed) {
      letterVideo.play();
      letterVideo.hide();
      this.videoPlayed = true;
    }
    image(letterVideo, 0, 0, width, height);

    if (this.videoPlayed) {
      this.timer += deltaTime;

      if (this.timer >= this.showInputDelay) {
        this.input.show();
      }

      if (this.timer >= this.showButtonDelay) {
        this.openLetterButton.show();
      }
    }
  }

  transitionToContent() {
    const userName = this.input.value().trim(); 
    this.input.hide();
    this.openLetterButton.hide();
    content = new Content(userName);
    sceneId = 2;
  }
}
