// variables
var rootElement = document.documentElement;

var favicon = document.getElementById("favicon")
var background = document.getElementById("wrapper");
var darkModeSwitch = document.getElementById("darkModeSwitch");
var scrollButton = document.getElementById("scrollButton");
var websiteLogo = document.getElementById("websiteLogo");
var categoryShortcuts = document.getElementsByClassName("categoryShortcut");
var infoTitles = document.getElementsByClassName("infoTitle");
var infoProblematics = document.getElementsByTagName("h3");

var darkModeEnabled = false;
var konamiCodeChars = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var charList = [];
var musics = [];
var clickableElList = [];

musics.push(new Audio("sounds/doom_theme.mp3"));
musics.push(new Audio("sounds/pac_man_theme.mp3"));
musics.push(new Audio("sounds/tetris_theme.mp3"));
musics.push(new Audio("sounds/super_mario_bros_theme.mp3"));

clickableElList.push(document.getElementsByTagName("a"));
clickableElList.push(document.getElementById("websiteLogo"));
clickableElList.push(document.getElementById("darkModeSwitch"));
clickableElList.push(document.getElementById("scrollButton"));


// utils functions
function randomItem(array) {
  return array[Math.floor(Math.random()* array.length)];
}


// event handlers functions
function scrollToTop() {
  rootElement.scrollTo({top: 0, behavior: "smooth"});
}

function scrollToEl(el) {
  el.scrollIntoView({behavior: "smooth"});
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

    favicon.href = "images/icons/favicon_8bits.ico";

    background.style.backgroundImage = "none";
    background.style.backgroundColor = "rgb(0, 0, 0)";
    document.body.style.color = "rgb(0, 255, 0)";

    document.body.style.fontFamily = "Gaming";
    for (i=0; i < infoProblematics; i++) {
      console.log(infoProblematics[i]);
      infoProblematics[i].style.fontFamily = "Gaming";
    }

    document.body.style.cursor = "url('images/cursors/windows_xp/Cursor_1.cur'), auto";
    for (i=0; i < clickableElList; i++) {
      clickableElList[i].style.cursor = "url('images/cursors/windows_xp/Cursor_14.cur'), auto";
    }

    scrollButton.style.borderRadius = "0";
    darkModeSwitch.style.borderRadius = "0";
    for (i=0; i < categoryShortcuts.length; i++) {
      categoryShortcuts[i].style.borderRadius = "0"
    }
  }
}


// main program
scrollButton.addEventListener("click", scrollToTop);
websiteLogo.addEventListener("click", scrollToTop);
categoryShortcuts[0].addEventListener("click", function() {scrollToEl(infoTitles[0])});
categoryShortcuts[1].addEventListener("click", function() {scrollToEl(infoTitles[1])});
categoryShortcuts[2].addEventListener("click", function() {scrollToEl(infoTitles[2])});
categoryShortcuts[3].addEventListener("click", function() {scrollToEl(infoTitles[3])});
darkModeSwitch.addEventListener("click", darkMode);
document.addEventListener("keydown", konamiCode);