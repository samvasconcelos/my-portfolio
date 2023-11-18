const menuLineTop = document.querySelector(".line-top");
const menuLineMiddle = document.querySelector(".line-middle");
const menuLineBottom = document.querySelector(".line-bottom");
const dots = document.querySelector(".reticencias");

// TYPE-WRITING ANIMATION
export function typeWriting(element, text) {
  let currentIndex = 0;
  const interval = setInterval(() => {
    if (currentIndex < text.length) {
      setTimeout(() => {
        const textToShow = text.slice(0, currentIndex + 1);
        element.textContent = textToShow;
        currentIndex++;
      }, 1000);
    }
  }, 115);
}

// MENU TOGGLE OPEN CLASS
export function menuToggle() {
  menuLineTop.classList.toggle("line-top-open");
  menuLineMiddle.classList.toggle("line-middle-open");
  menuLineBottom.classList.toggle("line-bottom-open");
}
// MENU REMOVE OPEN CLASS
export function menuClose() {
  menuLineTop.classList.remove("line-top-open");
  menuLineMiddle.classList.remove("line-middle-open");
  menuLineBottom.classList.remove("line-bottom-open");
}

export function menuToggleDarkColor() {
  menuLineTop.classList.toggle("dark-box");
  menuLineMiddle.classList.toggle("dark-box");
  menuLineBottom.classList.toggle("dark-box");
}

// DOTS SECTION PROJECTS
let dotsCounter = 0;
export function showDots() {
  dotsCounter++;
  if (dotsCounter > 4) {
    dotsCounter = 0;
    dots.style.opacity = "0";
    dots.textContent = ".";
    return;
  }
  if (dotsCounter === 1) {
    dots.style.opacity = "1";
    return;
  }
  dots.style.opacity = "1";
  dotsCounter++;
  dots.textContent += ".";
}
