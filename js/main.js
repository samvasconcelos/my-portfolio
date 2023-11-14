"use strict";

import * as f from "./functions.js";

// ---------------------------------------------
// ELEMENTS
const navMenu = document.querySelector(".nav__menu");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const brickContainer = document.querySelector(".bricks__container");
const project = document.querySelectorAll(".project__container");
// SECTIONS
const header = document.getElementById("header");
const section = document.querySelectorAll(".section");
const about = document.getElementById("about");
const brick1 = document.querySelectorAll(".brick-1");
const brick2 = document.querySelectorAll(".brick-2");

// TEXT
const chamadaOla = document.querySelector(".chamada__animacao");
const text = document.querySelectorAll(".text");
const mainTitle = document.querySelector(".header__chamada");

// BUTTONS
const navBtns = document.querySelectorAll(".nav__btn");
const themeBtn = document.querySelector(".theme-btn");
const circleBtn = document.querySelector(".theme-circle-btn");
const menuLines = document.querySelectorAll(".line");
const menuBtn = document.querySelector(".menu-toggle-btn");
const menuBtnItems = document.querySelectorAll(".overlay-btn");

// INTERSECTION
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    }
  });
});

// ---------------------------------------------

// --------------------
//      FUNCTIONS
// --------------------

const headerMainText = `{ Welcome, dear visitor! } `;
f.typeWriting(chamadaOla, headerMainText);

let darkThemeOn = true;
let menuBtnOpen = false;

setInterval(f.showDots, 800);

// HEADER-SHADOW

// --------------------
//     CLICK EVENTS
// --------------------

// TOGGLE MODO CLARO / ESCURO
themeBtn.addEventListener("click", function () {
  // TROCA DE TEMAS CLARO E ESCURO
  darkThemeOn = !darkThemeOn;

  if (darkThemeOn) {
    header.style.boxShadow = "0 1rem 3rem 0.5rem #181818";
  }
  if (!darkThemeOn) {
    header.style.boxShadow =
      "0 1rem 3rem 0.5rem var(--grey-color-8), inset 0 -5rem 3rem 0.5rem var(--grey-color-10)";
  }

  // ALL TEXT
  text.forEach((t) => t.classList.toggle("dark--text"));
  navBtns.forEach((i) => i.classList.toggle("dark--text"));

  // CURSOR ANIMATION COLOR
  mainTitle.classList.toggle("light-box");

  // SECTIONS
  header.classList.toggle("light--header");
  section.forEach((s) => {
    s.classList.toggle("light--section");
  });

  // PROJECTS
  project.forEach((p) => {
    p.classList.toggle("dark-box");
    p.classList.toggle("light-box");
  });

  // SHADOWS OF SECTIONS
  section.forEach((s) => {
    s.classList.toggle("section-shadow-dark");
    s.classList.toggle("section-shadow-light");
  });

  // BRICK BACKGROUND
  brickContainer.classList.toggle("brick-dark-background");
  brickContainer.classList.toggle("brick-light-background");

  // MENU BUTTON
  menuLines.forEach((line) => {
    line.classList.toggle("dark-box");
  });

  // ICONE DO BOTÃO-DARK-MODE
  circleBtn.classList.toggle("icon--change");
});

// SHOW MENU ON CLICK
menuBtn.addEventListener("click", function () {
  // MENU ABERTO E FECHADO
  menuBtnOpen = !menuBtnOpen;

  // SHOW MOBILE NAV
  overlay.classList.toggle("hidden");
  navMenu.classList.toggle("show--menu");
  body.classList.add("scroll");

  // TOGGLE MENU OPEN ICON
  f.menuToggle();
  menuBtn.classList.toggle("menu-open");

  // SE TEMA CLARO ESTIVER ATIVO, CLAREAR BOTÃO MENU
  if (!darkThemeOn) {
    f.menuToggleDarkColor();
  }
});

// OVERLAY MENU CLOSE ON CLICK
overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  body.classList.remove("scroll");
  f.menuClose();
  menuBtn.classList.toggle("menu-open");

  if (!darkThemeOn) {
    f.menuToggleDarkColor();
  }
});

// CLOSE TOGGLE MENU AND ICON REVERSE ANIMATION
menuBtnItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    f.menuClose();
  });
});
