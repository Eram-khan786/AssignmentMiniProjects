let bar = document.querySelector(".fa-bars");
let leftSide = document.querySelector(".left");

bar.addEventListener("click", () => {
  if (leftSide.classList.contains("hidden")) {
    leftSide.classList.remove("hidden");
  } else {
    leftSide.classList.add("hidden");
  }
});
