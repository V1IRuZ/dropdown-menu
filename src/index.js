import "./styles.css";

function dropDownMenuHover(element, button) {
  const parentElement = document.querySelector(element);
  parentElement.style.display = "none";
  parentElement.style.position = "absolute";

  const dropDownButton = document.querySelector(button);
  dropDownButton.style.position = "relative";
  dropDownButton.addEventListener("mouseenter", () => {
    parentElement.style.display = "block";
  });

  parentElement.addEventListener("mouseleave", () => {
    setTimeout(() => {
      parentElement.style.display = "none";
    }, 200);
  });
}

dropDownMenuHover(".content", ".my-btn");
dropDownMenuHover(".okay", ".test");
