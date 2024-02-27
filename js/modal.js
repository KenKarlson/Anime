//Open modal block
"use strict";
const modal = document.querySelector(".search-model");
const btn = document.querySelector(".icon_search");
const closeBtn = modal.querySelector(".search-close-switch");

btn.addEventListener("click", () => {
  modal.style.display === "none"
    ? (modal.style.display = "block")
    : (modal.style.display = "none");
  //console.log("click");
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
