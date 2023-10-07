let divs = document.querySelectorAll(".child");
let exp = document.querySelector(".bgDiv");

if (localStorage.getItem("color")) {
  exp.style.backgroundColor = localStorage.getItem("color");
  divs.forEach((div) => {
    div.classList.remove("active");
  });
  document
    .querySelector(`[data-color="${localStorage.getItem("color")}"]`)
    .classList.add("active");
}

divs.forEach((div) => {
  div.addEventListener("click", (e) => {
    divs.forEach((div) => {
      div.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    localStorage.setItem("color", e.currentTarget.dataset.color);
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
