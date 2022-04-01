"use strict";
const navBar = document.querySelector(".nav-button");
const showModal = document.querySelector(".hide");
const headInfo = document.querySelector(".head-info");
const heroImage = document.querySelector(".hero");

navBar.addEventListener("click", function () {
  showModal.classList.toggle("hide");
  headInfo.classList.toggle("hide");
});
