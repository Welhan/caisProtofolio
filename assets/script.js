// turn page whern click next or prev button
const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnID = el.getAttribute("data-page");
    const pageTurn = document.querySelector("#" + pageTurnID);

    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");

      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add("turn");

      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});
