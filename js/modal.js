//Open modal block
"use strict";
const modal = document.querySelector(".search-model");
const searchBtn = document.querySelector(".search-switch");
const closeBtn = modal.querySelector(".search-close-switch");

const modalSearchOpen = () => {
  searchBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });
};
const modalSearchClose = () => {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

modalSearchOpen();
modalSearchClose();
