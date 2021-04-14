var scrollButton = document.getElementById("scrollButton");
var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollButton.addEventListener("click", scrollToTop);