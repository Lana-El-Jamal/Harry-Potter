class HouseReveal {
  constructor() {
    this.house = getSortedHouse();
    this.video = null;
    this.hasStarted = false;
    this.startButton = null;
    this.videoPlayed = false; 
  }

  startReveal() {
    if (this.hasStarted) return;
    this.hasStarted = true;

    // Assigned video based on house
    if (this.house === "Gryffindor") {
      this.video = gryffindorVid;
    } else if (this.house === "Ravenclaw") {
      this.video = ravenclawVid;
    } else if (this.house === "Hufflepuff") {
      this.video = hufflepuffVid;
    } else if (this.house === "Slytherin") {
      this.video = slytherinVid;
    }

   
    if (this.video && !this.videoPlayed) {
      this.video.loop(false);  
      this.video.show();
      this.video.position(5, 0);
      this.video.size(width, height);
      this.video.play();
      this.videoPlayed = true;  // to prevent replaying
    }

  // Button styles
this.startButton = createButton("Choose your wand");
this.startButton.style("background-color", "#53382E"); 
this.startButton.style("color", "#FFFFFF"); 
this.startButton.style("font-size", "15px"); 
this.startButton.style("border", "none"); 
this.startButton.style("border-radius", "20px"); 
this.startButton.style("font-family", "subFont"); 
this.startButton.style("padding", "15px 30px");
this.startButton.style("transition", "all 0.3s ease-in-out"); 
this.startButton.hide(); 


this.startButton.position(342, 500);

// Hover effect
this.startButton.mouseOver(() => {
  this.startButton.style("background-color", "#8F6E56"); 
  this.startButton.style("cursor", "pointer"); 
});

this.startButton.mouseOut(() => {
  this.startButton.style("background-color", "#53382E"); 
});

// Button action
this.startButton.mousePressed(() => this.transitionToScene12());
  }
  display() {
 
    if (!this.hasStarted) {
      this.startReveal();
    }


    
    if (this.video && this.video.time() < this.video.duration() && !this.videoPlayed) {
      image(this.video, 0, 0, width, height);  
    }

   
    if (this.video && this.video.time() >= this.video.duration() - 0.1 && this.videoPlayed) {
      this.videoEnded();
    }

   //transition
    if (sceneId === 12 && this.video) {
      this.video.hide();  
    }
  }

  videoEnded() {

    if (this.video) {
      this.video.pause(); 
    }

   
    this.startButton.show();
  }

  transitionToScene12() {
   
    sceneId = 12;
    this.startButton.hide();  
    this.video.hide();        
  }
}
