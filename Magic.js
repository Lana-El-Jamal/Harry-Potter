class Magic {
  constructor() {
    this.magicParticles = [];
    this.selectedWandIndex = -1;
    this.buttonWidth = 150;
    this.buttonHeight = 40; 
    this.buttonX = width / 2 - this.buttonWidth / 2; 
    this.buttonY = height - 100; 
    this.buttonColor = color(95, 55, 20);
    this.buttonHoverColor = color(200, 150, 50); 
    this.buttonTextColor = color(255); 
    this.buttonText = "End Magic";
    this.fontSize = 18;
  }

  // Handle wand and particle emission
  display() {
    image(video, 0, 0, width, height);

    //  Cast a Spell text at the top
    this.displayCastSpellText();

    //  a wand has been selected before proceeding using global selectedWandIndex
    if (hands.length > 0 && selectedWandIndex !== -1) {  
      let hand = hands[0]; 

      //  base of the palm (wrist) and the tip of the index finger 
      let wrist = hand.keypoints[0]; // Wrist
      let indexTip = hand.keypoints[3]; // Tip of the index finger (wand tip)

      //  the angle between wrist and index tip for wand rotation
      let angle = atan2(indexTip.y - wrist.y, indexTip.x - wrist.x);

      // Wand properties
      let wandImg = wand.wands[selectedWandIndex]; 
      let wandWidth = 120;
      let wandHeight = 350;

      // Position 
      let wandBaseX = wrist.x;
      let wandBaseY = wrist.y;

      
      push();
      translate(wandBaseX, wandBaseY); 
      rotate(angle);  // Rotate according to hand's angle
      imageMode(CENTER);
      image(wandImg, 0, 0, wandWidth, wandHeight);  
      pop();

      // particles from the bottom of the wand
      let particleX = wandBaseX;
      let particleY = wandBaseY + wandHeight / 2; 

      //  new particles each frame 
      for (let i = 0; i < 5; i++) {
        this.magicParticles.push({
          x: particleX,
          y: particleY,
          size: random(5, 10),
          alpha: 255,  // Starting transparency
          speedX: random(-2, 2),
          speedY: random(-5, -1)
        });
      }
    }

    // Updated  magic particles
    for (let i = this.magicParticles.length - 1; i >= 0; i--) {
      let p = this.magicParticles[i];

      // Updated particle position
      p.x += p.speedX;
      p.y += p.speedY;
      p.alpha -= 5; // Fade out the particle
      p.size *= 0.98; // Shrink the particle

      // particle color
      noStroke();
      fill(0, 0, 255, p.alpha); // Blue color with fading alpha
      ellipse(p.x, p.y, p.size, p.size);

      // Removing particles that are no longer visible
      if (p.alpha <= 0) {
        this.magicParticles.splice(i, 1);
      }
    }

    //button to transtion
    this.displayEndButton();
  }

  
  displayCastSpellText() {
    fill(255); 
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Cast a Spell", width / 2, 50); 
  }

  // Display the "End Magic" button with hover effect
  displayEndButton() {
    // Check if the mouse is over the button for hover effect
    let isHovered = mouseX > this.buttonX && mouseX < this.buttonX + this.buttonWidth && mouseY > this.buttonY && mouseY < this.buttonY + this.buttonHeight;

    // Set the button color based on hover state
    fill(isHovered ? this.buttonHoverColor : this.buttonColor);
    rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight, 10); // Button with rounded corners

    fill(this.buttonTextColor);
    textSize(this.fontSize);
    textAlign(CENTER, CENTER);
    text(this.buttonText, width / 2, this.buttonY + this.buttonHeight / 2); // Centered text inside the button

  
    if (isHovered && mouseIsPressed) {
      this.endMagic();
    }
  }

  
  endMagic() {
    sceneId = 14; 
    console.log("Transitioning to end screen...");
  }
}
