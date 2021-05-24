// variables
var rootElement = document.documentElement;
var bodyElement = document.body;

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
var DarkModeSwitchNum = 0;
var easterEggLayer = document.createElement("div");
var darkModeLayer = document.createElement("div");

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

function maxDocumentHeight() {
  return Math.max(bodyElement.scrollHeight, bodyElement.offsetHeight, rootElement.clientHeight, rootElement.scrollHeight, rootElement.offsetHeight);
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
  DarkModeSwitchNum++;

  if (darkModeEnabled) {
    darkModeSwitch.style.outline = "none"
    darkModeSwitch.src = "images/dark_mode/dark_mode_logo_off.png";
    setTimeout(function() {                                 // the color layer must be delayed to get the up-to-date document height
      darkModeLayer.id = "darkModeLayer";
      darkModeLayer.style.position = "absolute";
      darkModeLayer.style.flex = "1";
      darkModeLayer.style.zIndex = "10";
      darkModeLayer.style.pointerEvents = "none";
      darkModeLayer.style.top = "0";
      darkModeLayer.style.left = "0";
      darkModeLayer.style.width = "100%";                      // need to fix
      darkModeLayer.style.height = maxDocumentHeight() + "px";      // //
      darkModeLayer.style.overflow = "auto";
      darkModeLayer.style.backgroundColor = "rgba(97, 97, 97, 1)";
      darkModeLayer.style.mixBlendMode = "multiply";
      document.body.appendChild(darkModeLayer);
    }, 100)
  }  
  else {
    darkModeSwitch.style.outline = "7px solid white";
    darkModeSwitch.style.outlineOffset = "-10px"
    darkModeSwitch.src = "images/dark_mode/dark_mode_logo_on.png";
    darkModeLayer.remove();
  }

  if (DarkModeSwitchNum == 5) {
    alert("stop this rn.")
  }
}

function konamiCode(event) {
  charList.push(event.keyCode)

  if (charList.length > 10) {
    charList = charList.slice((charList.length-10), (charList.length-1+1));
  }

  if (_.isEqual(charList, konamiCodeChars)) {
    randomItem(musics).play();

    document.title = "HUGO_HYOUG_JUNIOR";
    favicon.href = "images/favicons/favicon_8bits.ico";

    background.style.backgroundImage = "none";
    background.style.backgroundColor = "rgb(0, 0, 0)";

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

    setTimeout(function() {                                 // the color layer must be delayed to get the up-to-date document height
      easterEggLayer.id = "easterEggLayer";
      easterEggLayer.style.position = "absolute";
      easterEggLayer.style.flex = "1";
      easterEggLayer.style.zIndex = "10";
      easterEggLayer.style.pointerEvents = "none";
      easterEggLayer.style.top = "0";
      easterEggLayer.style.left = "0";
      easterEggLayer.style.width = "100%";                      // need to fix
      easterEggLayer.style.height = maxDocumentHeight() + "px";      // //
      easterEggLayer.style.overflow = "auto";
      easterEggLayer.style.backgroundColor = "rgba(0, 255, 0, 1)";
      easterEggLayer.style.mixBlendMode = "multiply";
      document.body.appendChild(easterEggLayer);
    }, 100)
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