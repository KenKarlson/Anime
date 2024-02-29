//Open modal block
const modalBlock = () => {
  const modal = document.querySelector(".search-model");
  const searchBtn = document.querySelector(".search-switch");
  const closeBtn = modal.querySelector(".search-close-switch");
  const inputModal = modal.querySelector("#search-input");

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
  const printInputText = () => {
    let inputText = inputModal.value;
    console.log(inputText);
  };
  const clickToPrint = () => {
    inputModal.addEventListener("click", (e) => {
      e.preventDefault();
      printInputText();
    });
  };
  const inputToPrint = () => {
    inputModal.addEventListener("input", (e) => {
      e.preventDefault();
      printInputText();
    });
  };
  modalSearchOpen();
  modalSearchClose();
  clickToPrint();
  inputToPrint();
};

modalBlock();
