var divlen = document.querySelectorAll(".song").length;

for (var i = 0; i < divlen; i++) {
  var qu = document
    .querySelectorAll(".song")
    [i].addEventListener("click", playsong);
  var que = document
    .querySelectorAll(".song")
    [i].addEventListener("dblclick", stopsong);
}

var song1 = new Audio();
song1.src =
  "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg";

var song2 = new Audio();
song2.src =
  "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3";

var song3 = new Audio();
song3.src =
  "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg";

var song4 = new Audio();
song4.src =
  "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3";

var song5 = new Audio();
song5.src =
  "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg";

var song6 = new Audio();
song6.src =
  "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3";

var song7 = new Audio();
song7.src =
  "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg";

var song8 = new Audio();
song8.src =
  "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3";

var song9 = new Audio();
song9.src =
  "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3";

var song10 = new Audio();
song10.src =
  "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3";

function playsong() {
  var songid = this.innerHTML;

  switch (songid) {
    case "a":
      song1.play();
      break;

    case "b":
      song2.play();
      break;

    case "c":
      song3.play();
      break;

    case "d":
      song4.play();
      break;

    case "e":
      song5.play();
      break;

    case "f":
      song6.play();
      break;

    case "g":
      song7.play();
      break;

    case "h":
      song8.play();
      break;

    case "i":
      song9.play();
      break;

    case "j":
      song10.play();
      break;

    default:
      console.log("ggg");
  }
}

function stopsong() {
  var songid = this.innerHTML;
  switch (songid) {
    case "a":
      song1.pause();
      break;

    case "b":
      song2.pause();
      break;

    case "c":
      song3.pause();
      break;

    case "d":
      song4.pause();
      break;

    case "e":
      song5.pause();
      break;

    case "f":
      song6.pause();
      break;

    case "g":
      song7.pause();
      break;

    case "h":
      song8.pause();
      break;

    case "i":
      song9.pause();
      break;

    case "j":
      song10.pause();
      break;

    default:
      console.log("ggg");
  }
}
