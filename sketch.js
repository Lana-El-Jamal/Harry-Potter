let gryffindorVid, ravenclawVid, hufflepuffVid, slytherinVid;
let sceneId = 0;
let introVideo;
let intro;
let letter;
let firstQues;
let secondQues;
let thirdQues;
let fourthQues;
let fifthQues;
let sixthQues;
let seventhQues;
let eighthQues;
let houseRevealCreated = false;
let wand;
let video;
let handPose;
let hands = [];
let selectedWandIndex = -1;
let magic;
let finalScreen;





let houseScores = { 
  Gryffindor: 0,
  Ravenclaw: 0,
  Hufflepuff: 0,
  Slytherin: 0,
};

let shape;
let potterFont;
let subFont;
let letterVideo;
let letterBg;
let signature;
let quizbg;

function preload() {
  handPose = ml5.handPose();

  introVideo = createVideo("intro.mp4");
  potterFont = loadFont("Lumoslatino.ttf");
  subFont = loadFont("subfont.ttf");
  letterVideo = createVideo("letter.mp4");
  letterBg = loadImage("letter_bg.jpg");
  signature = loadImage("signature.png");
  wandbg = loadImage("wand.png");
  quizbg = loadImage("quizbg.png");
  gryffindorVid = createVideo("gryffindor.mp4");
  ravenclawVid = createVideo("ravenclaw.mp4");
  hufflepuffVid = createVideo("hufflepuff.mp4");
  slytherinVid = createVideo("slytherin.mp4");
  wand1 = loadImage("wand 1.png");
  wand2 = loadImage("wand 2.png");
  wand3 = loadImage("wand 3.png");
  wand4 = loadImage("wand 4.png");
  wand5 = loadImage("wand 5.png");
  wand6 = loadImage("wand 6.png");
  gryffindorVid.hide();
  ravenclawVid.hide();
  hufflepuffVid.hide();
  slytherinVid.hide();
}

function setup() {
  createCanvas(900, 600);
  // Setup webcam capture and pose detection
  video = createCapture(VIDEO);
  video.hide();

  handPose.detectStart(video, gotHands);

  intro = new Intro();
  letter = new Letter();
  content = new Content();
  firstQues = new FirstQues();
  secondQues = new SecondQues();
  thirdQues = new ThirdQues();
  fourthQues = new FourthQues();
  fifthQues = new FifthQues();
  finalScreen=new FinalScreen();
  sixthQues = new SixthQues();
  seventhQues = new SeventhQues();
  eighthQues = new EighthQues();
  magic=new Magic();
  houseReveal = new HouseReveal();
  wand = new Wand();
  
  



  //letterVideo.onended(letterVideoIsDone);
}

function getSortedHouse() {
  let maxScore = 0;
  let chosenHouse = "";

  for (let house in houseScores) {
    if (houseScores[house] > maxScore) {
      maxScore = houseScores[house];
      chosenHouse = house;
    }
  }

  return chosenHouse;
}

function gotHands(results) {
  hands = results;
}

function draw() {
  background(0);

  if (sceneId === 0) {
    intro.display();
  } else if (sceneId === 1) {
    letter.display();
  } else if (sceneId === 2) {
    content.display();
  } else if (sceneId === 3) {
    firstQues.display();
  } else if (sceneId === 4) {
    secondQues.display();
  } else if (sceneId === 5) {
    thirdQues.display();
  } else if (sceneId === 6) {
    fourthQues.display();
  } else if (sceneId === 7) {
    fifthQues.display();
  } else if (sceneId === 8) {
    sixthQues.display();
  } else if (sceneId === 9) {
    seventhQues.display();
  } else if (sceneId === 10) {
    eighthQues.display();
  } else if (sceneId === 11) {
    if (!houseRevealCreated) {
      houseReveal = new HouseReveal();
      houseRevealCreated = true;
    }
    houseReveal.display();
  } else if (sceneId === 12) {
    houseRevealCreated = false;
   wand.display();
  } else if (sceneId === 13) {
    
 magic.display();
  }
   else if (sceneId === 14) {
    
 finalScreen.display();
  }


  function letterVideoIsDone() {
    sceneId = 1;
  }

  function startfirstQues() {
    sceneId = 3;
  
}
}