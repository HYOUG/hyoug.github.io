// variables
var rootElement = document.documentElement;
var scrollButton = document.getElementById("scrollButton");
var darkModeSwitch = document.getElementById("darkModeSwitch");
var background = document.getElementById("wrapper");
var problematics = document.getElementById("problematic");
var favicon = document.getElementById("favicon")
var darkModeEnabled = false;
var charList = [];
var konamiCodeChars = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var musics = [];
musics.push(new Audio("sounds/doom_theme.mp3"));
musics.push(new Audio("sounds/pac_man_theme.mp3"));
musics.push(new Audio("sounds/tetris_theme.mp3"));
musics.push(new Audio("sounds/super_mario_bros_theme.mp3"));


// utils functions
function randomItem(array) {
  return array[Math.floor(Math.random()* array.length)]
}


// event handlers functions
function scrollToTop() {
  rootElement.scrollTo({top: 0, behavior: "smooth"});
}

function darkMode() {
  darkModeEnabled = !darkModeEnabled;

  if (darkModeEnabled) {
    darkModeSwitch.style.outline = "none"
    darkModeSwitch.src = "images/dark_mode_logo_off.png";
    background.style.backgroundImage = "linear-gradient(to bottom, rgb(0, 0, 10), rgb(44, 47, 51))";
    document.body.style.color = "rgb(177, 177, 177)";}
    
    else {
    darkModeSwitch.style.outline = "7px solid white";
    darkModeSwitch.style.outlineOffset = "-10px"
    darkModeSwitch.src = "images/dark_mode_logo_on.png";
    background.style.backgroundImage = "linear-gradient(to bottom, rgb(0, 208, 255), rgb(0, 101, 255))";
    document.body.style.color = "rgb(255, 255, 255)";
  }
}

function konamiCode(event) {
  charList.push(event.keyCode)

  if (charList.length > 10) {
    charList = charList.slice((charList.length-10), (charList.length-1+1));
  }

  if (_.isEqual(charList, konamiCodeChars)) {
    randomItem(musics).play();
    background.style.backgroundImage = "linear-gradient(to bottom, rgb(0, 208, 255), rgb(0, 101, 255))";
    document.body.style.color = "green";
    document.body.style.fontFamily = "Gaming";
    problematics.style.fontFamily = "Gaming";
    favicon.href = "images/favicon_8bits.ico";

  }
}


// main program
scrollButton.addEventListener("click", scrollToTop);
darkModeSwitch.addEventListener("click", darkMode);
document.addEventListener("keydown", konamiCode)