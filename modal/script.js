let openButton = document.querySelector(".open");
let closeButton = document.querySelector(".fa-circle-xmark");
let overlay = document.querySelector(".overlay");

openButton.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
});
