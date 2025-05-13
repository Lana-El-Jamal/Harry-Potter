class Intro {
  constructor() {
    this.startButton = createButton("Start your journey");
    this.startButton.position(335, 500);

    // Button style
    this.startButton.style("background-color", "#4B3621");
    this.startButton.style("color", "#F5DEB3");
    this.startButton.style("font-size", "20px");
    this.startButton.style("font-family", "PotterFont");
    this.startButton.style("padding", "10px 25px");
    this.startButton.style("border", "2px solid #F5DEB3");
    this.startButton.style("transition", "all 0.4s ease-in-out");

    // Hover effect
    this.startButton.mouseOver(() => {
      this.startButton.style("background-color", "#6b4226");
    });
    this.startButton.mouseOut(() => {
      this.startButton.style("background-color", "#4B3621");
    });

    this.startButton.mousePressed(() => this.transitionToLetter());
    this.startButton.hide();

    this.videoStarted = false;
    this.buttonShown = false;
  }

  display() {
    if (!this.videoStarted) {
      introVideo.play();

      this.videoStarted = true;

     
      setTimeout(() => {
        this.startButton.show();
        this.buttonShown = true;
      }, 5000);
    }

    image(introVideo, 0, 0, width, height);
  }

  transitionToLetter() {
    this.startButton.hide();
    introVideo.hide();
    letter = new Letter(); 
    sceneId = 1;
  }
  
   // Method to ensure the button is shown when returning to scene 0
  showStartButton() {
    if (!this.buttonShown) {
      this.startButton.show();
      this.buttonShown = true;
    }
  }

  
  
  
  
  
  
  
  
  
}
