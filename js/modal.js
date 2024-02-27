//Open modal block
"use strict";
const modal = document.querySelector(".search-model");
const searchBtn = document.querySelector(".icon_search");
const closeBtn = modal.querySelector(".search-close-switch");

searchBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
