
let plusBtns = document.querySelectorAll(".plusBtn");
plusBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let answer = document.querySelectorAll(".answer")[index];
    answer.classList.toggle("show");
  });
});
