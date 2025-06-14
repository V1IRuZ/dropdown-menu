function dropDownMenuHover(element, button) {
  const parentElement = document.querySelector(element);
  const dropDownButton = document.querySelector(button);

  if (!parentElement || !dropDownButton) {
    console.error("Invalid element or button selector.");
    return;
  }

  parentElement.style.display = "none";
  parentElement.style.position = "absolute";
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

function dropDownMenuClick(element, button) {
  const wrapperElement = document.querySelector(element);
  const menuButton = document.querySelector(button);

  if (!wrapperElement || !menuButton) {
    console.error("Invalid element or button selector.");
    return;
  }

  wrapperElement.style.display = "none";
  wrapperElement.style.position = "absolute";
  menuButton.style.position = "relative";

  const showHideMenu = () => {
    if (wrapperElement.classList.contains("visible-dd")) {
      return (wrapperElement.style.display = "block");
    }
    wrapperElement.style.display = "none";
  };

  menuButton.addEventListener("click", () => {
    wrapperElement.classList.toggle("visible-dd");
    showHideMenu(wrapperElement);
  });

  document.addEventListener("click", (event) => {
    if (!wrapperElement.contains(event.target) && event.target !== menuButton) {
      wrapperElement.classList.remove("visible-dd");
      showHideMenu(wrapperElement);
    }
  });
}

module.exports = { dropDownMenuClick, dropDownMenuHover };
