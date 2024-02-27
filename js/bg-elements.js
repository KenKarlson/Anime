const bgElements = document.querySelectorAll(".set-bg");

for (let i = 0; i < bgElements.length; i++) {
  const src = bgElements[i].dataset.setbg;
  bgElements[i].style.backgroundImage = `url(${src})`;
}
