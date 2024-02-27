'use strict';

const preloader = document.querySelector(".preloder");
preloader.classList.add("active");
setTimeout(() => {
  preloader.classList.remove("active");
}, 3000);
